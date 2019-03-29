import { Service, LoginInfo } from "./service";
import { User, Role } from "../models";
/** 与用户相关的服务 */
export declare class UserService extends Service {
    protected url(path: string): string;
    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile: string): Promise<{
        smsId: string;
    } | null>;
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
    register(mobile: string, password: string, smsId: string, verifyCode: string, data: {
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
}
