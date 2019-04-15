import { PermissionService } from "./permission-service";

/** 与用户相关的服务，这个类已经废弃，请使用  PermissionService*/
export class UserService extends PermissionService {

    // protected url(path: string) {
    //     if (!PermissionService.baseUrl)
    //         throw errors.serviceUrlCanntNull('permissionService')

    //     return `${PermissionService.baseUrl}/${path}`
    // }

    // /** 
    //  * 发送注册操作验证码
    //  * @param mobile 接收验证码的手机号
    //  */
    // sendRegisterVerifyCode(mobile: string) {
    //     let url = this.url('sms/sendVerifyCode')
    //     return this.postByJson<{ smsId: string }>(url, { mobile, type: 'register' })
    // }


    // /**
    //  * 校验验证码
    //  * @param smsId 验证码信息的 ID 号
    //  * @param verifyCode 验证码
    //  */
    // async checkVerifyCode(smsId: string, verifyCode: string) {
    //     if (!smsId) throw errors.argumentNull('smsId')
    //     if (!verifyCode) throw errors.argumentNull('verifycode')

    //     let url = this.url('sms/checkVerifyCode')
    //     let r = await this.postByJson<boolean>(url, { smsId, verifyCode })
    //     return r
    // }

    // /**
    //  * 发送重置密码操作验证码
    //  * @param mobile 接收验证码的手机号
    //  */
    // sendResetVerifyCode(mobile: string) {
    //     if (!mobile) throw errors.argumentNull('mobile')

    //     let url = this.url('sms/sendVerifyCode')
    //     return this.postByJson<{ smsId: string }>(url, { mobile, type: 'resetPassword' })
    // }

    // /**
    //  * 重置密码
    //  * @param mobile 手机号
    //  * @param password 新密码
    //  * @param smsId 短信编号
    //  * @param verifyCode 验证码
    //  */
    // resetPassword(mobile: string, password: string, smsId: string, verifyCode: string) {
    //     if (!mobile) throw errors.argumentNull('mobile')
    //     if (!password) throw errors.argumentNull('password')
    //     if (!smsId) throw errors.argumentNull('smsId')
    //     if (!verifyCode) throw errors.argumentNull('verifyCode')

    //     let url = this.url('user/resetPassword')
    //     return this.postByJson(url, { mobile, password, smsId, verifyCode })
    // }

    // /**
    //  * 重置手机号码
    //  * @param mobile 需要重置的新手机号
    //  * @param smsId 短信编号
    //  * @param verifyCode 验证码
    //  */
    // resetMobile(mobile: string, smsId: string, verifyCode: string) {
    //     if (!mobile) throw errors.argumentNull('mobile')
    //     if (!smsId) throw errors.argumentNull('smsId')
    //     if (!verifyCode) throw errors.argumentNull('verifyCode')

    //     let url = this.url('user/resetMobile')
    //     return this.postByJson(url, { mobile, smsId, verifyCode })
    // }

    // /**
    //  * 退出登录
    //  */
    // logout() {
    //     if (UserService.loginInfo.value == null)
    //         return

    //     //TODO: 将服务端 token 设置为失效

    //     events.logout.fire(this, UserService.loginInfo.value)
    //     Service.setStorageLoginInfo(null)
    //     UserService.loginInfo.value = null
    // }

    // /**
    //  * 登录
    //  * @param username 用户名
    //  * @param password 密码
    //  */
    // async login(username: string, password: string) {
    //     if (!username) throw errors.argumentNull('username')
    //     if (!password) throw errors.argumentNull('password')

    //     let url = this.url('user/login')
    //     let r = await this.postByJson<LoginInfo | null>(url, { username, password })
    //     if (r == null)
    //         throw errors.unexpectedNullResult()

    //     UserService.loginInfo.value = r
    //     UserService.setStorageLoginInfo(r)
    //     events.login.fire(this, r)
    //     return r
    // }

    // /**
    //  * 注册
    //  * @param mobile 手机号
    //  * @param password 密码
    //  * @param smsId 短信编号
    //  * @param verifyCode 验证码
    //  */
    // async register(mobile: string, password: string, smsId: string, verifyCode: string, data?: { [key: string]: any }) {
    //     if (!mobile) throw errors.argumentNull('mobile')
    //     if (!password) throw errors.argumentNull('password')
    //     if (!smsId) throw errors.argumentNull('smsId')
    //     if (!verifyCode) throw errors.argumentNull('verifyCode')

    //     let url = this.url('user/register')
    //     let r = await this.postByJson<LoginInfo>(url, { mobile, password, smsId, verifyCode, data })
    //     if (r == null)
    //         throw errors.unexpectedNullResult()

    //     UserService.setStorageLoginInfo(r)
    //     events.register.fire(this, r)

    //     return r;
    // }

    // /**
    //  * 获取用户个人信息
    //  */
    // async me() {
    //     let url = this.url('user/me')
    //     let user = await this.getByJson<User>(url)
    //     return user
    // }

    // /**
    //  * 获取用户
    //  * @param userId 用户编号
    //  */
    // async getUser(userId: string) {
    //     let url = this.url('user/item')
    //     let user = await this.getByJson<User | null>(url, { userId })
    //     return user
    // }

    // /**
    //  * 更新用户信息
    //  * @param user 用户
    //  */
    // update(user: User) {
    //     let url = this.url('user/update')
    //     return this.postByJson(url, { user })
    // }

    // /**
    //  * 获取当前登录用户的角色
    //  */
    // async myRoles() {
    //     let url = this.url('user/getRoles')
    //     let roles = await this.getByJson<Role[]>(url)
    //     return roles
    // }
}






