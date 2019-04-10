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
const maishu_chitu_service_1 = require("maishu-chitu-service");
const io = require("socket.io");
const settings_1 = require("../settings");
const errors_1 = require("../errors");
class InstanceMessanger {
    constructor() {
        /** 系统消息 */
        this.userPlatformMessages = new maishu_chitu_service_1.ValueStore([]);
        /** 聊天消息 */
        this.lastestChatMessages = new maishu_chitu_service_1.ValueStore([]);
        /** 聊天事件 */
        this.chatMessageReceived = maishu_chitu_service_1.Callbacks();
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
