"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const errors_1 = require("../errors");
// import { events } from "../events";
class PermissionService extends service_1.Service {
    constructor() {
        super(...arguments);
        this.role = new RoleModule(this);
        this.user = new UserModule(this);
        this.sms = new SMSModule(this);
        this.resource = {
            list: (args) => {
                let url = this.url("resource/list");
                return this.getByJson(url, { args });
            },
            item: (id) => {
                let url = this.url("resource/item");
                return this.getByJson(url, { id });
            },
            remove: (id) => {
                let url = this.url("resource/remove");
                return this.post(url, { id });
            },
            add: (item) => {
                let url = this.url("resource/add");
                return this.postByJson(url, { item });
            },
            update: (item) => {
                let url = this.url("resource/update");
                return this.postByJson(url, { item });
            }
        };
        this.token = {
            list: (args) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('token/list');
                let r = this.getByJson(url, { args });
                return r;
            }),
            add: (item) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url("token/add");
                let r = yield this.postByJson(url, { item });
                return r;
            })
        };
    }
    url(path) {
        if (!PermissionService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        if (PermissionService.baseUrl.endsWith("/"))
            return `${PermissionService.baseUrl}${path}`;
        return `${PermissionService.baseUrl}/${path}`;
    }
    /**
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */
    removeUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userId)
                throw errors_1.errors.argumentNull('userId');
            let url = this.url('application/removeUser');
            return this.deleteByJson(url, { userId });
        });
    }
    /**
     * 获取当前应用的所有用户
     * @param args 数据源选择参数
     */
    getApplicatinUsers(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (args == null)
                throw errors_1.errors.argumentNull('args');
            let url = this.url('application/users');
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            return result;
        });
    }
    /**
     * 获取用角色
     * @param userId 用户编号
     */
    getUserRoles(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('role/userRoles');
            let r = yield this.getByJson(url, { userIds: [userId] });
            return r[userId];
        });
    }
}
exports.PermissionService = PermissionService;
class ServiceModule {
    constructor(service) {
        this.service = service;
        this.getByJson = this.service.getByJson.bind(this.service);
        this.postByJson = this.service.postByJson.bind(this.service);
        this.get = this.service.get.bind(this.service);
        this.post = this.service.post.bind(this.service);
    }
    url(path) {
        if (!PermissionService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${PermissionService.baseUrl}/${path}`;
    }
}
class UserModule extends ServiceModule {
    constructor() {
        super(...arguments);
        this.role = {
            list: (userId) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url("user/role/list");
                let r = yield this.getByJson(url, { userId });
                return r;
            })
        };
        this.resource = {
            list: (userId) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url("user/resource/list");
                let r = yield this.getByJson(url, { userId });
                return r;
            })
        };
    }
    /** 获取用户列表 */
    list(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/list');
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            return result;
        });
    }
    /**
     * 更新用户信息
     * @param item 用户
     */
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/update');
            let result = yield this.postByJson(url, { user: item });
            return result;
        });
    }
    /**
     * 获取用户
     * @param userId 用户编号
     */
    item(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/item');
            let user = yield this.getByJson(url, { userId });
            return user;
        });
    }
    /**
     * 添加用户信息
     * @param item 用户
     */
    add(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/add');
            let result;
            let r = yield this.postByJson(url, { item });
            return r;
        });
    }
    /** 通过手机获取用户 */
    listByMobile(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mobile)
                throw errors_1.errors.argumentNull('mobile');
            let args = {};
            args.filter = `mobile = '${mobile}'`;
            let r = yield this.list(args);
            return r.dataItems[0];
        });
    }
    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile, password, smsId, verifyCode) {
        if (!mobile)
            throw errors_1.errors.argumentNull('mobile');
        if (!password)
            throw errors_1.errors.argumentNull('password');
        if (!smsId)
            throw errors_1.errors.argumentNull('smsId');
        if (!verifyCode)
            throw errors_1.errors.argumentNull('verifyCode');
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
        if (!mobile)
            throw errors_1.errors.argumentNull('mobile');
        if (!smsId)
            throw errors_1.errors.argumentNull('smsId');
        if (!verifyCode)
            throw errors_1.errors.argumentNull('verifyCode');
        let url = this.url('user/resetMobile');
        return this.postByJson(url, { mobile, smsId, verifyCode });
    }
    login(arg0, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let args;
            let username;
            if (typeof arg0 == "string") {
                username = arg0;
                if (!username)
                    throw errors_1.errors.argumentNull('username');
                if (!password)
                    throw errors_1.errors.argumentNull('password');
                args = { username, password };
            }
            else {
                args = arg0;
            }
            let url = this.url('user/login');
            let r = yield this.postByJson(url, args);
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
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
            if (!mobile)
                throw errors_1.errors.argumentNull('mobile');
            if (!password)
                throw errors_1.errors.argumentNull('password');
            if (!smsId)
                throw errors_1.errors.argumentNull('smsId');
            if (!verifyCode)
                throw errors_1.errors.argumentNull('verifyCode');
            let url = this.url('user/register');
            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode, data });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
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
            delete user.password;
            return user;
        });
    }
}
class RoleModule extends ServiceModule {
    constructor() {
        super(...arguments);
        this.resource = {
            /**
             * 获取角色所允许访问的资源 id
             * @param roleId 指定的角色编号
             */
            ids: (roleId) => __awaiter(this, void 0, void 0, function* () {
                if (!roleId)
                    throw errors_1.errors.argumentNull('roleId');
                let url = this.url('role/resourceIds');
                let r = yield this.getByJson(url, { roleId });
                return r || [];
            })
        };
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url("role/list");
            return this.get(url);
        });
    }
    item(id) {
        let url = this.url("role/item");
        return this.get(url, { id });
    }
    add(arg1, arg2) {
        let url = this.url("role/add");
        let item;
        if (typeof arg1 == "string") {
            item = { name: arg1, remark: arg2 };
        }
        else {
            item = arg1;
        }
        return this.postByJson(url, { item });
    }
    /**
     * 删除角色
     * @param id 要删除的角色编号
     */
    remove(id) {
        let url = this.url("role/remove");
        return this.postByJson(url, { id });
    }
    update(item) {
        let url = this.url("role/update");
        return this.postByJson(url, { item });
    }
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    resourceIds(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!roleId)
                throw errors_1.errors.argumentNull('roleId');
            let url = this.url('role/resourceIds');
            let r = yield this.getByJson(url, { roleId });
            return r || [];
        });
    }
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setResource(roleId, resourceIds) {
        if (!roleId)
            throw errors_1.errors.argumentNull('roleId');
        if (!resourceIds)
            throw errors_1.errors.argumentNull('resourceIds');
        let url = this.url('role/setResources');
        return this.postByJson(url, { roleId, resourceIds });
    }
}
class SMSModule extends ServiceModule {
    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'register' });
    }
    /**
     * 校验验证码
     * @param smsId 验证码信息的 ID 号
     * @param verifyCode 验证码
     */
    checkVerifyCode(smsId, verifyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!smsId)
                throw errors_1.errors.argumentNull('smsId');
            if (!verifyCode)
                throw errors_1.errors.argumentNull('verifycode');
            let url = this.url('sms/checkVerifyCode');
            let r = yield this.postByJson(url, { smsId, verifyCode });
            return r;
        });
    }
    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile) {
        if (!mobile)
            throw errors_1.errors.argumentNull('mobile');
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'resetPassword' });
    }
}
