import { ValueStore } from "maishu-chitu";
import { MessageService } from "./message-service";
import { ChatMessage, UserPlatformMessage, LastestChatMessage } from "../models";
export declare class InstanceMessanger {
    /** 系统消息 */
    userPlatformMessages: ValueStore<UserPlatformMessage[]>;
    /** 聊天消息 */
    lastestChatMessages: ValueStore<LastestChatMessage[]>;
    /** 聊天事件 */
    chatMessageReceived: chitu.Callback1<null, ChatMessage>;
    private socket?;
    start(userId: string, messageService: MessageService): void;
    stop(): void;
    /** 获取最新消息 */
    private fetchLastestMessages;
}
