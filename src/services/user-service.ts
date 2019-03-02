import { Service } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";
import { events } from "../events";


export interface LoginInfo {
    token: string,
    userId: string,
}

// const TOKEN_NAME = 'app-token'

// type LoginResult = { token: string, userId: string }
let user: User | null

export class UserService extends Service {
    static readonly LoginInfoStorageName = 'LoginInfo'
    static loginInfo: LoginInfo | null = UserService.getStrageLoginInfo()
    private url(path: string) {
        if (!settings.permissionServiceUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${settings.permissionServiceUrl}/${path}`
    }
    private static getStrageLoginInfo(): LoginInfo | null {
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
    // static token = new chitu.ValueStore(localStorage[TOKEN_NAME] || '');
    sentRegisterVerifyCode(mobile: string) {
        let url = this.url('sms/sendVerifyCode')
        return this.postByJson<{ smsId: string }>(url, { mobile, type: 'register' })
    }
    sentResetVerifyCode(mobile: string) {
        let url = this.url('sms/sendVerifyCode')
        return this.postByJson<{ smsId: string }>(url, { mobile, type: 'resetPassword' })
    }
    resetPassword(mobile: string, password: string, smsId: string, verifyCode: string) {
        let url = this.url('user/resetPassword')
        return this.postByJson(url, { mobile, password, smsId, verifyCode })
    }
    logout() {
        if (UserService.loginInfo == null)
            return

        //TODO: 将服务端 token 设置为失效

        events.logout.fire(this, UserService.loginInfo)

        localStorage.removeItem(UserService.LoginInfoStorageName)
        UserService.loginInfo = null
    }
    async login(username: string, password: string) {
        let url = this.url('user/login')
        let r = await this.postByJson<LoginInfo | null>(url, { username, password })
        if (r == null)
            throw errors.unexpectedNullResult()

        events.login.fire(this, r)
        return r
    }
    async register(mobile: string, password: string, smsId: string, verifyCode: string) {
        let url = this.url('user/register')
        let r = await this.postByJson(url, { mobile, password, smsId, verifyCode })

        return r;
    }
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
    async getUser(userId: string) {
        let url = this.url('user/item')
        user = await this.getByJson<User | null>(url, { userId })
        if (user == null) {
            return null
        }
        user.data = user.data || {}
        return user
    }
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

