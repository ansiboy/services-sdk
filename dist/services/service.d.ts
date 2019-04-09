import { Service as ChiTuSerivce, AjaxOptions } from './chitu-service';
import { ValueStore } from './chitu-extends';
export interface LoginInfo {
    token: string;
    userId: string;
}
export declare class Service extends ChiTuSerivce {
    static readonly LoginInfoStorageName = "app-login-info";
    static loginInfo: ValueStore<LoginInfo | null>;
    constructor();
    private static getStorageLoginInfo;
    protected static setStorageLoginInfo(value: LoginInfo | null): void;
    private static setCookie;
    private static getCookie;
    private static removeCookie;
    ajax<T>(url: string, options?: AjaxOptions): Promise<T | null>;
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
