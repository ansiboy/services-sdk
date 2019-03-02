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
// const TOKEN_NAME = 'app-token'
// type LoginResult = { token: string, userId: string }
let user;
class UserService extends service_1.Service {
    url(path) {
        if (!settings_1.settings.permissionServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${settings_1.settings.permissionServiceUrl}/${path}`;
    }
    static getStrageLoginInfo() {
        let loginInfoSerialString = localStorage.getItem(UserService.LoginInfoStorageName);
        if (!loginInfoSerialString)
            return null;
        try {
            let loginInfo = JSON.parse(loginInfoSerialString);
            return loginInfo;
        }
        catch (e) {
            console.error(e);
            console.log(loginInfoSerialString);
            return null;
        }
    }
    // static token = new chitu.ValueStore(localStorage[TOKEN_NAME] || '');
    sentRegisterVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'register' });
    }
    sentResetVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'resetPassword' });
    }
    resetPassword(mobile, password, smsId, verifyCode) {
        let url = this.url('user/resetPassword');
        return this.postByJson(url, { mobile, password, smsId, verifyCode });
    }
    logout() {
        if (UserService.loginInfo == null)
            return;
        //TODO: 将服务端 token 设置为失效
        events_1.events.logout.fire(this, UserService.loginInfo);
        localStorage.removeItem(UserService.LoginInfoStorageName);
        UserService.loginInfo = null;
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/login');
            let r = yield this.postByJson(url, { username, password });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            events_1.events.login.fire(this, r);
            return r;
        });
    }
    register(mobile, password, smsId, verifyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/register');
            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode });
            return r;
        });
    }
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            if (user == null) {
                let url = this.url('user/me');
                user = yield this.getByJson(url);
                if (user == null) {
                    return null;
                }
                user.data = user.data || {};
            }
            return user;
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/item');
            user = yield this.getByJson(url, { userId });
            if (user == null) {
                return null;
            }
            user.data = user.data || {};
            return user;
        });
    }
    update(user) {
        let url = this.url('user/update');
        return this.postByJson(url, { user });
    }
}
UserService.LoginInfoStorageName = 'LoginInfo';
UserService.loginInfo = UserService.getStrageLoginInfo();
exports.UserService = UserService;
