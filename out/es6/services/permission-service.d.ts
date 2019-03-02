import { Service } from "./service";
export declare class PermissionService extends Service {
    constructor();
    private url;
    /** 添加资源 */
    addResource(item: Partial<Resource>): Promise<{
        id: string;
    } | null>;
    /** 更新资源 */
    updateResource(item: Partial<Resource>): Promise<{} | null>;
    /** 获取菜单类型的资源 */
    getMenuResources(): Promise<DataSourceSelectResult<Resource>>;
    /** 获取资源列表 */
    getResources(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<Resource>>;
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
    getUsers(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>>;
    /** 通过手机获取用户 */
    getUserByMobile(mobile: string): Promise<User>;
    /** 删除用户 */
    removeUser(userId: string): Promise<{} | null>;
}
export interface Resource {
    id?: string;
    name: string;
    path?: string;
    parent_id: string;
    sort_number?: number;
    type: ResourceType;
    create_date_time?: Date;
    data: any;
    category: Category;
}
declare type ResourceType = 'menu' | 'button';
declare type Category = 'platform' | 'distributor';
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
interface Role {
    id?: string;
    name: string;
    data: {
        resource_types: ResourceType[];
    };
}
interface User {
    id: string;
    user_name: string;
    mobile: string;
    email: string;
    password: string;
    sort_number: number;
    data: any;
}
export {};
