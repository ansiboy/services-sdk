import * as chitu from 'maishu-chitu';
export interface LoginInfo {
    token: string;
    userId: string;
}
export declare class Service extends chitu.Service {
    static readonly LoginInfoStorageName = "app-login-info";
    static loginInfo: chitu.ValueStore<LoginInfo | null>;
    constructor();
    private static getStorageLoginInfo;
    protected static setStorageLoginInfo(value: LoginInfo | null): void;
    ajax<T>(url: string, options?: chitu.AjaxOptions): Promise<T | null>;
    /**
     * 遍历 JSON 对象各个字段，将日期字符串转换为 Date 对象
     * @param obj 要转换的 JSON 对象
     */
    private travelJSON;
    private isDateString;
    getByJson<T>(url: string, data?: any): Promise<T | null>;
    protected putByJson<T>(url: string, data?: any): Promise<T | null>;
    protected postByJson<T>(url: string, data?: any): Promise<T | null>;
    protected deleteByJson<T>(url: string, data: any): Promise<T | null>;
    protected get<T>(url: string, data?: any): Promise<T | null>;
    protected put<T>(url: string, data?: any): Promise<T | null>;
    protected post<T>(url: string, data?: any): Promise<T | null>;
    protected delete<T>(url: string, data: any): Promise<T | null>;
}
