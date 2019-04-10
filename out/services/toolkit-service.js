"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const settings_1 = require("../settings");
const errors_1 = require("../errors");
class ToolkitService extends service_1.Service {
    constructor() {
        super();
    }
    url(path) {
        if (!path)
            throw new Error('Argument path cannt be null or empty.');
        if (!settings_1.settings.toolServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('toolServiceUrl');
        return `${settings_1.settings.toolServiceUrl}/${path}`;
    }
    uniqueNumber() {
        let url = this.url('unique-number');
        return this.getByJson(url);
    }
}
exports.ToolkitService = ToolkitService;
