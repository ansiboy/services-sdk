
/*
 * SERVICE SDK v1.0.0
 * https://github.com/ansiboy/dilu
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.serviceSdk = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = {
    serviceUrlCanntNull(serviceName) {
        let msg = `Service '${serviceName}' base url can not null.`;
        return new Error(msg);
    },
    unexpectedNullResult() {
        let msg = `Null result is unexpected.`;
        return new Error(msg);
    },
    argumentNull(name) {
        let msg = `Arugment ${name} cannt null or empty.`;
        return new Error(msg);
    },
    fieldNull(field, itemName) {
        let msg = `${itemName} ${field} cannt be null or empty`;
        return new Error(msg);
    }
};

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_1 = require("maishu-chitu");
exports.events = {
    /** 成功调用 login 方法后引发 */
    login: maishu_chitu_1.Callbacks(),
    /** 成功调用 logout 方法后引发 */
    logout: maishu_chitu_1.Callbacks()
};

},{"maishu-chitu":"maishu-chitu"}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./services/service");
exports.Service = service_1.Service;
var image_service_1 = require("./services/image-service");
exports.ImageService = image_service_1.ImageService;
var user_service_1 = require("./services/user-service");
exports.UserService = user_service_1.UserService;
var settings_1 = require("./settings");
exports.settings = settings_1.settings;

},{"./services/image-service":4,"./services/service":5,"./services/user-service":6,"./settings":7}],4:[function(require,module,exports){
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
const service_1 = require("./service");
const ui = require("maishu-ui-toolkit");
const settings_1 = require("../settings");
const errors_1 = require("../errors");
/** 图片服务，实现图片的上传，获取 */
class ImageService extends service_1.Service {
    url(path) {
        if (!settings_1.settings.imageServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('imageService');
        return `${settings_1.settings.imageServiceUrl}/${path}`;
    }
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    imageSource(id, width, height) {
        if (!id) {
            width = width == null ? 200 : width;
            height = height == null ? 100 : height;
            id = ui.generateImageBase64(width, height, settings_1.settings.noImageText);
            return id;
        }
        let isBase64 = id.startsWith('data:image');
        if (isBase64) {
            return id;
        }
        let url = this.url('image');
        url = `${url}?id=${id}`;
        if (width != null)
            url = url + `&width=${width}`;
        if (height != null)
            url = url + `&height=${height}`;
        return url;
    }
    getImageSize(imageBase64) {
        return new Promise((resolve, reject) => {
            var i = new Image();
            i.onload = function () {
                resolve({ width: i.width, height: i.height });
            };
            i.src = imageBase64;
        });
    }
    /**
     * 对图片进行缩放
     * @param imageBase64 图片 base64 格式数据
     * @param width 目标图片的宽度
     * @param height 目标图片的高度
     */
    resize(imageBase64, width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            var canvas = document.createElement('canvas'); //.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = width;
            canvas.height = height;
            return yield new Promise((resolve, reject) => {
                var img = new Image();
                img.src = imageBase64;
                img.onload = function () {
                    // width = img.width
                    // height = img.height
                    if (ctx == null)
                        throw 'get canvas context fail';
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL());
                };
            });
        });
    }
    /**
     * 上传图片
     * @param imageBase64 图片的 base64 数据
     */
    upload(imageBase64) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('upload');
            let imageSize = yield this.getImageSize(imageBase64);
            let maxWidth = 800;
            let maxHeight = 800;
            if (imageSize.width > maxWidth) { // || imageSize.height > maxHeight
                let height = imageSize.height / imageSize.width * maxWidth;
                imageBase64 = yield this.resize(imageBase64, maxWidth, height);
            }
            else if (imageSize.height > maxHeight) {
                let width = imageSize.width / imageSize.height * maxHeight;
                imageBase64 = yield this.resize(imageBase64, width, maxHeight);
            }
            return this.postByJson(url, { image: imageBase64 });
        });
    }
    /**
     *
     * @param id 删除图片
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url("remove");
            return this.postByJson(url, { id });
        });
    }
}
exports.ImageService = ImageService;

},{"../errors":1,"../settings":7,"./service":5,"maishu-ui-toolkit":"maishu-ui-toolkit"}],5:[function(require,module,exports){
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

},{"./user-service":6,"maishu-chitu":"maishu-chitu"}],6:[function(require,module,exports){
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
const service_1 = require("./service");
const settings_1 = require("../settings");
const errors_1 = require("../errors");
const events_1 = require("../events");
// const TOKEN_NAME = 'app-token'
// type LoginResult = { token: string, userId: string }
let user;
class UserService extends service_1.Service {
    url(path) {
        if (!settings_1.settings.permissionServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${settings_1.settings.permissionServiceUrl}/${path}`;
    }
    static getStrageLoginInfo() {
        let loginInfoSerialString = localStorage.getItem(UserService.LoginInfoStorageName);
        if (!loginInfoSerialString)
            return null;
        try {
            let loginInfo = JSON.parse(loginInfoSerialString);
            return loginInfo;
        }
        catch (e) {
            console.error(e);
            console.log(loginInfoSerialString);
            return null;
        }
    }
    // static token = new chitu.ValueStore(localStorage[TOKEN_NAME] || '');
    sentRegisterVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'register' });
    }
    sentResetVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'resetPassword' });
    }
    resetPassword(mobile, password, smsId, verifyCode) {
        let url = this.url('user/resetPassword');
        return this.postByJson(url, { mobile, password, smsId, verifyCode });
    }
    logout() {
        if (UserService.loginInfo == null)
            return;
        //TODO: 将服务端 token 设置为失效
        events_1.events.logout.fire(this, UserService.loginInfo);
        localStorage.removeItem(UserService.LoginInfoStorageName);
        UserService.loginInfo = null;
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/login');
            let r = yield this.postByJson(url, { username, password });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            events_1.events.login.fire(this, r);
            return r;
        });
    }
    register(mobile, password, smsId, verifyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/register');
            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode });
            return r;
        });
    }
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            if (user == null) {
                let url = this.url('user/me');
                user = yield this.getByJson(url);
                if (user == null) {
                    return null;
                }
                user.data = user.data || {};
            }
            return user;
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/item');
            user = yield this.getByJson(url, { userId });
            if (user == null) {
                return null;
            }
            user.data = user.data || {};
            return user;
        });
    }
    update(user) {
        let url = this.url('user/update');
        return this.postByJson(url, { user });
    }
}
UserService.LoginInfoStorageName = 'LoginInfo';
UserService.loginInfo = UserService.getStrageLoginInfo();
exports.UserService = UserService;

},{"../errors":1,"../events":2,"../settings":7,"./service":5}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = {
    noImageText: '暂无图片'
};

},{}]},{},[3])(3)
});
