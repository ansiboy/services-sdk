import { Message, DataSourceSelectResult } from "../models";
import { Service } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";

export let messageSend = chitu.Callbacks<null, Message>()

export class MessageService extends Service {
    private url(path: string) {
        if (!path) throw errors.argumentNull("path")
        if (!settings.messageServiceUrl) throw errors.serviceUrlCanntNull('messageServiceUrl')

        return `${settings.messageServiceUrl}/${path}`;
    }

    /**
     * 获取指定用户的系统消息
     * @param userId 指定用户
     */
    async getSystemMessages(userId: string): Promise<Message[]> {
        let url = this.url('user_message/system')
        let r = await this.get<DataSourceSelectResult<Message>>(url, { userId })
        if (r == null) throw errors.unexpectedNullResult()

        return r.dataItems
    }

    /** 获取聊天信息 */
    async getChatMessages(oneUserId: string, otherUserId: string): Promise<Message[]> {
        let url = this.url('user_message/chat')
        let r = await this.get<DataSourceSelectResult<Message>>(url, { oneUserId, otherUserId })
        if (r == null) throw errors.unexpectedNullResult()

        return r.dataItems
    }

    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    async getLastestChatMessages(userId: string): Promise<Message[]> {
        let url = this.url('user_message/received_question')
        let r = await this.get<DataSourceSelectResult<Message>>(url, { userId })
        if (r == null) throw errors.unexpectedNullResult()
        return r.dataItems
    }

    async getMessage(userId: string, id: string) {
        let url = this.url('user_message/item')
        let r = await this.get<Message>(url, { userId, id })
        return r
    }

    async removeMessage(userId: string, id: string) {
        let url = this.url('user_message/remove')
        let r = await this.get<Message>(url, { userId, id })
        return r
    }

    /**
     * 发送聊天消息
     * @param content 聊天消息的内容
     * @param toUserId 目标用户
     * @param fromUserId 源用户
     */
    async sendChatMessage(content: string, toUserId: string, fromUserId: string): Promise<Message> {
        let url = this.url('user_message/send')
        let msg: Partial<Message> = { content, to_user_id: toUserId, from_user_id: fromUserId }
        let r = await this.post<Partial<Message>>(url, { title: '', content, toUserId, fromUserId })
        Object.assign(msg, r)
        messageSend.fire(null, msg as Message)
        return msg as Message
    }

    /**
     * 把最近的聊天信息标记为已读
     * @param lastestChatMessageId 最近聊天信息编号
     */
    async markChatMessagesRead(lastestChatMessageId: string) {
        let url = this.url('user_message/markChatMessagesRead')
        await this.post(url, { id: lastestChatMessageId })
    }
}