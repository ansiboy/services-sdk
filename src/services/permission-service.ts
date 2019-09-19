import { Service, LoginInfo } from "./service";
import { errors } from "../errors";
import { User, Resource, ResourceType, Role, Token } from "../models";
// import { events } from "../events";

export class PermissionService extends Service {

    static baseUrl: string

    constructor() {
        super()
    }

    protected url(path: string) {
        if (!PermissionService.baseUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${PermissionService.baseUrl}/${path}`
    }

    currentUser = {
        resource: {
            list: () => {
                let url = this.url("current-user/resource/list");
                return this.get<Resource[]>(url);
            }
        }
    }

    role = new RoleModule(this);
    user = new UserModule(this);


    resource = {
        list: (args?: DataSourceSelectArguments) => {
            let url = this.url("resource/list");
            return this.getByJson<DataSourceSelectResult<Resource>>(url, { args });
        },
        item: (id: string) => {
            let url = this.url("resource/item");
            return this.getByJson<Resource>(url, { id })
        },
        remove: (id: string) => {
            let url = this.url("resource/remove");
            return this.post(url, { id });
        },
        add: (item: Partial<Resource>) => {
            let url = this.url("resource/add");
            return this.postByJson<{ id: string }>(url, { item })
        },
        update: (item: Partial<Resource>) => {
            let url = this.url("resource/update");
            return this.postByJson<{ id: string }>(url, { item })
        }
    };


    token = {
        list: async (args: DataSourceSelectArguments) => {
            let url = this.url('token/list');
            let r = this.getByJson<DataSourceSelectResult<Token>>(url, { args });
            return r;
        },
        add: async (item: Partial<Token>) => {
            let url = this.url("token/add");
            let r = await this.postByJson<{ id: String }>(url, { item });
            return r;
        }
    }

    //=============================================================
    // 角色相关

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





    removeRole(id: string) {
        if (!id) throw errors.argumentNull("id");

        let url = this.url("role/remove");
        return this.postByJson(url, { id });
    }

    //================================================================
    // 用户相关



    /** 
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */
    async removeUser(userId: string) {
        if (!userId) throw errors.argumentNull('userId')

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

        return result
    }

    /** 
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile: string) {
        let url = this.url('sms/sendVerifyCode')
        return this.postByJson<{ smsId: string }>(url, { mobile, type: 'register' })
    }


    /**
     * 校验验证码
     * @param smsId 验证码信息的 ID 号
     * @param verifyCode 验证码
     */
    async checkVerifyCode(smsId: string, verifyCode: string) {
        if (!smsId) throw errors.argumentNull('smsId')
        if (!verifyCode) throw errors.argumentNull('verifycode')

        let url = this.url('sms/checkVerifyCode')
        let r = await this.postByJson<boolean>(url, { smsId, verifyCode })
        return r
    }

    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile: string) {
        if (!mobile) throw errors.argumentNull('mobile')

        let url = this.url('sms/sendVerifyCode')
        return this.postByJson<{ smsId: string }>(url, { mobile, type: 'resetPassword' })
    }


    /**
     * 获取用角色
     * @param userId 用户编号
     */
    async getUserRoles(userId: string): Promise<Role[]> {
        let url = this.url('role/userRoles');
        let r = await this.getByJson<{ [userId: string]: Role[] }>(url, { userIds: [userId] });
        return r[userId];
    }
}


class ServiceModule {
    service: PermissionService;
    getByJson: <T>(url: string, data?: any) => Promise<T>;
    postByJson: <T>(url: string, data?: any) => Promise<T>;
    get: <T>(url: string, data?: any) => Promise<T>;

    constructor(service: PermissionService) {
        this.service = service;
        this.getByJson = this.service.getByJson;
        this.postByJson = this.service.postByJson;
        this.get = this.service.get;
    }

    protected url(path: string) {
        if (!PermissionService.baseUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${PermissionService.baseUrl}/${path}`
    }
}

class UserModule extends ServiceModule {
    /** 获取用户列表 */
    async list(args?: DataSourceSelectArguments) {
        let url = this.url('user/list');
        let result = await this.getByJson<DataSourceSelectResult<User>>(url, { args });
        if (result == null)
            throw errors.unexpectedNullResult();

        return result;
    }

    /**
     * 更新用户信息
     * @param item 用户
     */
    async update(item: Partial<User>) {
        let url = this.url('user/update');
        let result = await this.postByJson(url, { user: item });
        return result;
    }

    /**
     * 获取用户
     * @param userId 用户编号
     */
    async item(userId: string) {
        let url = this.url('user/item')
        let user = await this.getByJson<User | null>(url, { userId });

        return user
    }


    /**
     * 添加用户信息
     * @param item 用户
     */
    async  addUser(item: Partial<User>) {
        let url = this.url('user/add')
        let result: { id: string }
        let r = await this.postByJson<typeof result>(url, { item })
        return r
    }

    /** 设置用户角色 */
    async setRoles(userId: string, roleIds: string[]) {
        if (!userId) throw errors.argumentNull('userId')
        if (!roleIds) throw errors.argumentNull('roleIds')

        let url = this.url('user/setRoles')
        return this.postByJson(url, { userId, roleIds })
    }

    /** 通过手机获取用户 */
    async listByMobile(mobile: string) {
        if (!mobile) throw errors.argumentNull('mobile')

        let args: DataSourceSelectArguments = {}
        args.filter = `mobile = '${mobile}'`
        let r = await this.list(args);
        return r.dataItems[0]
    }

    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile: string, password: string, smsId: string, verifyCode: string) {
        if (!mobile) throw errors.argumentNull('mobile')
        if (!password) throw errors.argumentNull('password')
        if (!smsId) throw errors.argumentNull('smsId')
        if (!verifyCode) throw errors.argumentNull('verifyCode')

        let url = this.url('user/resetPassword')
        return this.postByJson(url, { mobile, password, smsId, verifyCode })
    }

    /**
     * 重置手机号码
     * @param mobile 需要重置的新手机号
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetMobile(mobile: string, smsId: string, verifyCode: string) {
        if (!mobile) throw errors.argumentNull('mobile')
        if (!smsId) throw errors.argumentNull('smsId')
        if (!verifyCode) throw errors.argumentNull('verifyCode')

        let url = this.url('user/resetMobile')
        return this.postByJson(url, { mobile, smsId, verifyCode })
    }

    /**
     * 退出登录
     */
    logout() {
        // if (Service.loginInfo.value == null)
        //     return

        //TODO: 将服务端 token 设置为失效

        // events.logout.fire(this, Service.loginInfo.value)
        // Service.setStorageLoginInfo(null)
        // Service.loginInfo.value = null
    }

    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    async login(args: { openid: string }): Promise<LoginInfo>
    async login(username: string, password: string): Promise<LoginInfo>
    async login(arg0: string | { openid: string }, password?: string) {

        let args: { username: string, password: string } | { openid: string };
        let username: string;
        if (typeof arg0 == "string") {
            username = arg0;

            if (!username) throw errors.argumentNull('username')
            if (!password) throw errors.argumentNull('password');

            args = { username, password };
        }
        else {
            args = arg0;
        }


        let url = this.url('user/login')
        let r = await this.postByJson<LoginInfo | null>(url, args)
        if (r == null)
            throw errors.unexpectedNullResult()

        // Service.loginInfo.value = r
        // Service.setStorageLoginInfo(r)
        // events.login.fire(this, r)
        return r
    }

    /**
     * 注册
     * @param mobile 手机号
     * @param password 密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    async register(mobile: string, password: string, smsId: string, verifyCode: string, data?: { [key: string]: any }) {
        if (!mobile) throw errors.argumentNull('mobile')
        if (!password) throw errors.argumentNull('password')
        if (!smsId) throw errors.argumentNull('smsId')
        if (!verifyCode) throw errors.argumentNull('verifyCode')

        let url = this.url('user/register')
        let r = await this.postByJson<LoginInfo>(url, { mobile, password, smsId, verifyCode, data })
        if (r == null)
            throw errors.unexpectedNullResult()

        // Service.setStorageLoginInfo(r)
        // events.register.fire(this, r)

        return r;
    }

    /**
     * 获取用户个人信息
     */
    async me() {
        let url = this.url('user/me')
        let user = await this.getByJson<User>(url)
        return user
    }

    /**
     * 获取当前登录用户的角色
     */
    async myRoles() {
        let url = this.url('user/getRoles')
        let roles = await this.getByJson<Role[]>(url)
        return roles
    }

    /**
     * 给指定的用户添加角色
     * @param userId 用户编号
     * @param roleIds 多个角色编号
     */
    addUserRoles(userId: string, roleIds: string[]) {
        let url = this.url('user/addRoles')
        return this.postByJson(url, { userId, roleIds })
    }

}

class RoleModule extends ServiceModule {

    resource = {
        /**
         * 获取角色所允许访问的资源 id
         * @param roleId 指定的角色编号
         */
        ids: async (roleId: string) => {
            if (!roleId) throw errors.argumentNull('roleId')
            let url = this.url('role/resourceIds')
            let r = await this.getByJson<string[]>(url, { roleId })
            return r || []
        }
    }

    async list() {
        let url = this.url("role/list")
        return this.get<Role[]>(url);
    }

    item(id: string) {
        let url = this.url("role/item");
        return this.get<Role>(url, { id });
    }

    /**
     * 添加角色
     */
    add(name: string, remark: string): Promise<{ id: string }>;
    add(item: Partial<Role>): Promise<{ id: string }>
    add(arg1: any, arg2?: string) {
        let url = this.url("role/add");

        let item: Partial<Role>;
        if (typeof arg1 == "string") {
            item = { name: arg1, remark: arg2 }
        }
        else {
            item = arg1;
        }
        return this.postByJson(url, { item })
    }

    /**
     * 删除角色
     * @param id 要删除的角色编号
     */
    remove(id: string) {
        let url = this.url("role/remove");
        return this.postByJson(url, { id });
    }

    update(item: Partial<Role>) {
        let url = this.url("role/update");
        return this.postByJson(url, { item });
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

