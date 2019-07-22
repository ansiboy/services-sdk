import { Service, LoginInfo } from "./service";
import { User, Resource, Role, Token } from "../models";
export declare class PermissionService extends Service {
    static baseUrl: string;
    constructor();
    protected url(path: string): string;
    currentUser: {
        resource: {
            list: () => Promise<Resource[]>;
        };
    };
    role: {
        list: () => Promise<Role[]>;
        item: (id: string) => Promise<Role>;
        add: (item: Partial<Role>) => Promise<unknown>;
        remove: (id: string) => Promise<unknown>;
        update: (item: Partial<Role>) => Promise<unknown>;
        resource: {
            /**
             * 获取角色所允许访问的资源 id
             * @param roleId 指定的角色编号
             */
            ids: (roleId: string) => Promise<string[]>;
        };
    };
    resource: {
        list: (args?: DataSourceSelectArguments | undefined) => Promise<DataSourceSelectResult<Resource>>;
        item: (id: string) => Promise<Resource>;
        remove: (id: string) => Promise<unknown>;
        add: (item: Partial<Resource>) => Promise<{
            id: string;
        }>;
        update: (item: Partial<Resource>) => Promise<{
            id: string;
        }>;
    };
    user: {
        list: (args?: DataSourceSelectArguments | undefined) => Promise<DataSourceSelectResult<User>>;
        update: (item: Partial<User>) => Promise<unknown>;
    };
    token: {
        list: (args: DataSourceSelectArguments) => Promise<DataSourceSelectResult<Token>>;
        add: (item: Partial<Token>) => Promise<{
            id: String;
        }>;
    };
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
    setRoleResource(roleId: string, resourceIds: string[]): Promise<unknown>;
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    getRoleResourceIds(roleId: string): Promise<string[]>;
    /** 设置用户角色 */
    setUserRoles(userId: string, roleIds: string[]): Promise<unknown>;
    /**
     * 添加角色
     * @param name 要添加的角色名称
     * @param remark 要添加的角色备注
     */
    addRole(name: string, remark?: string): Promise<unknown>;
    /**
     * 删除角色
     * @param id 要删除的角色编号
     */
    removeRole(id: string): Promise<unknown>;
    /** 获取用户列表 */
    getUserList(args?: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>>;
    /** 通过手机获取用户 */
    getUserByMobile(mobile: string): Promise<User>;
    /**
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */
    removeUser(userId: string): Promise<unknown>;
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
    }>;
    /**
     * 校验验证码
     * @param smsId 验证码信息的 ID 号
     * @param verifyCode 验证码
     */
    checkVerifyCode(smsId: string, verifyCode: string): Promise<boolean>;
    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile: string): Promise<{
        smsId: string;
    }>;
    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile: string, password: string, smsId: string, verifyCode: string): Promise<unknown>;
    /**
     * 重置手机号码
     * @param mobile 需要重置的新手机号
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetMobile(mobile: string, smsId: string, verifyCode: string): Promise<unknown>;
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
     * 添加用户信息
     * @param item 用户
     */
    addUser(item: Partial<User>): Promise<{
        id: string;
    }>;
    /**
     * 更新用户信息
     * @param item 用户
     */
    updateUser(item: User): Promise<unknown>;
    /**
     * 获取当前登录用户的角色
     */
    myRoles(): Promise<Role[]>;
    /**
     * 给指定的用户添加角色
     * @param userId 用户编号
     * @param roleIds 多个角色编号
     */
    addUserRoles(userId: string, roleIds: string[]): Promise<unknown>;
    /**
     * 获取用角色
     * @param userId 用户编号
     */
    getUserRoles(userId: string): Promise<Role[]>;
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
