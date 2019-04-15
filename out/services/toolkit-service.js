"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const errors_1 = require("../errors");
class ToolkitService extends service_1.Service {
    constructor() {
        super();
    }
    url(path) {
        if (!path)
            throw new Error('Argument path cannt be null or empty.');
        if (!ToolkitService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('toolServiceUrl');
        return `${ToolkitService.baseUrl}/${path}`;
    }
    /** 获取系统自动生成不重复的唯一数字 */
    uniqueNumber() {
        let url = this.url('unique-number');
        return this.getByJson(url);
    }
}
exports.ToolkitService = ToolkitService;
