import { ChatMessage, DataSourceSelectResult, UserPlatformMessage, LastestChatMessage } from "../models";
import { Service } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";
import { Callbacks } from "maishu-chitu-service";

export let messageSend = Callbacks<null, ChatMessage>()

export class MessageService extends Service {
    protected url(path: string) {
        if (!path) throw errors.argumentNull("path")
        if (!settings.messageServiceUrl) throw errors.serviceUrlCanntNull('messageServiceUrl')

        return `${settings.messageServiceUrl}/${path}`;
    }

    /**
     * 获取指定用户的系统消息
     * @param userId 指定用户
     */
    async getUserPlatformMessage(userId: string): Promise<UserPlatformMessage[]> {
        let url = this.url('user_message/system')
        let r = await this.get<DataSourceSelectResult<UserPlatformMessage>>(url, { userId })
        if (r == null) throw errors.unexpectedNullResult()

        return r.dataItems
    }

    /** 获取聊天信息 */
    async getChatMessages(oneUserId: string, otherUserId: string): Promise<ChatMessage[]> {
        let url = this.url('user_message/chat')
        let r = await this.get<DataSourceSelectResult<ChatMessage>>(url, { oneUserId, otherUserId })
        if (r == null) throw errors.unexpectedNullResult()

        return r.dataItems
    }

    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    async getLastestChatMessages(userId: string): Promise<LastestChatMessage[]> {
        let r = await this.getLastestChatMessageList(userId)
        if (r == null) throw errors.unexpectedNullResult()
        return r.dataItems
    }

    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    async getLastestChatMessageList(userId: string) {
        let url = this.url('lastest_chat_message/list')
        let r = await this.get<DataSourceSelectResult<LastestChatMessage>>(url, { userId })
        return r
    }

    async removeLastestChatMessage(id: string) {
        let url = this.url('lastest_chat_message/delete')
        await this.delete(url, { id })
    }

    async getMessage(userId: string, id: string) {
        let url = this.url('user_message/item')
        let r = await this.get<ChatMessage>(url, { userId, id })
        return r
    }

    async removeMessage(userId: string, id: string) {
        let url = this.url('user_message/remove')
        let r = await this.get<ChatMessage>(url, { userId, id })
        return r
    }

    /**
     * 把最近的聊天信息标记为已读
     * @param lastestChatMessageId 最近聊天信息编号
     */
    async markChatMessagesRead(lastestChatMessageId: string) {
        let url = this.url('user_message/markChatMessagesRead')
        await this.post(url, { id: lastestChatMessageId })
    }

    async sendDistributorMessage(args: { distributorId: string, customerId: string, content: string }) {
        if (!args) throw errors.argumentNull('args')

        let url = this.url('sendDistributorMessage')
        let r = await this.post<ChatMessage>(url, args)
        if (r == null) throw errors.unexpectedNullResult()

        r.content = args.content
        return r
    }

    async sendCustomerMessage(args: { distributorId: string, customerId: string, content: string, fromUserId?: string }) {
        if (!args) throw errors.argumentNull('args')

        let url = this.url('sendCustomerMessage')
        let r = await this.post<ChatMessage>(url, args)
        if (r == null) throw errors.unexpectedNullResult()
        r.content = args.content
        return r
    }
}