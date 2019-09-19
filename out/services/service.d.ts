import { Service as ChiTuSerivce, AjaxOptions, ValueStore } from 'maishu-chitu-service';
export interface LoginInfo {
    token: string;
    userId: string;
}
export declare class Service extends ChiTuSerivce {
    static readonly LoginInfoStorageName = "app-login-info";
    static loginInfo: ValueStore<LoginInfo | null>;
    static applicationId: string | (() => string);
    static getStorageLoginInfo(): LoginInfo | null;
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
}
