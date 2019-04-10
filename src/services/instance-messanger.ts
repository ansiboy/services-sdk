import { ValueStore, Callbacks } from "maishu-chitu-service";
import { MessageService } from "./message-service";
import io = require('socket.io')
import { ChatMessage, UserPlatformMessage, LastestChatMessage } from "../models";
import { settings } from "../settings";
import { errors } from "../errors";

type CustomEvent = 'chat-message' | 'platform-message' | 'lastest-chat-message'

export class InstanceMessanger {
    /** 系统消息 */
    userPlatformMessages = new ValueStore<UserPlatformMessage[]>([])

    /** 聊天消息 */
    lastestChatMessages = new ValueStore<LastestChatMessage[]>([])

    /** 聊天事件 */
    chatMessageReceived = Callbacks<null, ChatMessage>()

    private socket?: socket.io.Socket | null = null;

    start(userId: string, messageService: MessageService) {
        if (this.socket != null)
            throw errors.instanceMessangerStart()

        if (!settings.instanceMessangerUrl) throw errors.serviceUrlCanntNull('instanceMessangerUrl')
        let socket = this.socket = io(settings.instanceMessangerUrl, { query: { userId } })
        this.socket.on('connect', () => {
            console.log(socket.id); // 'G5p5...'
            console.log("连接成功");
            this.fetchLastestMessages(userId, messageService)
        });
        this.socket.on('connect_error', (error: any) => {
            console.error("连接错误");
        });
        this.socket.on('connect_timeout', (timeout: any) => {
            console.log("连接超时");
        });
        this.socket.on('error', (error: any) => {
            // ...
        });
        this.socket.on('disconnect', (reason: any) => {
            console.log("关闭连接");
        });
        this.socket.on('reconnect', (attemptNumber: any) => {
            console.log("重新连接");
            this.fetchLastestMessages(userId, messageService)
        });
        this.socket.on('reconnect_error', (error: any) => {
            // ...
        });
        this.socket.on('reconnect_failed', () => {
            // ...
        });
        this.socket.on('ping', () => {
            //console.log("向服务器端发送数据包");
        });
        this.socket.on('pong', (latency: any) => {
            //console.log("接收服务器数据包");
        });
        this.socket.on<CustomEvent>('lastest-chat-message', (text: string) => {
            let msg: LastestChatMessage = JSON.parse(text)
            if (msg.to_user_id == userId) {
                let msgs = this.lastestChatMessages.value
                if (msgs == null) throw errors.unexpectedNullResult()
                msgs.forEach(o => { o.update_date_time = o.update_date_time || o.create_date_time })
                msgs = msgs.filter(o => !(o.from_user_id == msg.from_user_id && o.to_user_id == msg.to_user_id))
                    .sort((a, b) => a.update_date_time > b.update_date_time ? 1 : -1)

                msgs.unshift(msg)
                this.lastestChatMessages.value = msgs
            }
        })
        this.socket.on<CustomEvent>('platform-message', (text: string) => {
            let msg: UserPlatformMessage = JSON.parse(text)
            let msgs = this.userPlatformMessages.value
            if (msgs == null) throw errors.unexpectedNullResult()
            msgs.unshift(msg)
            this.userPlatformMessages.value = msgs
            console.log("platform-message:" + text)
        })
        this.socket.on<CustomEvent>('chat-message', (text: string) => {
            let msg: ChatMessage = JSON.parse(text)
            this.chatMessageReceived.fire(null, msg)
        })
    }

    stop() {
        if (this.socket == null)
            return

        this.socket.disconnect()
        this.socket = null
    }

    /** 获取最新消息 */
    private async fetchLastestMessages(userId: string, messageService: MessageService) {
        let result = await Promise.all([
            messageService.getUserPlatformMessage(userId),
            messageService.getLastestChatMessages(userId),
        ])

        this.userPlatformMessages.value = result[0]
        this.lastestChatMessages.value = result[1]
    }


}
