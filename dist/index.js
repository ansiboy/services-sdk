
/*
 * maishu-services-sdk v1.4.8
 * https://github.com/ansiboy/services-sdk
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.serviceSdk = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
 * CHITU SERVICE v1.0.8
 * https://github.com/ansiboy/chitu-service
 * 
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Callback {\r\n    constructor() {\r\n        this.funcs = new Array();\r\n    }\r\n    add(func) {\r\n        this.funcs.push(func);\r\n    }\r\n    remove(func) {\r\n        this.funcs = this.funcs.filter(o => o != func);\r\n    }\r\n    fire(...args) {\r\n        this.funcs.forEach(o => o(...args));\r\n    }\r\n}\r\nexports.Callback = Callback;\r\nfunction Callbacks() {\r\n    return new Callback();\r\n}\r\nexports.Callbacks = Callbacks;\r\n\n\n//# sourceURL=webpack:///./out/callback.js?");

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.errors = {\r\n    serviceUrlCanntNull(serviceName) {\r\n        let msg = `Service '${serviceName}' base url can not null.`;\r\n        return new Error(msg);\r\n    },\r\n    unexpectedNullResult() {\r\n        let msg = `Null result is unexpected.`;\r\n        return new Error(msg);\r\n    },\r\n    unexpectedNullValue(name) {\r\n        let msg = `variable ${name} is unexpected null value.`;\r\n        return new Error(msg);\r\n    },\r\n    argumentNull(name) {\r\n        let msg = `Arugment ${name} cannt null or empty.`;\r\n        return new Error(msg);\r\n    },\r\n    fieldNull(field, itemName) {\r\n        let msg = `${itemName} ${field} cannt be null or empty`;\r\n        return new Error(msg);\r\n    },\r\n    instanceMessangerStart() {\r\n        let msg = `Instance messanger is start.`;\r\n        return new Error(msg);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./out/errors.js?");

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar service_1 = __webpack_require__(/*! ./service */ \"./out/service.js\");\r\nexports.Service = service_1.Service;\r\nvar callback_1 = __webpack_require__(/*! ./callback */ \"./out/callback.js\");\r\nexports.Callback = callback_1.Callback;\r\nexports.Callbacks = callback_1.Callbacks;\r\nvar value_store_1 = __webpack_require__(/*! ./value-store */ \"./out/value-store.js\");\r\nexports.ValueStore = value_store_1.ValueStore;\r\n\n\n//# sourceURL=webpack:///./out/index.js?");

/***/ }),

/***/ "./out/service.js":
/*!************************!*\
  !*** ./out/service.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst callback_1 = __webpack_require__(/*! ./callback */ \"./out/callback.js\");\r\nconst errors_1 = __webpack_require__(/*! ./errors */ \"./out/errors.js\");\r\nclass Service {\r\n    constructor() {\r\n        this.error = callback_1.Callbacks();\r\n    }\r\n    ajax(url, options) {\r\n        // options = options || {} as any\r\n        if (options === undefined)\r\n            options = {};\r\n        let data = options.data;\r\n        let method = options.method;\r\n        let headers = options.headers || {};\r\n        let body;\r\n        if (data != null) {\r\n            let is_json = (headers['content-type'] || '').indexOf('json') >= 0;\r\n            if (is_json) {\r\n                body = JSON.stringify(data);\r\n            }\r\n            else {\r\n                body = new URLSearchParams();\r\n                for (let key in data) {\r\n                    body.append(key, data[key]);\r\n                }\r\n            }\r\n        }\r\n        // return callAjax<T>(url, { headers: headers as any, body, method }, this, this.error);\r\n        return new Promise((reslove, reject) => {\r\n            let options = { headers: headers, body, method };\r\n            let timeId;\r\n            if (options == null)\r\n                throw errors_1.errors.unexpectedNullValue('options');\r\n            if (method == 'get') {\r\n                timeId = setTimeout(() => {\r\n                    let err = new Error(); //new AjaxError(options.method);\r\n                    err.name = 'timeout';\r\n                    err.message = '网络连接超时';\r\n                    reject(err);\r\n                    this.error.fire(this, err);\r\n                    clearTimeout(timeId);\r\n                }, Service.settings.ajaxTimeout * 1000);\r\n            }\r\n            ajax(url, options)\r\n                .then(data => {\r\n                reslove(data);\r\n                if (timeId)\r\n                    clearTimeout(timeId);\r\n            })\r\n                .catch(err => {\r\n                reject(err);\r\n                this.error.fire(this, err);\r\n                if (timeId)\r\n                    clearTimeout(timeId);\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * 创建服务\r\n     * @param type 服务类型\r\n     */\r\n    createService(type) {\r\n        type = type || Service;\r\n        let service = new type();\r\n        service.error.add((sender, error) => {\r\n            this.error.fire(service, error);\r\n        });\r\n        return service;\r\n    }\r\n}\r\nService.settings = {\r\n    ajaxTimeout: 30,\r\n};\r\nexports.Service = Service;\r\nfunction ajax(url, options) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let response = yield fetch(url, options);\r\n        let responseText = response.text();\r\n        let p;\r\n        if (typeof responseText == 'string') {\r\n            p = new Promise((reslove, reject) => {\r\n                reslove(responseText);\r\n            });\r\n        }\r\n        else {\r\n            p = responseText;\r\n        }\r\n        let text = yield responseText;\r\n        let textObject;\r\n        let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;\r\n        if (isJSONContextType) {\r\n            textObject = text ? JSON.parse(text) : null;\r\n        }\r\n        else {\r\n            textObject = text;\r\n        }\r\n        if (response.status >= 300) {\r\n            let err = new Error();\r\n            err.method = options.method;\r\n            err.name = `${response.status}`;\r\n            err.message = isJSONContextType ? (textObject.Message || textObject.message) : textObject;\r\n            err.message = err.message || response.statusText;\r\n            throw err;\r\n        }\r\n        return textObject;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./out/service.js?");

/***/ }),

/***/ "./out/value-store.js":
/*!****************************!*\
  !*** ./out/value-store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * 实现数据的存储，以及数据修改的通知\r\n */\r\nclass ValueStore {\r\n    constructor(value) {\r\n        this.items = new Array();\r\n        this._value = value === undefined ? null : value;\r\n    }\r\n    add(func, sender) {\r\n        this.items.push({ func, sender });\r\n        return func;\r\n    }\r\n    remove(func) {\r\n        this.items = this.items.filter(o => o.func != func);\r\n    }\r\n    fire(value) {\r\n        this.items.forEach(o => o.func(value, o.sender));\r\n    }\r\n    get value() {\r\n        if (this._value === undefined)\r\n            return null;\r\n        return this._value;\r\n    }\r\n    set value(value) {\r\n        this._value = value;\r\n        this.fire(value);\r\n    }\r\n}\r\nexports.ValueStore = ValueStore;\r\n\n\n//# sourceURL=webpack:///./out/value-store.js?");

/***/ })

/******/ });
});
},{}],2:[function(require,module,exports){
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
    }
};

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_service_1 = require("maishu-chitu-service");
exports.events = {
    /** 成功调用 login 方法后引发 */
    login: maishu_chitu_service_1.Callbacks(),
    /** 成功调用 logout 方法后引发 */
    logout: maishu_chitu_service_1.Callbacks(),
    /** 成功调用 register 方法后引发 */
    register: maishu_chitu_service_1.Callbacks(),
};

},{"maishu-chitu-service":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./services/service");
exports.Service = service_1.Service;
var image_service_1 = require("./services/image-service");
exports.ImageService = image_service_1.ImageService;
var user_service_1 = require("./services/user-service");
exports.UserService = user_service_1.UserService;
var toolkit_service_1 = require("./services/toolkit-service");
exports.ToolkitService = toolkit_service_1.ToolkitService;
var permission_service_1 = require("./services/permission-service");
exports.PermissionService = permission_service_1.PermissionService;
// export { InstanceMessanger } from './services/instance-messanger'
// export { MessageService } from './services/message-service'
var settings_1 = require("./settings");
exports.settings = settings_1.settings;
var events_1 = require("./events");
exports.events = events_1.events;

},{"./events":3,"./services/image-service":5,"./services/permission-service":6,"./services/service":7,"./services/toolkit-service":8,"./services/user-service":9,"./settings":10}],5:[function(require,module,exports){
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
const errors_1 = require("../errors");
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
        if (!id)
            throw errors_1.errors.argumentNull('id');
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

},{"../errors":2,"./service":7}],6:[function(require,module,exports){
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
const errors_1 = require("../errors");
const events_1 = require("../events");
class PermissionService extends service_1.Service {
    constructor() {
        super();
    }
    url(path) {
        if (!PermissionService.baseUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${PermissionService.baseUrl}/${path}`;
    }
    //=============================================================
    // 资源相关
    /** 添加资源 */
    addResource(item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!item)
                throw errors_1.errors.argumentNull('item');
            let url = this.url('resource/add');
            let result = yield this.postByJson(url, { item });
            Object.assign(item, result);
            return result;
        });
    }
    /** 更新资源 */
    updateResource(item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!item)
                throw errors_1.errors.argumentNull('item');
            let url = this.url('resource/update');
            let result = yield this.postByJson(url, { item });
            Object.assign(item, result);
            return result;
        });
    }
    /** 获取菜单类型的资源 */
    getMenuResources() {
        return __awaiter(this, void 0, void 0, function* () {
            let menuType = 'menu';
            let args = {
                filter: `(type = "${menuType}")`
            };
            return this.getResourceList(args);
        });
    }
    /** 获取资源列表 */
    getResourceList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args)
                throw errors_1.errors.argumentNull('args');
            let url = this.url('resource/list');
            if (!args.sortExpression)
                args.sortExpression = 'sort_number asc';
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            for (let i = 0; i < result.dataItems.length; i++) {
                result.dataItems[i].data = result.dataItems[i].data || {};
            }
            return result;
        });
    }
    /**
     * 删除指定的资源
     * @param id 要删除的资源编号
     */
    deleteResource(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw errors_1.errors.argumentNull('id');
            let url = this.url('resource/remove');
            return this.postByJson(url, { id });
        });
    }
    /**
     * 获取指定资源的子按钮
     * @param id 资源编号
     */
    getResourceChildCommands(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw errors_1.errors.argumentNull('id');
            let buttonType = 'button';
            let filter = `parent_id = '${id}' and type = '${buttonType}'`;
            let url = `resource/list`;
            let result = yield this.getByJson(url, { filter });
            return result;
        });
    }
    //=============================================================
    // 角色相关
    /**
     * 获取角色列表
     */
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('role/list');
            let r = yield this.getByJson(url);
            return r || [];
        });
    }
    /**
     * 获取单个角色
     * @param id 要获取的角色编号
     */
    getRole(id) {
        if (!id)
            throw errors_1.errors.argumentNull('id');
        let url = this.url('role/get');
        return this.getByJson(url, { id });
    }
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */
    setRoleResource(roleId, resourceIds) {
        if (!roleId)
            throw errors_1.errors.argumentNull('roleId');
        if (!resourceIds)
            throw errors_1.errors.argumentNull('resourceIds');
        let url = this.url('role/setResources');
        return this.postByJson(url, { roleId, resourceIds });
    }
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */
    getRoleResourceIds(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!roleId)
                throw errors_1.errors.argumentNull('roleId');
            let url = this.url('role/resourceIds');
            let r = yield this.getByJson(url, { roleId });
            return r || [];
        });
    }
    /** 设置用户角色 */
    setUserRoles(userId, roleIds) {
        if (!userId)
            throw errors_1.errors.argumentNull('userId');
        if (!roleIds)
            throw errors_1.errors.argumentNull('roleIds');
        let url = this.url('user/setRoles');
        return this.postByJson(url, { userId, roleIds });
    }
    //================================================================
    // 用户相关
    /** 获取用户列表 */
    getUserList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/list');
            let result = yield this.getByJson(url, { args });
            if (result == null)
                throw errors_1.errors.unexpectedNullResult();
            return result;
        });
    }
    /** 通过手机获取用户 */
    getUserByMobile(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mobile)
                throw errors_1.errors.argumentNull('mobile');
            let args = {};
            args.filter = `mobile = '${mobile}'`;
            let r = yield this.getUserList(args);
            return r.dataItems[0];
        });
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
    /**
     * 退出登录
     */
    logout() {
        if (service_1.Service.loginInfo.value == null)
            return;
        //TODO: 将服务端 token 设置为失效
        events_1.events.logout.fire(this, service_1.Service.loginInfo.value);
        service_1.Service.setStorageLoginInfo(null);
        service_1.Service.loginInfo.value = null;
    }
    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username)
                throw errors_1.errors.argumentNull('username');
            if (!password)
                throw errors_1.errors.argumentNull('password');
            let url = this.url('user/login');
            let r = yield this.postByJson(url, { username, password });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            service_1.Service.loginInfo.value = r;
            service_1.Service.setStorageLoginInfo(r);
            events_1.events.login.fire(this, r);
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
            service_1.Service.setStorageLoginInfo(r);
            events_1.events.register.fire(this, r);
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
            return user;
        });
    }
    /**
     * 获取用户
     * @param userId 用户编号
     */
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/item');
            let user = yield this.getByJson(url, { userId });
            return user;
        });
    }
    /**
     * 更新用户信息
     * @param user 用户
     */
    update(user) {
        let url = this.url('user/update');
        return this.postByJson(url, { user });
    }
    /**
     * 获取当前登录用户的角色
     */
    myRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/getRoles');
            let roles = yield this.getByJson(url);
            return roles;
        });
    }
}
exports.PermissionService = PermissionService;
// export interface User {
//     id: string,
//     user_name: string,
//     mobile: string,
//     email: string,
//     password: string,
//     sort_number: number,
//     data?: any
//     // roleIds: string[]
// }

},{"../errors":2,"../events":3,"./service":7}],7:[function(require,module,exports){
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
const settings_1 = require("../settings");
const maishu_chitu_service_1 = require("maishu-chitu-service");
class Service extends maishu_chitu_service_1.Service {
    constructor() {
        super();
    }
    static getStorageLoginInfo() {
        let loginInfoSerialString = this.getCookie(Service.LoginInfoStorageName);
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
    static setStorageLoginInfo(value) {
        if (value == null) {
            this.removeCookie(Service.LoginInfoStorageName);
            return;
        }
        this.setCookie(Service.LoginInfoStorageName, JSON.stringify(value), 1000);
    }
    static setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    static getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    static removeCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
    ajax(url, options) {
        const _super = Object.create(null, {
            ajax: { get: () => super.ajax }
        });
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            options.headers = options.headers || {};
            if (Service.loginInfo.value)
                options.headers['token'] = Service.loginInfo.value.token;
            if (settings_1.settings.applicationId)
                options.headers['application-id'] = typeof settings_1.settings.applicationId == 'function' ? settings_1.settings.applicationId() : settings_1.settings.applicationId;
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
Service.LoginInfoStorageName = 'app-login-info';
Service.loginInfo = new maishu_chitu_service_1.ValueStore(Service.getStorageLoginInfo());
exports.Service = Service;

},{"../settings":10,"maishu-chitu-service":1}],8:[function(require,module,exports){
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

},{"../errors":2,"./service":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_service_1 = require("./permission-service");
/** 与用户相关的服务，这个类已经废弃，请使用  PermissionService*/
class UserService extends permission_service_1.PermissionService {
}
exports.UserService = UserService;

},{"./permission-service":6}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_service_1 = require("./services/image-service");
const permission_service_1 = require("./services/permission-service");
const toolkit_service_1 = require("./services/toolkit-service");
exports.settings = {
    noImageText: '暂无图片',
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

},{"./services/image-service":5,"./services/permission-service":6,"./services/toolkit-service":8}]},{},[4])(4)
});
