"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_service_1 = require("maishu-chitu-service");
class Service extends maishu_chitu_service_1.Service {
    ajax(url, options) {
        const _super = Object.create(null, {
            ajax: { get: () => super.ajax }
        });
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            options.headers = options.headers || {};
            // if (Service.loginInfo.value)
            //     options.headers['token'] = Service.loginInfo.value.token
            // if (Service.applicationId)
            //     options.headers['application-id'] = typeof Service.applicationId == 'function' ? Service.applicationId() : Service.applicationId
            let data = yield _super.ajax.call(this, url, options);
            if (data == null) {
                return null;
            }
            let obj = data;
            if (obj.code && obj.message) {
                throw new Error(obj.message);
            }
            if (obj != null && obj['DataItems'] != null && obj['TotalRowCount'] != null) {
                let d = {};
                let keys = Object.keys(data);
                for (let i = 0; i < keys.length; i++) {
                    let key = keys[i];
                    let k = key[0].toLowerCase() + key.substr(1);
                    d[k] = obj[key];
                }
                data = d;
            }
            this.travelJSON(data);
            return data;
        });
    }
    /**
     * 遍历 JSON 对象各个字段，将日期字符串转换为 Date 对象
     * @param obj 要转换的 JSON 对象
     */
    travelJSON(obj) {
        if (typeof obj === 'string' && this.isDateString(obj)) {
            return new Date(obj);
        }
        else if (typeof obj === 'string') {
            return obj;
        }
        var stack = new Array();
        stack.push(obj);
        while (stack.length > 0) {
            var item = stack.pop();
            for (var key in item) {
                var value = item[key];
                if (value == null)
                    continue;
                if (value instanceof Array) {
                    for (var i = 0; i < value.length; i++) {
                        stack.push(value[i]);
                    }
                    continue;
                }
                if (typeof value == 'object') {
                    stack.push(value);
                    continue;
                }
                if (typeof value == 'string' && this.isDateString(value)) {
                    item[key] = new Date(value);
                }
            }
        }
        return obj;
    }
    isDateString(text) {
        const datePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        const datePattern1 = /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}/;
        return text.match(datePattern) != null || text.match(datePattern1) != null;
    }
}
exports.Service = Service;
