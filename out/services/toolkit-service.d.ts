import { Service } from "./service";
export declare class ToolkitService extends Service {
    constructor();
    static baseUrl: string;
    protected url(path: string): string;
    /** 获取系统自动生成不重复的唯一数字 */
    uniqueNumber(): Promise<string | null>;
}
