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
const errors_1 = require("../errors");
const events_1 = require("../events");
class PermissionService extends service_1.Service {
    constructor() {
        super();
        this.self = this;
        this.currentUser = {
            resource: {
                list: () => {
                    let url = this.url("current-user/resource/list");
                    return this.get(url);
                }
            }
        };
        this.role = {
            /**
             * 获取角色列表
             */
            list: () => {
                let url = this.url("role/list");
                return this.get(url);
            },
            /**
             * 获取单个角色
             * @param id 要获取的角色编号
             */
            item: (id) => {
                let url = this.url("role/item");
                return this.get(url, { id });
            },
            /**
             * 添加角色
             * @param name 要添加的角色名称
             * @param remark 要添加的角色备注
             */
            add: (item) => {
                let url = this.url("role/add");
                return this.postByJson(url, { item });
            },
            /**
             * 删除角色
             * @param id 要删除的角色编号
             */
            remove: (id) => {
                let url = this.url("role/remove");
                return this.postByJson(url, { id });
            },
            update: (item) => {
                let url = this.url("role/update");
                return this.postByJson(url, { item });
            },
            resource: {
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
            }
        };
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
        this.user = {
            list: (args) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('user/list');
                let result = yield this.getByJson(url, { args });
                if (result == null)
                    throw errors_1.errors.unexpectedNullResult();
                return result;
            }),
            update: (item) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('user/update');
                let result = yield this.postByJson(url, { user: item });
                return result;
            }),
            /**
             * 添加用户信息
             * @param item 用户
             */
            add: (item, roleIds) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('user/add');
                let result;
                let r = yield this.postByJson(url, { item, roleIds });
                return r;
            })
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
        return `${PermissionService.baseUrl}/${path}`;
    }
    // //=============================================================
    // // 资源相关
    // /** 添加资源 */
    // async addResource(item: Partial<Resource>) {
    //     if (!item) throw errors.argumentNull('item')
    //     let url = this.url('resource/add')
    //     let result = await this.postByJson<{ id: string }>(url, { item })
    //     Object.assign(item, result)
    //     return result
    // }
    // /** 更新资源 */
    // async updateResource(item: Partial<Resource>) {
    //     if (!item) throw errors.argumentNull('item')
    //     let url = this.url('resource/update')
    //     let result = await this.postByJson(url, { item })
    //     Object.assign(item, result)
    //     return result
    // }
    // /** 获取资源列表 */
    // async getResourceList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<Resource>> {
    //     if (!args) throw errors.argumentNull('args')
    //     let url = this.url('resource/list')
    //     if (!args.sortExpression)
    //         args.sortExpression = 'sort_number asc'
    //     type T = Resource & { data?: { visible?: boolean } }
    //     let result = await this.getByJson<DataSourceSelectResult<T>>(url, { args })
    //     if (result == null)
    //         throw errors.unexpectedNullResult()
    //     for (let i = 0; i < result.dataItems.length; i++) {
    //         result.dataItems[i].data = result.dataItems[i].data || {}
    //     }
    //     return result
    // }
    // /**
    //  * 删除指定的资源
    //  * @param id 要删除的资源编号
    //  */
    // async deleteResource(id: string) {
    //     if (!id) throw errors.argumentNull('id')
    //     let url = this.url('resource/remove')
    //     return this.postByJson(url, { id })
    // }
    // /**
    //  * 获取指定资源的子按钮
    //  * @param id 资源编号
    //  */
    // async getResourceChildCommands(id: string) {
    //     if (!id) throw errors.argumentNull('id')
    //     let buttonType: ResourceType = 'button'
    //     let filter = `parent_id = '${id}' and type = '${buttonType}'`
    //     let url = `resource/list`
    //     let result = await this.getByJson(url, { filter })
    //     return result
    // }
    //=============================================================
    // 角色相关
    // async getRoles(): Promise<Role[]> {
    //     let url = this.url('role/list')
    //     let r = await this.getByJson<Role[]>(url)
    //     return r || []
    // }
    getRole(id) {
        if (!id)
            throw errors_1.errors.argumentNull('id');
        let url = this.url('role/get');
        return this.getByJson(url, { id });
    }
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setRoleResource(roleId, resourceIds) {
        if (!roleId)
            throw errors_1.errors.argumentNull('roleId');
        if (!resourceIds)
            throw errors_1.errors.argumentNull('resourceIds');
        let url = this.url('role/setResources');
        return this.postByJson(url, { roleId, resourceIds });
    }
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    getRoleResourceIds(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!roleId)
                throw errors_1.errors.argumentNull('roleId');
            let url = this.url('role/resourceIds');
            let r = yield this.getByJson(url, { roleId });
            return r || [];
        });
    }
    /** 设置用户角色 */
    setUserRoles(userId, roleIds) {
        if (!userId)
            throw errors_1.errors.argumentNull('userId');
        if (!roleIds)
            throw errors_1.errors.argumentNull('roleIds');
        let url = this.url('user/setRoles');
        return this.postByJson(url, { userId, roleIds });
    }
    // addRole(name: string, remark?: string) {
    //     if (!name) throw errors.argumentNull("name");
    //     let url = this.url("role/add");
    //     return this.postByJson(url, { name, remark });
    // }
    // removeRole(id: string) {
    //     if (!id) throw errors.argumentNull("id");
    //     let url = this.url("role/remove");
    //     return this.postByJson(url, { id });
    // }
    //================================================================
    // 用户相关
    /** 获取用户列表 */
    getUserList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/list');
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            return result;
        });
    }
    /** 通过手机获取用户 */
    getUserByMobile(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mobile)
                throw errors_1.errors.argumentNull('mobile');
            let args = {};
            args.filter = `mobile = '${mobile}'`;
            let r = yield this.getUserList(args);
            return r.dataItems[0];
        });
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
    /**
     * 退出登录
     */
    logout() {
        if (service_1.Service.loginInfo.value == null)
            return;
        //TODO: 将服务端 token 设置为失效
        events_1.events.logout.fire(this, service_1.Service.loginInfo.value);
        service_1.Service.setStorageLoginInfo(null);
        service_1.Service.loginInfo.value = null;
    }
    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username)
                throw errors_1.errors.argumentNull('username');
            if (!password)
                throw errors_1.errors.argumentNull('password');
            let url = this.url('user/login');
            let r = yield this.postByJson(url, { username, password });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            service_1.Service.loginInfo.value = r;
            service_1.Service.setStorageLoginInfo(r);
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
            service_1.Service.setStorageLoginInfo(r);
            events_1.events.register.fire(this, r);
            return r;
        });
    }
    /**
     * 获取用户个人信息
     */
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!service_1.Service.loginInfo.value) {
                return null;
            }
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
    // async addUser(item: Partial<User>) {
    //     let url = this.url('user/add')
    //     let result: { id: string }
    //     let r = await this.postByJson<typeof result>(url, { item })
    //     return r
    // }
    /**
     * 更新用户信息
     * @param item 用户
     */
    updateUser(item) {
        let url = this.url('user/update');
        return this.postByJson(url, { user: item });
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
    /**
     * 给指定的用户添加角色
     * @param userId 用户编号
     * @param roleIds 多个角色编号
     */
    addUserRoles(userId, roleIds) {
        let url = this.url('user/addRoles');
        return this.postByJson(url, { userId, roleIds });
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
