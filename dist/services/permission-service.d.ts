import { Service } from "./service";
import { User, Resource, Role } from "../models";
export declare class PermissionService extends Service {
    constructor();
    protected url(path: string): string;
    /** 添加资源 */
    addResource(item: Partial<Resource>): Promise<{
        id: string;
    } | null>;
    /** 更新资源 */
    updateResource(item: Partial<Resource>): Promise<{} | null>;
    /** 获取菜单类型的资源 */
    getMenuResources(): Promise<DataSourceSelectResult<Resource>>;
    /** 获取资源列表 */
    getResourceList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<Resource>>;
    /**
     * 删除指定的资源
     * @param id 要删除的资源编号
     */
    deleteResource(id: string): Promise<{} | null>;
    /**
     * 获取指定资源的子按钮
     * @param id 资源编号
     */
    getResourceChildCommands(id: string): Promise<{} | null>;
    /**
     * 获取角色列表
     */
    getRoles(): Promise<Role[]>;
    /**
     * 获取单个角色
     * @param id 要获取的角色编号
     */
    getRole(id: string): Promise<Role | null>;
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setRoleResource(roleId: string, resourceIds: string[]): Promise<{} | null>;
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    getRoleResourceIds(roleId: string): Promise<string[]>;
    /** 设置用户角色 */
    setUserRoles(userId: string, roleIds: string[]): Promise<{} | null>;
    /** 获取用户列表 */
    getUserList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>>;
    /** 通过手机获取用户 */
    getUserByMobile(mobile: string): Promise<User>;
    /**
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */
    removeUser(userId: string): Promise<{} | null>;
    /**
     * 获取当前应用的所有用户
     * @param args 数据源选择参数
     */
    getApplicatinUsers(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>>;
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
export {};
