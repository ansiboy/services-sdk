import { Service } from "./service";
import { errors } from "../errors";

export class ToolkitService extends Service {
    constructor() {
        super()
    }

    static baseUrl: string

    protected url(path: string) {
        if (!path) throw new Error('Argument path cannt be null or empty.')

        if (!ToolkitService.baseUrl)
            throw errors.serviceUrlCanntNull('toolServiceUrl')

        return `${ToolkitService.baseUrl}/${path}`;
    }

    /** 获取系统自动生成不重复的唯一数字 */
    uniqueNumber() {
        let url = this.url('unique-number')
        return this.getByJson<string>(url)
    }
}