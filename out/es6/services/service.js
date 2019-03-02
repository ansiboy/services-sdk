"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chitu = require("maishu-chitu");
const user_service_1 = require("./user-service");
class Service extends chitu.Service {
    constructor() {
        super();
    }
    ajax(url, options) {
        const _super = Object.create(null, {
            ajax: { get: () => super.ajax }
        });
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            options.headers = options.headers || {};
            if (user_service_1.UserService.loginInfo)
                options.headers['token'] = user_service_1.UserService.loginInfo.token;
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
    getByJson(url, data) {
        if (data && Object.getOwnPropertyNames(data).length > 0)
            url = `${url}?${JSON.stringify(data)}`;
        let headers = { "content-type": 'application/json' };
        return this.ajax(url, { headers, method: 'get' });
    }
    putByJson(url, data) {
        let headers = { "content-type": 'application/json' };
        return this.ajax(url, { headers, data, method: 'put' });
    }
    postByJson(url, data) {
        let headers = { "content-type": 'application/json' };
        return this.ajax(url, { headers, data, method: 'post' });
    }
    deleteByJson(url, data) {
        let headers = { "content-type": 'application/json' };
        return this.ajax(url, { headers, data, method: 'delete' });
    }
    get(url, data) {
        data = data || {};
        let params = "";
        for (let key in data) {
            if (data[key] == null)
                continue;
            params = params ? `${params}&${key}=${data[key]}` : `${key}=${data[key]}`;
        }
        if (params) {
            url = `${url}?${params}`;
        }
        return this.ajax(url, { method: 'get' });
    }
    put(url, data) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax(url, { headers, data, method: 'put' });
    }
    post(url, data) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax(url, { headers, data, method: 'post', });
    }
    delete(url, data) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax(url, { headers, data, method: 'delete' });
    }
}
exports.Service = Service;
