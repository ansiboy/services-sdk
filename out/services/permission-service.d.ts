import { Service, LoginInfo } from "./service";
import { User, Resource, Role, Token } from "../models";
export declare class PermissionService extends Service {
    static baseUrl: string;
    role: RoleModule;
    user: UserModule;
    sms: SMSModule;
    protected url(path: string): string;
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
    token: {
        list: (args: DataSourceSelectArguments) => Promise<DataSourceSelectResult<Token>>;
        add: (item: Partial<Token>) => Promise<{
            id: String;
        }>;
    };
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
     * 获取用角色
     * @param userId 用户编号
     */
    getUserRoles(userId: string): Promise<Role[]>;
}
declare class ServiceModule {
    service: PermissionService;
    getByJson: Service["getByJson"];
    postByJson: Service["postByJson"];
    get: Service["get"];
    post: Service["post"];
    constructor(service: PermissionService);
    protected url(path: string): string;
}
declare class UserModule extends ServiceModule {
    role: {
        list: (userId: string) => Promise<Role[]>;
    };
    resource: {
        list: (userId: string) => Promise<Resource[]>;
    };
    /** 获取用户列表 */
    list(args?: DataSourceSelectArguments): Promise<DataSourceSelectResult<User>>;
    /**
     * 更新用户信息
     * @param item 用户
     */
    update(item: Partial<User>): Promise<unknown>;
    /**
     * 获取用户
     * @param userId 用户编号
     */
    item(userId: string): Promise<User | null>;
    /**
     * 添加用户信息
     * @param item 用户
     */
    add(item: Partial<User>): Promise<{
        id: string;
    }>;
    /** 通过手机获取用户 */
    listByMobile(mobile: string): Promise<User>;
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
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    login(args: {
        openid: string;
    }): Promise<LoginInfo>;
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
    me(): Promise<User>;
}
declare class RoleModule extends ServiceModule {
    resource: {
        /**
         * 获取角色所允许访问的资源 id
         * @param roleId 指定的角色编号
         */
        ids: (roleId: string) => Promise<string[]>;
    };
    list(): Promise<Role[]>;
    item(id: string): Promise<Role>;
    /**
     * 添加角色
     */
    add(name: string, remark: string): Promise<{
        id: string;
    }>;
    add(item: Partial<Role>): Promise<{
        id: string;
    }>;
    /**
     * 删除角色
     * @param id 要删除的角色编号
     */
    remove(id: string): Promise<unknown>;
    update(item: Partial<Role>): Promise<unknown>;
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    resourceIds(roleId: string): Promise<string[]>;
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setResource(roleId: string, resourceIds: string[]): Promise<unknown>;
}
declare class SMSModule extends ServiceModule {
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
