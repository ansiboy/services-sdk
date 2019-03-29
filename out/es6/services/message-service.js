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
