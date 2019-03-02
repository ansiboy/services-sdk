import { Service } from "./service";
export interface LoginInfo {
    token: string;
    userId: string;
}
export declare class UserService extends Service {
    static readonly LoginInfoStorageName = "LoginInfo";
    static loginInfo: LoginInfo | null;
    private url;
    private static getStrageLoginInfo;
    sentRegisterVerifyCode(mobile: string): Promise<{
        smsId: string;
    } | null>;
    sentResetVerifyCode(mobile: string): Promise<{
        smsId: string;
    } | null>;
    resetPassword(mobile: string, password: string, smsId: string, verifyCode: string): Promise<{} | null>;
    logout(): void;
    login(username: string, password: string): Promise<LoginInfo>;
    register(mobile: string, password: string, smsId: string, verifyCode: string): Promise<{} | null>;
    me(): Promise<User | null>;
    getUser(userId: string): Promise<User | null>;
    update(user: User): Promise<{} | null>;
}
export interface User {
    id: string;
    user_name?: string;
    mobile?: string;
    email?: string;
    password?: string;
    openid?: string;
    create_date_time: Date;
    data: {
        head_image?: string;
        nick_name?: string;
    };
}
