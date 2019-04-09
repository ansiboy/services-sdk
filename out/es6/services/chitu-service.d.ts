export interface ServiceConstructor<T> {
    new (): T;
}
export declare type AjaxOptions = {
    data?: any;
    headers?: {
        [key: string]: string;
    };
    method?: string;
};
export declare class Service {
    error: import("./chitu-extends").Callback1<Service, Error>;
    static settings: {
        ajaxTimeout: number;
    };
    ajax<T>(url: string, options?: AjaxOptions): Promise<T | null>;
    /**
     * 创建服务
     * @param type 服务类型
     */
    createService<T extends Service>(type?: ServiceConstructor<T>): T;
}
