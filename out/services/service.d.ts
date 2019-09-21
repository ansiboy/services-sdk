import { Service as ChiTuSerivce, AjaxOptions } from 'maishu-chitu-service';
export interface LoginInfo {
    token: string;
    userId: string;
}
export declare class Service extends ChiTuSerivce {
    ajax<T>(url: string, options?: AjaxOptions): Promise<T | null>;
    /**
     * 遍历 JSON 对象各个字段，将日期字符串转换为 Date 对象
     * @param obj 要转换的 JSON 对象
     */
    private travelJSON;
    private isDateString;
}
