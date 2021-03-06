/*!
 * 
 *  maishu-services-sdk v1.16.0
 *  https://github.com/ansiboy/services-sdk
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maishu-chitu-service"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-chitu-service"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("maishu-chitu-service")) : factory(root["maishu-chitu-service"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof window === 'undefined' ? global : window, function(__WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    unexpectedNullValue(name) {
        let msg = `variable ${name} is unexpected null value.`;
        return new Error(msg);
    },
    argumentNull(name) {
        let msg = `Arugment ${name} cannt null or empty.`;
        return new Error(msg);
    },
    fieldNull(field, itemName) {
        let msg = `${itemName} ${field} cannt be null or empty`;
        return new Error(msg);
    },
    instanceMessangerStart() {
        let msg = `Instance messanger is start.`;
        return new Error(msg);
    },
    notSupportedInNode() {
        let msg = `Not implement in node environment.`;
    }
};


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __webpack_require__(/*! ./services/service */ "./out/services/service.js");
exports.Service = service_1.Service;
var image_service_1 = __webpack_require__(/*! ./services/image-service */ "./out/services/image-service.js");
exports.ImageService = image_service_1.ImageService;
var toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ "./out/services/toolkit-service.js");
exports.ToolkitService = toolkit_service_1.ToolkitService;
var permission_service_1 = __webpack_require__(/*! ./services/permission-service */ "./out/services/permission-service.js");
exports.PermissionService = permission_service_1.PermissionService;
// export { InstanceMessanger } from './services/instance-messanger'
// export { MessageService } from './services/message-service'
var settings_1 = __webpack_require__(/*! ./settings */ "./out/settings.js");
exports.settings = settings_1.settings;


/***/ }),

/***/ "./out/services/image-service.js":
/*!***************************************!*\
  !*** ./out/services/image-service.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const service_1 = __webpack_require__(/*! ./service */ "./out/services/service.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const settings_1 = __webpack_require__(/*! ../settings */ "./out/settings.js");
/** 图片服务，实现图片的上传，获取 */
class ImageService extends service_1.Service {
    url(path) {
        if (!ImageService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('imageService');
        return `${ImageService.baseUrl}/${path}`;
    }
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    imageSource(id, width, height) {
        if (id != null && id.startsWith("http://"))
            return id;
        if (id != null && id.indexOf("/") >= 0)
            return id;
        if (!id) {
            width = width == null ? 200 : width;
            height = height == null ? 100 : height;
            id = this.generateImageBase64(width, height, settings_1.settings.noImageText);
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
    generateImageBase64(width, height, obj, options) {
        if (document == null) {
            throw errors_1.errors.notSupportedInNode();
        }
        var canvas = document.createElement('canvas');
        canvas.width = width; //img_width;
        canvas.height = height; //img_height;
        var ctx = canvas.getContext('2d');
        if (ctx == null)
            throw new Error('ccreate canvas context fail.');
        let draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
        draw(ctx, width, height);
        return canvas.toDataURL();
    }
    getImageSize(imageBase64) {
        if (!imageBase64)
            throw errors_1.errors.argumentNull('imageBase64');
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
            if (!imageBase64)
                throw errors_1.errors.argumentNull('imageBase64');
            if (!width)
                throw errors_1.errors.argumentNull('width');
            if (!height)
                throw errors_1.errors.argumentNull('height');
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
    list(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${ImageService.baseUrl}/list`;
            let result = yield this.postByJson(url, args);
            return result;
        });
    }
    /**
     * 上传图片
     * @param imageBase64 图片的 base64 数据
     */
    upload(imageBase64) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!imageBase64)
                throw errors_1.errors.argumentNull('imageBase64');
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
            if (!id)
                throw errors_1.errors.argumentNull('id');
            let url = this.url("remove");
            return this.postByJson(url, { id });
        });
    }
}
exports.ImageService = ImageService;
let draws = {
    text: (imageText, options) => {
        return (ctx, canvasWidth, canvasHeight) => {
            // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
            let fontSize = Math.floor((canvasWidth / imageText.length) * 0.6);
            let bgColor = 'whitesmoke';
            let textColor = '#999';
            // let fontSize = Math.min(fontSize1, fontSize2);
            options = options || {};
            ctx.fillStyle = options.bgColor || bgColor; //'whitesmoke';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            // 设置字体
            ctx.font = `Bold ${options.fontSize}px Arial`;
            // 设置对齐方式
            ctx.textAlign = "left";
            // 设置填充颜色
            ctx.fillStyle = options.textColor || textColor; //"#999";
            let textWidth = fontSize * imageText.length;
            let startX = Math.floor((canvasWidth - textWidth) * 0.5);
            let startY = Math.floor((canvasHeight - (options.fontSize || fontSize)) * 0.3);
            // 设置字体内容，以及在画布上的位置
            ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
        };
    }
};


/***/ }),

/***/ "./out/services/permission-service.js":
/*!********************************************!*\
  !*** ./out/services/permission-service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const service_1 = __webpack_require__(/*! ./service */ "./out/services/service.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
// import { events } from "../events";
class PermissionService extends service_1.Service {
    constructor() {
        super(...arguments);
        this.role = new RoleModule(this);
        this.user = new UserModule(this);
        this.sms = new SMSModule(this);
        this.resource = {
            list: (args) => {
                let url = this.url("resource/list");
                return this.getByJson(url, { args });
            },
            item: (id) => {
                let url = this.url("resource/item");
                return this.getByJson(url, { id });
            },
            remove: (id) => {
                let url = this.url("resource/remove");
                return this.post(url, { id });
            },
            add: (item) => {
                let url = this.url("resource/add");
                return this.postByJson(url, { item });
            },
            update: (item) => {
                let url = this.url("resource/update");
                return this.postByJson(url, { item });
            }
        };
        this.token = {
            list: (args) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('token/list');
                let r = this.getByJson(url, { args });
                return r;
            }),
            add: (item) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url("token/add");
                let r = yield this.postByJson(url, { item });
                return r;
            })
        };
    }
    url(path) {
        if (!PermissionService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        if (PermissionService.baseUrl.endsWith("/"))
            return `${PermissionService.baseUrl}${path}`;
        return `${PermissionService.baseUrl}/${path}`;
    }
    /**
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */
    removeUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userId)
                throw errors_1.errors.argumentNull('userId');
            let url = this.url('application/removeUser');
            return this.deleteByJson(url, { userId });
        });
    }
    /**
     * 获取当前应用的所有用户
     * @param args 数据源选择参数
     */
    getApplicatinUsers(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (args == null)
                throw errors_1.errors.argumentNull('args');
            let url = this.url('application/users');
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            return result;
        });
    }
    /**
     * 获取用角色
     * @param userId 用户编号
     */
    getUserRoles(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('role/userRoles');
            let r = yield this.getByJson(url, { userIds: [userId] });
            return r[userId];
        });
    }
}
exports.PermissionService = PermissionService;
class ServiceModule {
    constructor(service) {
        this.service = service;
        this.getByJson = this.service.getByJson.bind(this.service);
        this.postByJson = this.service.postByJson.bind(this.service);
        this.get = this.service.get.bind(this.service);
        this.post = this.service.post.bind(this.service);
    }
    url(path) {
        if (!PermissionService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${PermissionService.baseUrl}/${path}`;
    }
}
class UserModule extends ServiceModule {
    constructor() {
        super(...arguments);
        this.role = {
            list: (userId) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url("user/role/list");
                let r = yield this.getByJson(url, { userId });
                return r;
            })
        };
        this.resource = {
            list: (userId) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url("user/resource/list");
                let r = yield this.getByJson(url, { userId });
                return r;
            })
        };
    }
    /** 获取用户列表 */
    list(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/list');
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            return result;
        });
    }
    /**
     * 更新用户信息
     * @param item 用户
     */
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/update');
            let result = yield this.postByJson(url, { user: item });
            return result;
        });
    }
    /**
     * 获取用户
     * @param userId 用户编号
     */
    item(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/item');
            let user = yield this.getByJson(url, { userId });
            return user;
        });
    }
    /**
     * 添加用户信息
     * @param item 用户
     */
    add(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/add');
            let result;
            let r = yield this.postByJson(url, { item });
            return r;
        });
    }
    /** 通过手机获取用户 */
    listByMobile(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mobile)
                throw errors_1.errors.argumentNull('mobile');
            let args = {};
            args.filter = `mobile = '${mobile}'`;
            let r = yield this.list(args);
            return r.dataItems[0];
        });
    }
    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetPassword(mobile, password, smsId, verifyCode) {
        if (!mobile)
            throw errors_1.errors.argumentNull('mobile');
        if (!password)
            throw errors_1.errors.argumentNull('password');
        if (!smsId)
            throw errors_1.errors.argumentNull('smsId');
        if (!verifyCode)
            throw errors_1.errors.argumentNull('verifyCode');
        let url = this.url('user/resetPassword');
        return this.postByJson(url, { mobile, password, smsId, verifyCode });
    }
    /**
     * 重置手机号码
     * @param mobile 需要重置的新手机号
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    resetMobile(mobile, smsId, verifyCode) {
        if (!mobile)
            throw errors_1.errors.argumentNull('mobile');
        if (!smsId)
            throw errors_1.errors.argumentNull('smsId');
        if (!verifyCode)
            throw errors_1.errors.argumentNull('verifyCode');
        let url = this.url('user/resetMobile');
        return this.postByJson(url, { mobile, smsId, verifyCode });
    }
    login(arg0, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let args;
            let username;
            if (typeof arg0 == "string") {
                username = arg0;
                if (!username)
                    throw errors_1.errors.argumentNull('username');
                if (!password)
                    throw errors_1.errors.argumentNull('password');
                args = { username, password };
            }
            else {
                args = arg0;
            }
            let url = this.url('user/login');
            let r = yield this.postByJson(url, args);
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            return r;
        });
    }
    /**
     * 注册
     * @param mobile 手机号
     * @param password 密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */
    register(mobile, password, smsId, verifyCode, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mobile)
                throw errors_1.errors.argumentNull('mobile');
            if (!password)
                throw errors_1.errors.argumentNull('password');
            if (!smsId)
                throw errors_1.errors.argumentNull('smsId');
            if (!verifyCode)
                throw errors_1.errors.argumentNull('verifyCode');
            let url = this.url('user/register');
            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode, data });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            return r;
        });
    }
    /**
     * 获取用户个人信息
     */
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/me');
            let user = yield this.getByJson(url);
            delete user.password;
            return user;
        });
    }
}
class RoleModule extends ServiceModule {
    constructor() {
        super(...arguments);
        this.resource = {
            /**
             * 获取角色所允许访问的资源 id
             * @param roleId 指定的角色编号
             */
            ids: (roleId) => __awaiter(this, void 0, void 0, function* () {
                if (!roleId)
                    throw errors_1.errors.argumentNull('roleId');
                let url = this.url('role/resourceIds');
                let r = yield this.getByJson(url, { roleId });
                return r || [];
            })
        };
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url("role/list");
            return this.get(url);
        });
    }
    item(id) {
        let url = this.url("role/item");
        return this.get(url, { id });
    }
    add(arg1, arg2) {
        let url = this.url("role/add");
        let item;
        if (typeof arg1 == "string") {
            item = { name: arg1, remark: arg2 };
        }
        else {
            item = arg1;
        }
        return this.postByJson(url, { item });
    }
    /**
     * 删除角色
     * @param id 要删除的角色编号
     */
    remove(id) {
        let url = this.url("role/remove");
        return this.postByJson(url, { id });
    }
    update(item) {
        let url = this.url("role/update");
        return this.postByJson(url, { item });
    }
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    resourceIds(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!roleId)
                throw errors_1.errors.argumentNull('roleId');
            let url = this.url('role/resourceIds');
            let r = yield this.getByJson(url, { roleId });
            return r || [];
        });
    }
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setResource(roleId, resourceIds) {
        if (!roleId)
            throw errors_1.errors.argumentNull('roleId');
        if (!resourceIds)
            throw errors_1.errors.argumentNull('resourceIds');
        let url = this.url('role/setResources');
        return this.postByJson(url, { roleId, resourceIds });
    }
}
class SMSModule extends ServiceModule {
    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendRegisterVerifyCode(mobile) {
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'register' });
    }
    /**
     * 校验验证码
     * @param smsId 验证码信息的 ID 号
     * @param verifyCode 验证码
     */
    checkVerifyCode(smsId, verifyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!smsId)
                throw errors_1.errors.argumentNull('smsId');
            if (!verifyCode)
                throw errors_1.errors.argumentNull('verifycode');
            let url = this.url('sms/checkVerifyCode');
            let r = yield this.postByJson(url, { smsId, verifyCode });
            return r;
        });
    }
    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile) {
        if (!mobile)
            throw errors_1.errors.argumentNull('mobile');
        let url = this.url('sms/sendVerifyCode');
        return this.postByJson(url, { mobile, type: 'resetPassword' });
    }
}


/***/ }),

/***/ "./out/services/service.js":
/*!*********************************!*\
  !*** ./out/services/service.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service");
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


/***/ }),

/***/ "./out/services/toolkit-service.js":
/*!*****************************************!*\
  !*** ./out/services/toolkit-service.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __webpack_require__(/*! ./service */ "./out/services/service.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
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


/***/ }),

/***/ "./out/settings.js":
/*!*************************!*\
  !*** ./out/settings.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const image_service_1 = __webpack_require__(/*! ./services/image-service */ "./out/services/image-service.js");
const permission_service_1 = __webpack_require__(/*! ./services/permission-service */ "./out/services/permission-service.js");
const toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ "./out/services/toolkit-service.js");
exports.settings = {
    noImageText: '暂无图片',
    // get applicationId() {
    //     return Service.applicationId
    // },
    // set applicationId(value) {
    //     Service.applicationId = value
    // },
    /** 获取图片服务的 URL 地址 */
    get imageServiceUrl() {
        return image_service_1.ImageService.baseUrl;
    },
    /** 设置图片服务的 URL 地址 */
    set imageServiceUrl(value) {
        image_service_1.ImageService.baseUrl = value;
    },
    /** 获取权限管理的 URL 地址 */
    get permissionServiceUrl() {
        return permission_service_1.PermissionService.baseUrl;
    },
    /** 设置权限管理的 URL 地址 */
    set permissionServiceUrl(value) {
        permission_service_1.PermissionService.baseUrl = value;
    },
    /** 获取工具类服务的 URL 地址 */
    get toolServiceUrl() {
        return toolkit_service_1.ToolkitService.baseUrl;
    },
    /** 设置工具类服务的 URL 地址 */
    set toolServiceUrl(value) {
        toolkit_service_1.ToolkitService.baseUrl = value;
    },
};


/***/ }),

/***/ "maishu-chitu-service":
/*!***************************************!*\
  !*** external "maishu-chitu-service" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map