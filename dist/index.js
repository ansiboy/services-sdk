
/*
 * SERVICE SDK v1.1.13
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
    unexpectedNullValue() {
        let msg = `Null value is unexpected.`;
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_1 = require("maishu-chitu");
exports.events = {
    /** 成功调用 login 方法后引发 */
    login: maishu_chitu_1.Callbacks(),
    /** 成功调用 logout 方法后引发 */
    logout: maishu_chitu_1.Callbacks(),
    /** 成功调用 register 方法后引发 */
    register: maishu_chitu_1.Callbacks(),
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
var toolkit_service_1 = require("./services/toolkit-service");
exports.ToolkitService = toolkit_service_1.ToolkitService;
var permission_service_1 = require("./services/permission-service");
exports.PermissionService = permission_service_1.PermissionService;
var instance_messanger_1 = require("./services/instance-messanger");
exports.InstanceMessanger = instance_messanger_1.InstanceMessanger;
var message_service_1 = require("./services/message-service");
exports.MessageService = message_service_1.MessageService;
var settings_1 = require("./settings");
exports.settings = settings_1.settings;
var events_1 = require("./events");
exports.events = events_1.events;

},{"./events":2,"./services/image-service":4,"./services/instance-messanger":5,"./services/message-service":6,"./services/permission-service":7,"./services/service":8,"./services/toolkit-service":9,"./services/user-service":10,"./settings":11}],4:[function(require,module,exports){
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

},{"../errors":1,"../settings":11,"./service":8,"maishu-ui-toolkit":"maishu-ui-toolkit"}],5:[function(require,module,exports){
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
const maishu_chitu_1 = require("maishu-chitu");
const io = require("socket.io");
const settings_1 = require("../settings");
const errors_1 = require("../errors");
class InstanceMessanger {
    constructor() {
        /** 系统消息 */
        this.userPlatformMessages = new maishu_chitu_1.ValueStore([]);
        /** 聊天消息 */
        this.lastestChatMessages = new maishu_chitu_1.ValueStore([]);
        /** 聊天事件 */
        this.chatMessageReceived = maishu_chitu_1.Callbacks();
        this.socket = null;
    }
    start(userId, messageService) {
        if (this.socket != null)
            throw errors_1.errors.instanceMessangerStart();
        if (!settings_1.settings.instanceMessangerUrl)
            throw errors_1.errors.serviceUrlCanntNull('instanceMessangerUrl');
        let socket = this.socket = io(settings_1.settings.instanceMessangerUrl, { query: { userId } });
        this.socket.on('connect', () => {
            console.log(socket.id); // 'G5p5...'
            console.log("连接成功");
            this.fetchLastestMessages(userId, messageService);
        });
        this.socket.on('connect_error', (error) => {
            console.error("连接错误");
        });
        this.socket.on('connect_timeout', (timeout) => {
            console.log("连接超时");
        });
        this.socket.on('error', (error) => {
            // ...
        });
        this.socket.on('disconnect', (reason) => {
            console.log("关闭连接");
        });
        this.socket.on('reconnect', (attemptNumber) => {
            console.log("重新连接");
            this.fetchLastestMessages(userId, messageService);
        });
        this.socket.on('reconnect_error', (error) => {
            // ...
        });
        this.socket.on('reconnect_failed', () => {
            // ...
        });
        this.socket.on('ping', () => {
            //console.log("向服务器端发送数据包");
        });
        this.socket.on('pong', (latency) => {
            //console.log("接收服务器数据包");
        });
        this.socket.on('lastest-chat-message', (text) => {
            let msg = JSON.parse(text);
            if (msg.to_user_id == userId) {
                let msgs = this.lastestChatMessages.value;
                if (msgs == null)
                    throw errors_1.errors.unexpectedNullResult();
                msgs.forEach(o => { o.update_date_time = o.update_date_time || o.create_date_time; });
                msgs = msgs.filter(o => !(o.from_user_id == msg.from_user_id && o.to_user_id == msg.to_user_id))
                    .sort((a, b) => a.update_date_time > b.update_date_time ? 1 : -1);
                msgs.unshift(msg);
                this.lastestChatMessages.value = msgs;
            }
        });
        this.socket.on('platform-message', (text) => {
            let msg = JSON.parse(text);
            let msgs = this.userPlatformMessages.value;
            if (msgs == null)
                throw errors_1.errors.unexpectedNullResult();
            msgs.unshift(msg);
            this.userPlatformMessages.value = msgs;
            console.log("platform-message:" + text);
        });
        this.socket.on('chat-message', (text) => {
            let msg = JSON.parse(text);
            this.chatMessageReceived.fire(null, msg);
        });
    }
    stop() {
        if (this.socket == null)
            return;
        this.socket.disconnect();
        this.socket = null;
    }
    /** 获取最新消息 */
    fetchLastestMessages(userId, messageService) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield Promise.all([
                messageService.getUserPlatformMessage(userId),
                messageService.getLastestChatMessages(userId),
            ]);
            this.userPlatformMessages.value = result[0];
            this.lastestChatMessages.value = result[1];
        });
    }
}
exports.InstanceMessanger = InstanceMessanger;

},{"../errors":1,"../settings":11,"maishu-chitu":"maishu-chitu","socket.io":"socket.io"}],6:[function(require,module,exports){
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
exports.messageSend = chitu.Callbacks();
class MessageService extends service_1.Service {
    url(path) {
        if (!path)
            throw errors_1.errors.argumentNull("path");
        if (!settings_1.settings.messageServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('messageServiceUrl');
        return `${settings_1.settings.messageServiceUrl}/${path}`;
    }
    /**
     * 获取指定用户的系统消息
     * @param userId 指定用户
     */
    getUserPlatformMessage(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user_message/system');
            let r = yield this.get(url, { userId });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            return r.dataItems;
        });
    }
    /** 获取聊天信息 */
    getChatMessages(oneUserId, otherUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user_message/chat');
            let r = yield this.get(url, { oneUserId, otherUserId });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            return r.dataItems;
        });
    }
    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    getLastestChatMessages(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let r = yield this.getLastestChatMessageList(userId);
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            return r.dataItems;
        });
    }
    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    getLastestChatMessageList(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('lastest_chat_message/list');
            let r = yield this.get(url, { userId });
            return r;
        });
    }
    getMessage(userId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user_message/item');
            let r = yield this.get(url, { userId, id });
            return r;
        });
    }
    removeMessage(userId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user_message/remove');
            let r = yield this.get(url, { userId, id });
            return r;
        });
    }
    // /**
    //  * 发送聊天消息
    //  * @param content 聊天消息的内容
    //  * @param toUserId 目标用户
    //  * @param fromUserId 源用户
    //  */
    // async sendChatMessage(content: string, toUserId: string, fromUserId: string): Promise<ChatMessage> {
    //     let url = this.url('user_message/send')
    //     let msg: Partial<ChatMessage> = { content, to_user_id: toUserId, from_user_id: fromUserId }
    //     let r = await this.post<Partial<ChatMessage>>(url, { title: '', content, toUserId, fromUserId })
    //     Object.assign(msg, r)
    //     messageSend.fire(null, msg as ChatMessage)
    //     return msg as ChatMessage
    // }
    /**
     * 把最近的聊天信息标记为已读
     * @param lastestChatMessageId 最近聊天信息编号
     */
    markChatMessagesRead(lastestChatMessageId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user_message/markChatMessagesRead');
            yield this.post(url, { id: lastestChatMessageId });
        });
    }
    sendDistributorMessage(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args)
                throw errors_1.errors.argumentNull('args');
            let url = this.url('sendDistributorMessage');
            let r = yield this.post(url, args);
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            r.content = args.content;
            return r;
        });
    }
    sendCustomerMessage(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args)
                throw errors_1.errors.argumentNull('args');
            let url = this.url('sendCustomerMessage');
            let r = yield this.post(url, args);
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            r.content = args.content;
            return r;
        });
    }
}
exports.MessageService = MessageService;

},{"../errors":1,"../settings":11,"./service":8}],7:[function(require,module,exports){
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
class PermissionService extends service_1.Service {
    constructor() {
        super();
        this.error.add((sender, err) => {
            ui.alert({ title: '错误', message: err.message });
        });
    }
    url(path) {
        if (!settings_1.settings.permissionServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${settings_1.settings.permissionServiceUrl}/${path}`;
    }
    //=============================================================
    // 资源相关
    /** 添加资源 */
    addResource(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('resource/add');
            let result = yield this.postByJson(url, { item });
            Object.assign(item, result);
            return result;
        });
    }
    /** 更新资源 */
    updateResource(item) {
        return __awaiter(this, void 0, void 0, function* () {
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
            // for (let i = 0; i < result.dataItems.length; i++) {
            //     result.dataItems[i].sort_number = (args.startRowIndex || 0) + i + 1
            // }
            return result;
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

},{"../errors":1,"../settings":11,"./service":8}],8:[function(require,module,exports){
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
const settings_1 = require("../settings");
class Service extends chitu.Service {
    constructor() {
        super();
    }
    static getStorageLoginInfo() {
        let loginInfoSerialString = localStorage.getItem(Service.LoginInfoStorageName);
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
            localStorage.removeItem(Service.LoginInfoStorageName);
            return;
        }
        localStorage.setItem(Service.LoginInfoStorageName, JSON.stringify(value));
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
Service.loginInfo = new chitu.ValueStore(Service.getStorageLoginInfo());
exports.Service = Service;

},{"../settings":11,"maishu-chitu":"maishu-chitu"}],9:[function(require,module,exports){
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

},{"../errors":1,"../settings":11,"./service":8}],10:[function(require,module,exports){
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
/** 与用户相关的服务 */
class UserService extends service_1.Service {
    // static currentUser = new ValueStore<User>()
    url(path) {
        if (!settings_1.settings.permissionServiceUrl)
            throw errors_1.errors.serviceUrlCanntNull('permissionService');
        return `${settings_1.settings.permissionServiceUrl}/${path}`;
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
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */
    sendResetVerifyCode(mobile) {
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
        let url = this.url('user/resetMobile');
        return this.postByJson(url, { mobile, smsId, verifyCode });
    }
    /**
     * 退出登录
     */
    logout() {
        if (UserService.loginInfo.value == null)
            return;
        //TODO: 将服务端 token 设置为失效
        events_1.events.logout.fire(this, UserService.loginInfo.value);
        service_1.Service.setStorageLoginInfo(null);
        UserService.loginInfo.value = null;
    }
    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url('user/login');
            let r = yield this.postByJson(url, { username, password });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            UserService.loginInfo.value = r;
            UserService.setStorageLoginInfo(r);
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
            let url = this.url('user/register');
            let r = yield this.postByJson(url, { mobile, password, smsId, verifyCode, data });
            if (r == null)
                throw errors_1.errors.unexpectedNullResult();
            UserService.setStorageLoginInfo(r);
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
exports.UserService = UserService;

},{"../errors":1,"../events":2,"../settings":11,"./service":8}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = {
    noImageText: '暂无图片'
};

},{}]},{},[3])(3)
});
