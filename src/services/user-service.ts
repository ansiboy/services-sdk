import { Service, LoginInfo } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";
import { events } from "../events";
import { ValueStore } from "maishu-chitu";

let user: User | null

/** 与用户相关的服务 */
export class UserService extends Service {

    static currentUser = new ValueStore<User>()

    private url(path: string) {
        if (!settings.permissionServiceUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${settings.permissionServiceUrl}/${path}`
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

        Service.setStorageLoginInfo(null)
        events.logout.fire(this, UserService.loginInfo)

        UserService.loginInfo = null
        UserService.currentUser.value = null
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

        UserService.setStorageLoginInfo(r)
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
        events.register.fire(this, r)

        return r;
    }

    /**
     * 获取用户个人信息
     */
    async me() {
        if (UserService.currentUser.value) {
            return UserService.currentUser.value
        }

        let url = this.url('user/me')
        let user = await this.getByJson<User>(url)
        if (user == null) {
            return null
        }

        user.data = user.data || {}
        UserService.currentUser.value = user
        return user
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

    /**
     * 获取当前登录用户的角色
     */
    async myRoles() {
        let url = this.url('user/getRoles')
        let roles = await this.getByJson<Role[]>(url)
        return roles
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
    data: { [key: string]: any }
}

export interface Role {
    id: string,
    name: string,
}


