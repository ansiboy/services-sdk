/*!
 * 
 *  maishu-services-sdk v1.5.2
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
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__) {
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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.errors = {\r\n    serviceUrlCanntNull(serviceName) {\r\n        let msg = `Service '${serviceName}' base url can not null.`;\r\n        return new Error(msg);\r\n    },\r\n    unexpectedNullResult() {\r\n        let msg = `Null result is unexpected.`;\r\n        return new Error(msg);\r\n    },\r\n    unexpectedNullValue(name) {\r\n        let msg = `variable ${name} is unexpected null value.`;\r\n        return new Error(msg);\r\n    },\r\n    argumentNull(name) {\r\n        let msg = `Arugment ${name} cannt null or empty.`;\r\n        return new Error(msg);\r\n    },\r\n    fieldNull(field, itemName) {\r\n        let msg = `${itemName} ${field} cannt be null or empty`;\r\n        return new Error(msg);\r\n    },\r\n    instanceMessangerStart() {\r\n        let msg = `Instance messanger is start.`;\r\n        return new Error(msg);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./out/errors.js?");

/***/ }),

/***/ "./out/events.js":
/*!***********************!*\
  !*** ./out/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ \"maishu-chitu-service\");\r\nexports.events = {\r\n    /** 成功调用 login 方法后引发 */\r\n    login: maishu_chitu_service_1.Callbacks(),\r\n    /** 成功调用 logout 方法后引发 */\r\n    logout: maishu_chitu_service_1.Callbacks(),\r\n    /** 成功调用 register 方法后引发 */\r\n    register: maishu_chitu_service_1.Callbacks(),\r\n};\r\n\n\n//# sourceURL=webpack:///./out/events.js?");

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar service_1 = __webpack_require__(/*! ./services/service */ \"./out/services/service.js\");\r\nexports.Service = service_1.Service;\r\nvar image_service_1 = __webpack_require__(/*! ./services/image-service */ \"./out/services/image-service.js\");\r\nexports.ImageService = image_service_1.ImageService;\r\nvar user_service_1 = __webpack_require__(/*! ./services/user-service */ \"./out/services/user-service.js\");\r\nexports.UserService = user_service_1.UserService;\r\nvar toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ \"./out/services/toolkit-service.js\");\r\nexports.ToolkitService = toolkit_service_1.ToolkitService;\r\nvar permission_service_1 = __webpack_require__(/*! ./services/permission-service */ \"./out/services/permission-service.js\");\r\nexports.PermissionService = permission_service_1.PermissionService;\r\n// export { InstanceMessanger } from './services/instance-messanger'\r\n// export { MessageService } from './services/message-service'\r\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./out/settings.js\");\r\nexports.settings = settings_1.settings;\r\nvar events_1 = __webpack_require__(/*! ./events */ \"./out/events.js\");\r\nexports.events = events_1.events;\r\n\n\n//# sourceURL=webpack:///./out/index.js?");

/***/ }),

/***/ "./out/services/image-service.js":
/*!***************************************!*\
  !*** ./out/services/image-service.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst service_1 = __webpack_require__(/*! ./service */ \"./out/services/service.js\");\r\nconst errors_1 = __webpack_require__(/*! ../errors */ \"./out/errors.js\");\r\n/** 图片服务，实现图片的上传，获取 */\r\nclass ImageService extends service_1.Service {\r\n    url(path) {\r\n        if (!ImageService.baseUrl)\r\n            throw errors_1.errors.serviceUrlCanntNull('imageService');\r\n        return `${ImageService.baseUrl}/${path}`;\r\n    }\r\n    /** 获取图片的 URL\r\n     * @param id 图片的 ID\r\n     * @param width 图片的宽度，如果不指定则为实际图片的宽度\r\n     * @param height 图片的高度，如果不指定则为实际图片的高度\r\n     */\r\n    imageSource(id, width, height) {\r\n        if (!id)\r\n            throw errors_1.errors.argumentNull('id');\r\n        let isBase64 = id.startsWith('data:image');\r\n        if (isBase64) {\r\n            return id;\r\n        }\r\n        let url = this.url('image');\r\n        url = `${url}?id=${id}`;\r\n        if (width != null)\r\n            url = url + `&width=${width}`;\r\n        if (height != null)\r\n            url = url + `&height=${height}`;\r\n        return url;\r\n    }\r\n    getImageSize(imageBase64) {\r\n        if (!imageBase64)\r\n            throw errors_1.errors.argumentNull('imageBase64');\r\n        return new Promise((resolve, reject) => {\r\n            var i = new Image();\r\n            i.onload = function () {\r\n                resolve({ width: i.width, height: i.height });\r\n            };\r\n            i.src = imageBase64;\r\n        });\r\n    }\r\n    /**\r\n     * 对图片进行缩放\r\n     * @param imageBase64 图片 base64 格式数据\r\n     * @param width 目标图片的宽度\r\n     * @param height 目标图片的高度\r\n     */\r\n    resize(imageBase64, width, height) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!imageBase64)\r\n                throw errors_1.errors.argumentNull('imageBase64');\r\n            if (!width)\r\n                throw errors_1.errors.argumentNull('width');\r\n            if (!height)\r\n                throw errors_1.errors.argumentNull('height');\r\n            var canvas = document.createElement('canvas'); //.getElementById(\"canvas\");\r\n            var ctx = canvas.getContext(\"2d\");\r\n            canvas.width = width;\r\n            canvas.height = height;\r\n            return yield new Promise((resolve, reject) => {\r\n                var img = new Image();\r\n                img.src = imageBase64;\r\n                img.onload = function () {\r\n                    // width = img.width\r\n                    // height = img.height\r\n                    if (ctx == null)\r\n                        throw 'get canvas context fail';\r\n                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\r\n                    resolve(canvas.toDataURL());\r\n                };\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * 上传图片\r\n     * @param imageBase64 图片的 base64 数据\r\n     */\r\n    upload(imageBase64) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!imageBase64)\r\n                throw errors_1.errors.argumentNull('imageBase64');\r\n            let url = this.url('upload');\r\n            let imageSize = yield this.getImageSize(imageBase64);\r\n            let maxWidth = 800;\r\n            let maxHeight = 800;\r\n            if (imageSize.width > maxWidth) { // || imageSize.height > maxHeight\r\n                let height = imageSize.height / imageSize.width * maxWidth;\r\n                imageBase64 = yield this.resize(imageBase64, maxWidth, height);\r\n            }\r\n            else if (imageSize.height > maxHeight) {\r\n                let width = imageSize.width / imageSize.height * maxHeight;\r\n                imageBase64 = yield this.resize(imageBase64, width, maxHeight);\r\n            }\r\n            return this.postByJson(url, { image: imageBase64 });\r\n        });\r\n    }\r\n    /**\r\n     *\r\n     * @param id 删除图片\r\n     */\r\n    remove(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!id)\r\n                throw errors_1.errors.argumentNull('id');\r\n            let url = this.url(\"remove\");\r\n            return this.postByJson(url, { id });\r\n        });\r\n    }\r\n}\r\nexports.ImageService = ImageService;\r\n\n\n//# sourceURL=webpack:///./out/services/image-service.js?");

/***/ }),

/***/ "./out/services/permission-service.js":
/*!********************************************!*\
  !*** ./out/services/permission-service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst service_1 = __webpack_require__(/*! ./service */ \"./out/services/service.js\");\r\nconst errors_1 = __webpack_require__(/*! ../errors */ \"./out/errors.js\");\r\nconst events_1 = __webpack_require__(/*! ../events */ \"./out/events.js\");\r\nclass PermissionService extends service_1.Service {\r\n    constructor() {\r\n        super();\r\n    }\r\n    url(path) {\r\n        if (!PermissionService.baseUrl)\r\n            throw errors_1.errors.serviceUrlCanntNull('permissionService');\r\n        return `${PermissionService.baseUrl}/${path}`;\r\n    }\r\n    //=============================================================\r\n    // 资源相关\r\n    /** 添加资源 */\r\n    addResource(item) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!item)\r\n                throw errors_1.errors.argumentNull('item');\r\n            let url = this.url('resource/add');\r\n            let result = yield this.postByJson(url, { item });\r\n            Object.assign(item, result);\r\n            return result;\r\n        });\r\n    }\r\n    /** 更新资源 */\r\n    updateResource(item) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!item)\r\n                throw errors_1.errors.argumentNull('item');\r\n            let url = this.url('resource/update');\r\n            let result = yield this.postByJson(url, { item });\r\n            Object.assign(item, result);\r\n            return result;\r\n        });\r\n    }\r\n    /** 获取菜单类型的资源 */\r\n    getMenuResources() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let menuType = 'menu';\r\n            let args = {\r\n                filter: `(type = \"${menuType}\")`\r\n            };\r\n            return this.getResourceList(args);\r\n        });\r\n    }\r\n    /** 获取资源列表 */\r\n    getResourceList(args) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!args)\r\n                throw errors_1.errors.argumentNull('args');\r\n            let url = this.url('resource/list');\r\n            if (!args.sortExpression)\r\n                args.sortExpression = 'sort_number asc';\r\n            let result = yield this.getByJson(url, { args });\r\n            if (result == null)\r\n                throw errors_1.errors.unexpectedNullResult();\r\n            for (let i = 0; i < result.dataItems.length; i++) {\r\n                result.dataItems[i].data = result.dataItems[i].data || {};\r\n            }\r\n            return result;\r\n        });\r\n    }\r\n    /**\r\n     * 删除指定的资源\r\n     * @param id 要删除的资源编号\r\n     */\r\n    deleteResource(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!id)\r\n                throw errors_1.errors.argumentNull('id');\r\n            let url = this.url('resource/remove');\r\n            return this.postByJson(url, { id });\r\n        });\r\n    }\r\n    /**\r\n     * 获取指定资源的子按钮\r\n     * @param id 资源编号\r\n     */\r\n    getResourceChildCommands(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!id)\r\n                throw errors_1.errors.argumentNull('id');\r\n            let buttonType = 'button';\r\n            let filter = `parent_id = '${id}' and type = '${buttonType}'`;\r\n            let url = `resource/list`;\r\n            let result = yield this.getByJson(url, { filter });\r\n            return result;\r\n        });\r\n    }\r\n    //=============================================================\r\n    // 角色相关\r\n    /**\r\n     * 获取角色列表\r\n     */\r\n    getRoles() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let url = this.url('role/list');\r\n            let r = yield this.getByJson(url);\r\n            return r || [];\r\n        });\r\n    }\r\n    /**\r\n     * 获取单个角色\r\n     * @param id 要获取的角色编号\r\n     */\r\n    getRole(id) {\r\n        if (!id)\r\n            throw errors_1.errors.argumentNull('id');\r\n        let url = this.url('role/get');\r\n        return this.getByJson(url, { id });\r\n    }\r\n    /**\r\n     *\r\n     * @param roleId 指定的角色编号\r\n     * @param resourceIds 角色所允许访问的资源编号\r\n     */\r\n    setRoleResource(roleId, resourceIds) {\r\n        if (!roleId)\r\n            throw errors_1.errors.argumentNull('roleId');\r\n        if (!resourceIds)\r\n            throw errors_1.errors.argumentNull('resourceIds');\r\n        let url = this.url('role/setResources');\r\n        return this.postByJson(url, { roleId, resourceIds });\r\n    }\r\n    /**\r\n     * 获取角色所允许访问的资源 id\r\n     * @param roleId 指定的角色编号\r\n     */\r\n    getRoleResourceIds(roleId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!roleId)\r\n                throw errors_1.errors.argumentNull('roleId');\r\n            let url = this.url('role/resourceIds');\r\n            let r = yield this.getByJson(url, { roleId });\r\n            return r || [];\r\n        });\r\n    }\r\n    /** 设置用户角色 */\r\n    setUserRoles(userId, roleIds) {\r\n        if (!userId)\r\n            throw errors_1.errors.argumentNull('userId');\r\n        if (!roleIds)\r\n            throw errors_1.errors.argumentNull('roleIds');\r\n        let url = this.url('user/setRoles');\r\n        return this.postByJson(url, { userId, roleIds });\r\n    }\r\n    //================================================================\r\n    // 用户相关\r\n    /** 获取用户列表 */\r\n    getUserList(args) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let url = this.url('user/list');\r\n            let result = yield this.getByJson(url, { args });\r\n            if (result == null)\r\n                throw errors_1.errors.unexpectedNullResult();\r\n            return result;\r\n        });\r\n    }\r\n    /** 通过手机获取用户 */\r\n    getUserByMobile(mobile) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!mobile)\r\n                throw errors_1.errors.argumentNull('mobile');\r\n            let args = {};\r\n            args.filter = `mobile = '${mobile}'`;\r\n            let r = yield this.getUserList(args);\r\n            return r.dataItems[0];\r\n        });\r\n    }\r\n    /**\r\n     * 移除当前应用的用户\r\n     * @param userId 要移除的用户编号\r\n     */\r\n    removeUser(userId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!userId)\r\n                throw errors_1.errors.argumentNull('userId');\r\n            let url = this.url('application/removeUser');\r\n            return this.deleteByJson(url, { userId });\r\n        });\r\n    }\r\n    /**\r\n     * 获取当前应用的所有用户\r\n     * @param args 数据源选择参数\r\n     */\r\n    getApplicatinUsers(args) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (args == null)\r\n                throw errors_1.errors.argumentNull('args');\r\n            let url = this.url('application/users');\r\n            let result = yield this.getByJson(url, { args });\r\n            if (result == null)\r\n                throw errors_1.errors.unexpectedNullResult();\r\n            return result;\r\n        });\r\n    }\r\n    /**\r\n     * 发送注册操作验证码\r\n     * @param mobile 接收验证码的手机号\r\n     */\r\n    sendRegisterVerifyCode(mobile) {\r\n        let url = this.url('sms/sendVerifyCode');\r\n        return this.postByJson(url, { mobile, type: 'register' });\r\n    }\r\n    /**\r\n     * 校验验证码\r\n     * @param smsId 验证码信息的 ID 号\r\n     * @param verifyCode 验证码\r\n     */\r\n    checkVerifyCode(smsId, verifyCode) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!smsId)\r\n                throw errors_1.errors.argumentNull('smsId');\r\n            if (!verifyCode)\r\n                throw errors_1.errors.argumentNull('verifycode');\r\n            let url = this.url('sms/checkVerifyCode');\r\n            let r = yield this.postByJson(url, { smsId, verifyCode });\r\n            return r;\r\n        });\r\n    }\r\n    /**\r\n     * 发送重置密码操作验证码\r\n     * @param mobile 接收验证码的手机号\r\n     */\r\n    sendResetVerifyCode(mobile) {\r\n        if (!mobile)\r\n            throw errors_1.errors.argumentNull('mobile');\r\n        let url = this.url('sms/sendVerifyCode');\r\n        return this.postByJson(url, { mobile, type: 'resetPassword' });\r\n    }\r\n    /**\r\n     * 重置密码\r\n     * @param mobile 手机号\r\n     * @param password 新密码\r\n     * @param smsId 短信编号\r\n     * @param verifyCode 验证码\r\n     */\r\n    resetPassword(mobile, password, smsId, verifyCode) {\r\n        if (!mobile)\r\n            throw errors_1.errors.argumentNull('mobile');\r\n        if (!password)\r\n            throw errors_1.errors.argumentNull('password');\r\n        if (!smsId)\r\n            throw errors_1.errors.argumentNull('smsId');\r\n        if (!verifyCode)\r\n            throw errors_1.errors.argumentNull('verifyCode');\r\n        let url = this.url('user/resetPassword');\r\n        return this.postByJson(url, { mobile, password, smsId, verifyCode });\r\n    }\r\n    /**\r\n     * 重置手机号码\r\n     * @param mobile 需要重置的新手机号\r\n     * @param smsId 短信编号\r\n     * @param verifyCode 验证码\r\n     */\r\n    resetMobile(mobile, smsId, verifyCode) {\r\n        if (!mobile)\r\n            throw errors_1.errors.argumentNull('mobile');\r\n        if (!smsId)\r\n            throw errors_1.errors.argumentNull('smsId');\r\n        if (!verifyCode)\r\n            throw errors_1.errors.argumentNull('verifyCode');\r\n        let url = this.url('user/resetMobile');\r\n        return this.postByJson(url, { mobile, smsId, verifyCode });\r\n    }\r\n    /**\r\n     * 退出登录\r\n     */\r\n    logout() {\r\n        if (service_1.Service.loginInfo.value == null)\r\n            return;\r\n        //TODO: 将服务端 token 设置为失效\r\n        events_1.events.logout.fire(this, service_1.Service.loginInfo.value);\r\n        service_1.Service.setStorageLoginInfo(null);\r\n        service_1.Service.loginInfo.value = null;\r\n    }\r\n    /**\r\n     * 登录\r\n     * @param username 用户名\r\n     * @param password 密码\r\n     */\r\n    login(username, password) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!username)\r\n                throw errors_1.errors.argumentNull('username');\r\n            if (!password)\r\n                throw errors_1.errors.argumentNull('password');\r\n            let url = this.url('user/login');\r\n            let r = yield this.postByJson(url, { username, password });\r\n            if (r == null)\r\n                throw errors_1.errors.unexpectedNullResult();\r\n            service_1.Service.loginInfo.value = r;\r\n            service_1.Service.setStorageLoginInfo(r);\r\n            events_1.events.login.fire(this, r);\r\n            return r;\r\n        });\r\n    }\r\n    /**\r\n     * 注册\r\n     * @param mobile 手机号\r\n     * @param password 密码\r\n     * @param smsId 短信编号\r\n     * @param verifyCode 验证码\r\n     */\r\n    register(mobile, password, smsId, verifyCode, data) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!mobile)\r\n                throw errors_1.errors.argumentNull('mobile');\r\n            if (!password)\r\n                throw errors_1.errors.argumentNull('password');\r\n            if (!smsId)\r\n                throw errors_1.errors.argumentNull('smsId');\r\n            if (!verifyCode)\r\n                throw errors_1.errors.argumentNull('verifyCode');\r\n            let url = this.url('user/register');\r\n            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode, data });\r\n            if (r == null)\r\n                throw errors_1.errors.unexpectedNullResult();\r\n            service_1.Service.setStorageLoginInfo(r);\r\n            events_1.events.register.fire(this, r);\r\n            return r;\r\n        });\r\n    }\r\n    /**\r\n     * 获取用户个人信息\r\n     */\r\n    me() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let url = this.url('user/me');\r\n            let user = yield this.getByJson(url);\r\n            return user;\r\n        });\r\n    }\r\n    /**\r\n     * 获取用户\r\n     * @param userId 用户编号\r\n     */\r\n    getUser(userId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let url = this.url('user/item');\r\n            let user = yield this.getByJson(url, { userId });\r\n            return user;\r\n        });\r\n    }\r\n    /**\r\n     * 更新用户信息\r\n     * @param user 用户\r\n     */\r\n    update(user) {\r\n        let url = this.url('user/update');\r\n        return this.postByJson(url, { user });\r\n    }\r\n    /**\r\n     * 获取当前登录用户的角色\r\n     */\r\n    myRoles() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let url = this.url('user/getRoles');\r\n            let roles = yield this.getByJson(url);\r\n            return roles;\r\n        });\r\n    }\r\n}\r\nexports.PermissionService = PermissionService;\r\n// export interface User {\r\n//     id: string,\r\n//     user_name: string,\r\n//     mobile: string,\r\n//     email: string,\r\n//     password: string,\r\n//     sort_number: number,\r\n//     data?: any\r\n//     // roleIds: string[]\r\n// }\r\n\n\n//# sourceURL=webpack:///./out/services/permission-service.js?");

/***/ }),

/***/ "./out/services/service.js":
/*!*********************************!*\
  !*** ./out/services/service.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// import { settings } from '../settings';\r\nconst maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ \"maishu-chitu-service\");\r\nclass Service extends maishu_chitu_service_1.Service {\r\n    constructor() {\r\n        super();\r\n    }\r\n    static getStorageLoginInfo() {\r\n        let loginInfoSerialString = this.getCookie(Service.LoginInfoStorageName);\r\n        if (!loginInfoSerialString)\r\n            return null;\r\n        try {\r\n            let loginInfo = JSON.parse(loginInfoSerialString);\r\n            return loginInfo;\r\n        }\r\n        catch (e) {\r\n            console.error(e);\r\n            console.log(loginInfoSerialString);\r\n            return null;\r\n        }\r\n    }\r\n    static setStorageLoginInfo(value) {\r\n        if (value == null) {\r\n            this.removeCookie(Service.LoginInfoStorageName);\r\n            return;\r\n        }\r\n        this.setCookie(Service.LoginInfoStorageName, JSON.stringify(value), 1000);\r\n    }\r\n    static setCookie(name, value, days) {\r\n        var expires = \"\";\r\n        if (days) {\r\n            var date = new Date();\r\n            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));\r\n            expires = \"; expires=\" + date.toUTCString();\r\n        }\r\n        document.cookie = name + \"=\" + (value || \"\") + expires + \"; path=/\";\r\n    }\r\n    static getCookie(name) {\r\n        var nameEQ = name + \"=\";\r\n        var ca = document.cookie.split(';');\r\n        for (var i = 0; i < ca.length; i++) {\r\n            var c = ca[i];\r\n            while (c.charAt(0) == ' ')\r\n                c = c.substring(1, c.length);\r\n            if (c.indexOf(nameEQ) == 0)\r\n                return c.substring(nameEQ.length, c.length);\r\n        }\r\n        return null;\r\n    }\r\n    static removeCookie(name) {\r\n        document.cookie = name + '=; Max-Age=-99999999;';\r\n    }\r\n    ajax(url, options) {\r\n        const _super = Object.create(null, {\r\n            ajax: { get: () => super.ajax }\r\n        });\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            options = options || {};\r\n            options.headers = options.headers || {};\r\n            if (Service.loginInfo.value)\r\n                options.headers['token'] = Service.loginInfo.value.token;\r\n            if (Service.applicationId)\r\n                options.headers['application-id'] = typeof Service.applicationId == 'function' ? Service.applicationId() : Service.applicationId;\r\n            let data = yield _super.ajax.call(this, url, options);\r\n            if (data == null) {\r\n                return null;\r\n            }\r\n            let obj = data;\r\n            if (obj.code && obj.message) {\r\n                throw new Error(obj.message);\r\n            }\r\n            if (obj != null && obj['DataItems'] != null && obj['TotalRowCount'] != null) {\r\n                let d = {};\r\n                let keys = Object.keys(data);\r\n                for (let i = 0; i < keys.length; i++) {\r\n                    let key = keys[i];\r\n                    let k = key[0].toLowerCase() + key.substr(1);\r\n                    d[k] = obj[key];\r\n                }\r\n                data = d;\r\n            }\r\n            this.travelJSON(data);\r\n            return data;\r\n        });\r\n    }\r\n    /**\r\n     * 遍历 JSON 对象各个字段，将日期字符串转换为 Date 对象\r\n     * @param obj 要转换的 JSON 对象\r\n     */\r\n    travelJSON(obj) {\r\n        if (typeof obj === 'string' && this.isDateString(obj)) {\r\n            return new Date(obj);\r\n        }\r\n        else if (typeof obj === 'string') {\r\n            return obj;\r\n        }\r\n        var stack = new Array();\r\n        stack.push(obj);\r\n        while (stack.length > 0) {\r\n            var item = stack.pop();\r\n            for (var key in item) {\r\n                var value = item[key];\r\n                if (value == null)\r\n                    continue;\r\n                if (value instanceof Array) {\r\n                    for (var i = 0; i < value.length; i++) {\r\n                        stack.push(value[i]);\r\n                    }\r\n                    continue;\r\n                }\r\n                if (typeof value == 'object') {\r\n                    stack.push(value);\r\n                    continue;\r\n                }\r\n                if (typeof value == 'string' && this.isDateString(value)) {\r\n                    item[key] = new Date(value);\r\n                }\r\n            }\r\n        }\r\n        return obj;\r\n    }\r\n    isDateString(text) {\r\n        const datePattern = /\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}/;\r\n        const datePattern1 = /\\d{4}-\\d{2}-\\d{2}\\s+\\d{2}:\\d{2}/;\r\n        return text.match(datePattern) != null || text.match(datePattern1) != null;\r\n    }\r\n    getByJson(url, data) {\r\n        if (data && Object.getOwnPropertyNames(data).length > 0)\r\n            url = `${url}?${JSON.stringify(data)}`;\r\n        let headers = { \"content-type\": 'application/json' };\r\n        return this.ajax(url, { headers, method: 'get' });\r\n    }\r\n    putByJson(url, data) {\r\n        let headers = { \"content-type\": 'application/json' };\r\n        return this.ajax(url, { headers, data, method: 'put' });\r\n    }\r\n    postByJson(url, data) {\r\n        let headers = { \"content-type\": 'application/json' };\r\n        return this.ajax(url, { headers, data, method: 'post' });\r\n    }\r\n    deleteByJson(url, data) {\r\n        let headers = { \"content-type\": 'application/json' };\r\n        return this.ajax(url, { headers, data, method: 'delete' });\r\n    }\r\n    get(url, data) {\r\n        data = data || {};\r\n        let params = \"\";\r\n        for (let key in data) {\r\n            if (data[key] == null)\r\n                continue;\r\n            params = params ? `${params}&${key}=${data[key]}` : `${key}=${data[key]}`;\r\n        }\r\n        if (params) {\r\n            url = `${url}?${params}`;\r\n        }\r\n        return this.ajax(url, { method: 'get' });\r\n    }\r\n    put(url, data) {\r\n        let headers = { \"content-type\": 'application/x-www-form-urlencoded' };\r\n        return this.ajax(url, { headers, data, method: 'put' });\r\n    }\r\n    post(url, data) {\r\n        let headers = { \"content-type\": 'application/x-www-form-urlencoded' };\r\n        return this.ajax(url, { headers, data, method: 'post', });\r\n    }\r\n    delete(url, data) {\r\n        let headers = { \"content-type\": 'application/x-www-form-urlencoded' };\r\n        return this.ajax(url, { headers, data, method: 'delete' });\r\n    }\r\n}\r\nService.LoginInfoStorageName = 'app-login-info';\r\nService.loginInfo = new maishu_chitu_service_1.ValueStore(Service.getStorageLoginInfo());\r\nexports.Service = Service;\r\n\n\n//# sourceURL=webpack:///./out/services/service.js?");

/***/ }),

/***/ "./out/services/toolkit-service.js":
/*!*****************************************!*\
  !*** ./out/services/toolkit-service.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst service_1 = __webpack_require__(/*! ./service */ \"./out/services/service.js\");\r\nconst errors_1 = __webpack_require__(/*! ../errors */ \"./out/errors.js\");\r\nclass ToolkitService extends service_1.Service {\r\n    constructor() {\r\n        super();\r\n    }\r\n    url(path) {\r\n        if (!path)\r\n            throw new Error('Argument path cannt be null or empty.');\r\n        if (!ToolkitService.baseUrl)\r\n            throw errors_1.errors.serviceUrlCanntNull('toolServiceUrl');\r\n        return `${ToolkitService.baseUrl}/${path}`;\r\n    }\r\n    /** 获取系统自动生成不重复的唯一数字 */\r\n    uniqueNumber() {\r\n        let url = this.url('unique-number');\r\n        return this.getByJson(url);\r\n    }\r\n}\r\nexports.ToolkitService = ToolkitService;\r\n\n\n//# sourceURL=webpack:///./out/services/toolkit-service.js?");

/***/ }),

/***/ "./out/services/user-service.js":
/*!**************************************!*\
  !*** ./out/services/user-service.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst permission_service_1 = __webpack_require__(/*! ./permission-service */ \"./out/services/permission-service.js\");\r\n/** 与用户相关的服务，这个类已经废弃，请使用  PermissionService*/\r\nclass UserService extends permission_service_1.PermissionService {\r\n}\r\nexports.UserService = UserService;\r\n\n\n//# sourceURL=webpack:///./out/services/user-service.js?");

/***/ }),

/***/ "./out/settings.js":
/*!*************************!*\
  !*** ./out/settings.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst image_service_1 = __webpack_require__(/*! ./services/image-service */ \"./out/services/image-service.js\");\r\nconst permission_service_1 = __webpack_require__(/*! ./services/permission-service */ \"./out/services/permission-service.js\");\r\nconst toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ \"./out/services/toolkit-service.js\");\r\nconst service_1 = __webpack_require__(/*! ./services/service */ \"./out/services/service.js\");\r\nexports.settings = {\r\n    noImageText: '暂无图片',\r\n    get applicationId() {\r\n        return service_1.Service.applicationId;\r\n    },\r\n    set applicationId(value) {\r\n        service_1.Service.applicationId = value;\r\n    },\r\n    /** 获取图片服务的 URL 地址 */\r\n    get imageServiceUrl() {\r\n        return image_service_1.ImageService.baseUrl;\r\n    },\r\n    /** 设置图片服务的 URL 地址 */\r\n    set imageServiceUrl(value) {\r\n        image_service_1.ImageService.baseUrl = value;\r\n    },\r\n    /** 获取权限管理的 URL 地址 */\r\n    get permissionServiceUrl() {\r\n        return permission_service_1.PermissionService.baseUrl;\r\n    },\r\n    /** 设置权限管理的 URL 地址 */\r\n    set permissionServiceUrl(value) {\r\n        permission_service_1.PermissionService.baseUrl = value;\r\n    },\r\n    /** 获取工具类服务的 URL 地址 */\r\n    get toolServiceUrl() {\r\n        return toolkit_service_1.ToolkitService.baseUrl;\r\n    },\r\n    /** 设置工具类服务的 URL 地址 */\r\n    set toolServiceUrl(value) {\r\n        toolkit_service_1.ToolkitService.baseUrl = value;\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./out/settings.js?");

/***/ }),

/***/ "maishu-chitu-service":
/*!***************************************!*\
  !*** external "maishu-chitu-service" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__;\n\n//# sourceURL=webpack:///external_%22maishu-chitu-service%22?");

/***/ })

/******/ });
});