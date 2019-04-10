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
class PermissionService extends service_1.Service {
    constructor() {
        super();
    }
    url(path) {
        if (!settings_1.settings.permissionServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${settings_1.settings.permissionServiceUrl}/${path}`;
    }
    //=============================================================
    // 资源相关
    /** 添加资源 */
    addResource(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('resource/add');
            let result = yield this.postByJson(url, { item });
            Object.assign(item, result);
            return result;
        });
    }
    /** 更新资源 */
    updateResource(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('resource/update');
            let result = yield this.postByJson(url, { item });
            Object.assign(item, result);
            return result;
        });
    }
    /** 获取菜单类型的资源 */
    getMenuResources() {
        return __awaiter(this, void 0, void 0, function* () {
            let menuType = 'menu';
            let args = {
                filter: `(type = "${menuType}")`
            };
            return this.getResourceList(args);
        });
    }
    /** 获取资源列表 */
    getResourceList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('resource/list');
            if (!args.sortExpression)
                args.sortExpression = 'sort_number asc';
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            for (let i = 0; i < result.dataItems.length; i++) {
                result.dataItems[i].data = result.dataItems[i].data || {};
            }
            return result;
        });
    }
    /**
     * 删除指定的资源
     * @param id 要删除的资源编号
     */
    deleteResource(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('resource/remove');
            return this.postByJson(url, { id });
        });
    }
    /**
     * 获取指定资源的子按钮
     * @param id 资源编号
     */
    getResourceChildCommands(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let buttonType = 'button';
            let filter = `parent_id = '${id}' and type = '${buttonType}'`;
            let url = `resource/list`;
            let result = yield this.getByJson(url, { filter });
            return result;
        });
    }
    //=============================================================
    // 角色相关
    /**
     * 获取角色列表
     */
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('role/list');
            let r = yield this.getByJson(url);
            return r || [];
        });
    }
    /**
     * 获取单个角色
     * @param id 要获取的角色编号
     */
    getRole(id) {
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
        let url = this.url('user/setRoles');
        return this.postByJson(url, { userId, roleIds });
    }
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
            // for (let i = 0; i < result.dataItems.length; i++) {
            //     result.dataItems[i].sort_number = (args.startRowIndex || 0) + i + 1
            // }
            return result;
        });
    }
}
exports.PermissionService = PermissionService;
// export interface User {
//     id: string,
//     user_name: string,
//     mobile: string,
//     email: string,
//     password: string,
//     sort_number: number,
//     data?: any
//     // roleIds: string[]
// }
