import { Service } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";
import { User, Resource, ResourceType, Role } from "../models";

export class PermissionService extends Service {

    constructor() {
        super()

        this.error.add((sender, err) => {
            ui.alert({ title: '错误', message: err.message })
        })
    }

    protected url(path: string) {
        if (!settings.permissionServiceUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${settings.permissionServiceUrl}/${path}`
    }

    //=============================================================
    // 资源相关

    /** 添加资源 */
    async addResource(item: Partial<Resource>) {
        let url = this.url('resource/add')
        let result = await this.postByJson<{ id: string }>(url, { item })
        Object.assign(item, result)
        return result
    }

    /** 更新资源 */
    async updateResource(item: Partial<Resource>) {
        let url = this.url('resource/update')
        let result = await this.postByJson(url, { item })
        Object.assign(item, result)
        return result
    }

    /** 获取菜单类型的资源 */
    async getMenuResources() {
        let menuType: ResourceType = 'menu'
        let args: DataSourceSelectArguments = {
            filter: `(type = "${menuType}")`
        }
        return this.getResourceList(args)
    }

    /** 获取资源列表 */
    async getResourceList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<Resource>> {
        let url = this.url('resource/list')
        if (!args.sortExpression)
            args.sortExpression = 'sort_number asc'

        type T = Resource & { data?: { visible?: boolean } }
        let result = await this.getByJson<DataSourceSelectResult<T>>(url, { args })
        if (result == null)
            throw errors.unexpectedNullResult()

        for (let i = 0; i < result.dataItems.length; i++) {
            result.dataItems[i].data = result.dataItems[i].data || {}
        }

        return result
    }

    /**
     * 删除指定的资源
     * @param id 要删除的资源编号
     */
    async deleteResource(id: string) {
        let url = this.url('resource/remove')
        return this.postByJson(url, { id })
    }

    /**
     * 获取指定资源的子按钮
     * @param id 资源编号
     */
    async getResourceChildCommands(id: string) {
        let buttonType: ResourceType = 'button'
        let filter = `parent_id = '${id}' and type = '${buttonType}'`
        let url = `resource/list`
        let result = await this.getByJson(url, { filter })
        return result
    }

    //=============================================================
    // 角色相关

    /**
     * 获取角色列表
     */
    async getRoles(): Promise<Role[]> {
        let url = this.url('role/list')
        let r = await this.getByJson<Role[]>(url)
        return r || []
    }

    /**
     * 获取单个角色
     * @param id 要获取的角色编号
     */
    getRole(id: string): Promise<Role | null> {
        let url = this.url('role/get')
        return this.getByJson(url, { id })
    }

    /**
     * 
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setRoleResource(roleId: string, resourceIds: string[]) {
        if (!roleId) throw errors.argumentNull('roleId')
        if (!resourceIds) throw errors.argumentNull('resourceIds')

        let url = this.url('role/setResources')
        return this.postByJson(url, { roleId, resourceIds })
    }

    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    async getRoleResourceIds(roleId: string): Promise<string[]> {
        if (!roleId) throw errors.argumentNull('roleId')
        let url = this.url('role/resourceIds')
        let r = await this.getByJson<string[]>(url, { roleId })
        return r || []
    }

    /** 设置用户角色 */
    setUserRoles(userId: string, roleIds: string[]) {
        let url = this.url('user/setRoles')
        return this.postByJson(url, { userId, roleIds })
    }

    //================================================================
    // 用户相关

    /** 获取用户列表 */
    async getUserList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>> {
        let url = this.url('user/list')
        let result = await this.getByJson<DataSourceSelectResult<User>>(url, { args })
        if (result == null)
            throw errors.unexpectedNullResult()

        return result
    }

    /** 通过手机获取用户 */
    async getUserByMobile(mobile: string) {
        let args: DataSourceSelectArguments = {}
        args.filter = `mobile = '${mobile}'`
        let r = await this.getUserList(args)
        return r.dataItems[0]
    }

    /** 
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */
    async removeUser(userId: string) {
        let url = this.url('application/removeUser')
        return this.deleteByJson(url, { userId })
    }

    /**
     * 获取当前应用的所有用户
     * @param args 数据源选择参数
     */
    async getApplicatinUsers(args: DataSourceSelectArguments) {
        if (args == null) throw errors.argumentNull('args')
        let url = this.url('application/users')
        let result = await this.getByJson<DataSourceSelectResult<User>>(url, { args })
        if (result == null)
            throw errors.unexpectedNullResult()

        // for (let i = 0; i < result.dataItems.length; i++) {
        //     result.dataItems[i].sort_number = (args.startRowIndex || 0) + i + 1
        // }

        return result
    }
}





interface DataSourceSelectArguments {
    startRowIndex?: number;
    maximumRows?: number;
    sortExpression?: string;
    filter?: string;
}

interface DataSourceSelectResult<T> {
    totalRowCount: number;
    dataItems: Array<T>;
}



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
