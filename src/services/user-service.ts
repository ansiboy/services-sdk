import { Service } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";
import { events } from "../events";


export interface LoginInfo {
    token: string,
    userId: string,
}


let user: User | null

/** 与用户相关的服务 */
export class UserService extends Service {
    static readonly LoginInfoStorageName = 'LoginInfo'
    static loginInfo: LoginInfo | null = UserService.getStorageLoginInfo()
    private url(path: string) {
        if (!settings.permissionServiceUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${settings.permissionServiceUrl}/${path}`
    }
    
    private static getStorageLoginInfo(): LoginInfo | null {
        let loginInfoSerialString = localStorage.getItem(UserService.LoginInfoStorageName)
        if (!loginInfoSerialString)
            return null

        try {
            let loginInfo = JSON.parse(loginInfoSerialString)
            return loginInfo
        }
        catch (e) {
            console.error(e)
            console.log(loginInfoSerialString)
            return null
        }
    }
    private static setStorageLoginInfo(value: LoginInfo | null) {
        if (value == null) {
            localStorage.removeItem(UserService.LoginInfoStorageName)
            return
        }

        localStorage.setItem(UserService.LoginInfoStorageName, JSON.stringify(value))
    }

    /** 
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile: string) {
        let url = this.url('sms/sendVerifyCode')
        return this.postByJson<{ smsId: string }>(url, { mobile, type: 'register' })
    }

    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile: string) {
        let url = this.url('sms/sendVerifyCode')
        return this.postByJson<{ smsId: string }>(url, { mobile, type: 'resetPassword' })
    }

    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile: string, password: string, smsId: string, verifyCode: string) {
        let url = this.url('user/resetPassword')
        return this.postByJson(url, { mobile, password, smsId, verifyCode })
    }

    /**
     * 退出登录
     */
    logout() {
        if (UserService.loginInfo == null)
            return

        //TODO: 将服务端 token 设置为失效

        events.logout.fire(this, UserService.loginInfo)

        localStorage.removeItem(UserService.LoginInfoStorageName)
        UserService.loginInfo = null
    }

    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    async login(username: string, password: string) {
        let url = this.url('user/login')
        let r = await this.postByJson<LoginInfo | null>(url, { username, password })
        if (r == null)
            throw errors.unexpectedNullResult()

        events.login.fire(this, r)
        return r
    }

    /**
     * 注册
     * @param mobile 手机号
     * @param password 密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    async register(mobile: string, password: string, smsId: string, verifyCode: string) {
        let url = this.url('user/register')
        let r = await this.postByJson<LoginInfo>(url, { mobile, password, smsId, verifyCode })
        if (r == null)
            throw errors.unexpectedNullResult()

        UserService.setStorageLoginInfo(r)
        events.login.fire(this, r)

        return r;
    }

    /**
     * 获取用户个人信息
     */
    async me() {
        if (user == null) {
            let url = this.url('user/me')
            user = await this.getByJson<User>(url)
            if (user == null) {
                return null
            }
            user.data = user.data || {}
        }
        return user;
    }

    /**
     * 获取用户
     * @param userId 用户编号
     */
    async getUser(userId: string) {
        let url = this.url('user/item')
        user = await this.getByJson<User | null>(url, { userId })
        if (user == null) {
            return null
        }
        user.data = user.data || {}
        return user
    }

    /**
     * 更新用户信息
     * @param user 用户
     */
    update(user: User) {
        let url = this.url('user/update')
        return this.postByJson(url, { user })
    }
}

export interface User {
    id: string,
    user_name?: string,
    mobile?: string,
    email?: string,
    password?: string,
    openid?: string,
    create_date_time: Date,
    data: {
        head_image?: string,
        nick_name?: string,
    }
}

