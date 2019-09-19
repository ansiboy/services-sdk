/*!
 * 
<<<<<<< HEAD
 *  maishu-services-sdk v1.13.4
=======
 *  maishu-services-sdk v1.15.0
>>>>>>> b9acbbe8538f6cebc1505b677567d4a13a7362a2
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

/***/ "./out/events.js":
/*!***********************!*\
  !*** ./out/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service");
exports.events = {
    /** 成功调用 login 方法后引发 */
    login: maishu_chitu_service_1.Callbacks(),
    /** 成功调用 logout 方法后引发 */
    logout: maishu_chitu_service_1.Callbacks(),
    /** 成功调用 register 方法后引发 */
    register: maishu_chitu_service_1.Callbacks(),
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
var user_service_1 = __webpack_require__(/*! ./services/user-service */ "./out/services/user-service.js");
exports.UserService = user_service_1.UserService;
var toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ "./out/services/toolkit-service.js");
exports.ToolkitService = toolkit_service_1.ToolkitService;
var permission_service_1 = __webpack_require__(/*! ./services/permission-service */ "./out/services/permission-service.js");
exports.PermissionService = permission_service_1.PermissionService;
// export { InstanceMessanger } from './services/instance-messanger'
// export { MessageService } from './services/message-service'
var settings_1 = __webpack_require__(/*! ./settings */ "./out/settings.js");
exports.settings = settings_1.settings;
var events_1 = __webpack_require__(/*! ./events */ "./out/events.js");
exports.events = events_1.events;


/***/ }),

/***/ "./out/services/image-service.js":
/*!***************************************!*\
  !*** ./out/services/image-service.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __webpack_require__(/*! ./service */ "./out/services/service.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const events_1 = __webpack_require__(/*! ../events */ "./out/events.js");
class PermissionService extends service_1.Service {
    constructor() {
        super();
        this.self = this;
        this.currentUser = {
            resource: {
                list: () => {
                    let url = this.url("current-user/resource/list");
                    return this.get(url);
                }
            }
        };
        this.role = {
            /**
             * 获取角色列表
             */
            list: () => {
                let url = this.url("role/list");
                return this.get(url);
            },
            /**
             * 获取单个角色
             * @param id 要获取的角色编号
             */
            item: (id) => {
                let url = this.url("role/item");
                return this.get(url, { id });
            },
            /**
             * 添加角色
             * @param name 要添加的角色名称
             * @param remark 要添加的角色备注
             */
            add: (item) => {
                let url = this.url("role/add");
                return this.postByJson(url, { item });
            },
            /**
             * 删除角色
             * @param id 要删除的角色编号
             */
            remove: (id) => {
                let url = this.url("role/remove");
                return this.postByJson(url, { id });
            },
            update: (item) => {
                let url = this.url("role/update");
                return this.postByJson(url, { item });
            },
            resource: {
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
            }
        };
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
        this.user = {
            list: (args) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('user/list');
                let result = yield this.getByJson(url, { args });
                if (result == null)
                    throw errors_1.errors.unexpectedNullResult();
                return result;
            }),
            update: (item) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('user/update');
                let result = yield this.postByJson(url, { user: item });
                return result;
            }),
            /**
             * 添加用户信息
             * @param item 用户
             */
            add: (item, roleIds) => __awaiter(this, void 0, void 0, function* () {
                let url = this.url('user/add');
                let result;
                let r = yield this.postByJson(url, { item, roleIds });
                return r;
            })
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
        return `${PermissionService.baseUrl}/${path}`;
    }
    // //=============================================================
    // // 资源相关
    // /** 添加资源 */
    // async addResource(item: Partial<Resource>) {
    //     if (!item) throw errors.argumentNull('item')
    //     let url = this.url('resource/add')
    //     let result = await this.postByJson<{ id: string }>(url, { item })
    //     Object.assign(item, result)
    //     return result
    // }
    // /** 更新资源 */
    // async updateResource(item: Partial<Resource>) {
    //     if (!item) throw errors.argumentNull('item')
    //     let url = this.url('resource/update')
    //     let result = await this.postByJson(url, { item })
    //     Object.assign(item, result)
    //     return result
    // }
    // /** 获取资源列表 */
    // async getResourceList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<Resource>> {
    //     if (!args) throw errors.argumentNull('args')
    //     let url = this.url('resource/list')
    //     if (!args.sortExpression)
    //         args.sortExpression = 'sort_number asc'
    //     type T = Resource & { data?: { visible?: boolean } }
    //     let result = await this.getByJson<DataSourceSelectResult<T>>(url, { args })
    //     if (result == null)
    //         throw errors.unexpectedNullResult()
    //     for (let i = 0; i < result.dataItems.length; i++) {
    //         result.dataItems[i].data = result.dataItems[i].data || {}
    //     }
    //     return result
    // }
    // /**
    //  * 删除指定的资源
    //  * @param id 要删除的资源编号
    //  */
    // async deleteResource(id: string) {
    //     if (!id) throw errors.argumentNull('id')
    //     let url = this.url('resource/remove')
    //     return this.postByJson(url, { id })
    // }
    // /**
    //  * 获取指定资源的子按钮
    //  * @param id 资源编号
    //  */
    // async getResourceChildCommands(id: string) {
    //     if (!id) throw errors.argumentNull('id')
    //     let buttonType: ResourceType = 'button'
    //     let filter = `parent_id = '${id}' and type = '${buttonType}'`
    //     let url = `resource/list`
    //     let result = await this.getByJson(url, { filter })
    //     return result
    // }
    //=============================================================
    // 角色相关
    // async getRoles(): Promise<Role[]> {
    //     let url = this.url('role/list')
    //     let r = await this.getByJson<Role[]>(url)
    //     return r || []
    // }
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
    // addRole(name: string, remark?: string) {
    //     if (!name) throw errors.argumentNull("name");
    //     let url = this.url("role/add");
    //     return this.postByJson(url, { name, remark });
    // }
    // removeRole(id: string) {
    //     if (!id) throw errors.argumentNull("id");
    //     let url = this.url("role/remove");
    //     return this.postByJson(url, { id });
    // }
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
            if (!service_1.Service.loginInfo.value) {
                return null;
            }
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
    // async addUser(item: Partial<User>) {
    //     let url = this.url('user/add')
    //     let result: { id: string }
    //     let r = await this.postByJson<typeof result>(url, { item })
    //     return r
    // }
    /**
     * 更新用户信息
     * @param item 用户
     */
    updateUser(item) {
        let url = this.url('user/update');
        return this.postByJson(url, { user: item });
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
    /**
     * 给指定的用户添加角色
     * @param userId 用户编号
     * @param roleIds 多个角色编号
     */
    addUserRoles(userId, roleIds) {
        let url = this.url('user/addRoles');
        return this.postByJson(url, { userId, roleIds });
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


/***/ }),

/***/ "./out/services/service.js":
/*!*********************************!*\
  !*** ./out/services/service.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service");
class Service extends maishu_chitu_service_1.Service {
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
        // nodejs 没有 document
        if (typeof document == 'undefined')
            return;
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    static getCookie(name) {
        if (typeof document == 'undefined')
            return null;
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
        // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setCookie(name, '');
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
            if (Service.applicationId)
                options.headers['application-id'] = typeof Service.applicationId == 'function' ? Service.applicationId() : Service.applicationId;
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
Service.LoginInfoStorageName = 'app-login-info';
Service.loginInfo = new maishu_chitu_service_1.ValueStore(Service.getStorageLoginInfo());
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

/***/ "./out/services/user-service.js":
/*!**************************************!*\
  !*** ./out/services/user-service.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const permission_service_1 = __webpack_require__(/*! ./permission-service */ "./out/services/permission-service.js");
/** 与用户相关的服务，这个类已经废弃，请使用  PermissionService*/
class UserService extends permission_service_1.PermissionService {
}
exports.UserService = UserService;


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
const service_1 = __webpack_require__(/*! ./services/service */ "./out/services/service.js");
exports.settings = {
    noImageText: '暂无图片',
    get applicationId() {
        return service_1.Service.applicationId;
    },
    set applicationId(value) {
        service_1.Service.applicationId = value;
    },
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