"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const settings_1 = require("../settings");
const errors_1 = require("../errors");
const events_1 = require("../events");
/** 与用户相关的服务 */
class UserService extends service_1.Service {
    // static currentUser = new ValueStore<User>()
    url(path) {
        if (!settings_1.settings.permissionServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${settings_1.settings.permissionServiceUrl}/${path}`;
    }
    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'register' });
    }
    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'resetPassword' });
    }
    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile, password, smsId, verifyCode) {
        let url = this.url('user/resetPassword');
        return this.postByJson(url, { mobile, password, smsId, verifyCode });
    }
    /**
     * 重置手机号码
     * @param mobile 需要重置的新手机号
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetMobile(mobile, smsId, verifyCode) {
        let url = this.url('user/resetMobile');
        return this.postByJson(url, { mobile, smsId, verifyCode });
    }
    /**
     * 退出登录
     */
    logout() {
        if (UserService.loginInfo.value == null)
            return;
        //TODO: 将服务端 token 设置为失效
        events_1.events.logout.fire(this, UserService.loginInfo.value);
        service_1.Service.setStorageLoginInfo(null);
        UserService.loginInfo.value = null;
    }
    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/login');
            let r = yield this.postByJson(url, { username, password });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            UserService.loginInfo.value = r;
            UserService.setStorageLoginInfo(r);
            events_1.events.login.fire(this, r);
            return r;
        });
    }
    /**
     * 注册
     * @param mobile 手机号
     * @param password 密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    register(mobile, password, smsId, verifyCode, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/register');
            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode, data });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            UserService.setStorageLoginInfo(r);
            events_1.events.register.fire(this, r);
            return r;
        });
    }
    /**
     * 获取用户个人信息
     */
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/me');
            let user = yield this.getByJson(url);
            return user;
        });
    }
    /**
     * 获取用户
     * @param userId 用户编号
     */
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/item');
            let user = yield this.getByJson(url, { userId });
            return user;
        });
    }
    /**
     * 更新用户信息
     * @param user 用户
     */
    update(user) {
        let url = this.url('user/update');
        return this.postByJson(url, { user });
    }
    /**
     * 获取当前登录用户的角色
     */
    myRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/getRoles');
            let roles = yield this.getByJson(url);
            return roles;
        });
    }
}
exports.UserService = UserService;
