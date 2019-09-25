import { Service, LoginInfo } from "./service";
import { errors } from "../errors";
import { User, Resource, ResourceType, Role, Token } from "../models";
// import { events } from "../events";

export class PermissionService extends Service {

    static baseUrl: string

    role = new RoleModule(this);
    user = new UserModule(this);
    sms = new SMSModule(this);

    protected url(path: string) {
        if (!PermissionService.baseUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        if (PermissionService.baseUrl.endsWith("/"))
            return `${PermissionService.baseUrl}${path}`;

        return `${PermissionService.baseUrl}/${path}`
    }


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
    getByJson: Service["getByJson"];
    postByJson: Service["postByJson"];
    get: Service["get"];
    post: Service["post"];

    constructor(service: PermissionService) {
        this.service = service;
        this.getByJson = this.service.getByJson.bind(this.service);
        this.postByJson = this.service.postByJson.bind(this.service);
        this.get = this.service.get.bind(this.service);
        this.post = this.service.post.bind(this.service);
    }

    protected url(path: string) {
        if (!PermissionService.baseUrl)
            throw errors.serviceUrlCanntNull('permissionService')

        return `${PermissionService.baseUrl}/${path}`
    }
}

class UserModule extends ServiceModule {

    role = {
        list: async (userId: string) => {
            let url = this.url("user/role/list");
            let r = await this.getByJson<Role[]>(url, { userId });
            return r;
        }
    }

    resource = {
        list: async (userId: string) => {
            let url = this.url("user/resource/list");
            let r = await this.getByJson<Resource[]>(url, { userId });
            return r;
        }
    }

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
    async add(item: Partial<User>) {
        let url = this.url('user/add')
        let result: { id: string }
        let r = await this.postByJson<typeof result>(url, { item })
        return r
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

        return r;
    }

    /**
     * 获取用户个人信息
     */
    async me() {
        let url = this.url('user/me');
        let user = await this.getByJson<User>(url);
        delete user.password;
        return user
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

    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    async resourceIds(roleId: string): Promise<string[]> {
        if (!roleId) throw errors.argumentNull('roleId')
        let url = this.url('role/resourceIds')
        let r = await this.getByJson<string[]>(url, { roleId })
        return r || []
    }

    /**
     * 
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setResource(roleId: string, resourceIds: string[]) {
        if (!roleId) throw errors.argumentNull('roleId')
        if (!resourceIds) throw errors.argumentNull('resourceIds')

        let url = this.url('role/setResources')
        return this.postByJson(url, { roleId, resourceIds })
    }

}

class SMSModule extends ServiceModule {
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

