import { Service, LoginInfo } from "./service";
import { User, Resource, Role } from "../models";
import { AjaxOptions } from "maishu-chitu-service";
export declare class PermissionService extends Service {
    static baseUrl: string;
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
    getUserList(args?: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>>;
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
    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile: string): Promise<{
        smsId: string;
    } | null>;
    /**
     * 校验验证码
     * @param smsId 验证码信息的 ID 号
     * @param verifyCode 验证码
     */
    checkVerifyCode(smsId: string, verifyCode: string): Promise<boolean | null>;
    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile: string): Promise<{
        smsId: string;
    } | null>;
    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile: string, password: string, smsId: string, verifyCode: string): Promise<{} | null>;
    /**
     * 重置手机号码
     * @param mobile 需要重置的新手机号
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetMobile(mobile: string, smsId: string, verifyCode: string): Promise<{} | null>;
    /**
     * 退出登录
     */
    logout(): void;
    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    login(username: string, password: string): Promise<LoginInfo>;
    /**
     * 注册
     * @param mobile 手机号
     * @param password 密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    register(mobile: string, password: string, smsId: string, verifyCode: string, data?: {
        [key: string]: any;
    }): Promise<LoginInfo>;
    /**
     * 获取用户个人信息
     */
    me(): Promise<User | null>;
    /**
     * 获取用户
     * @param userId 用户编号
     */
    getUser(userId: string): Promise<User | null>;
    /**
     * 更新用户信息
     * @param user 用户
     */
    update(user: User): Promise<{} | null>;
    /**
     * 获取当前登录用户的角色
     */
    myRoles(): Promise<Role[] | null>;
    ajax<T>(url: string, options?: AjaxOptions): Promise<T | null>;
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
