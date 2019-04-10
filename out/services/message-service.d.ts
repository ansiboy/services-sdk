import { ChatMessage, DataSourceSelectResult, UserPlatformMessage, LastestChatMessage } from "../models";
import { Service } from "./service";
export declare let messageSend: import("maishu-chitu-service").Callback1<null, ChatMessage>;
export declare class MessageService extends Service {
    protected url(path: string): string;
    /**
     * 获取指定用户的系统消息
     * @param userId 指定用户
     */
    getUserPlatformMessage(userId: string): Promise<UserPlatformMessage[]>;
    /** 获取聊天信息 */
    getChatMessages(oneUserId: string, otherUserId: string): Promise<ChatMessage[]>;
    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    getLastestChatMessages(userId: string): Promise<LastestChatMessage[]>;
    /**
     * 获取指定用户的最新的聊天消息
     * @param userId 指定用户的编号
     */
    getLastestChatMessageList(userId: string): Promise<DataSourceSelectResult<LastestChatMessage> | null>;
    getMessage(userId: string, id: string): Promise<ChatMessage | null>;
    removeMessage(userId: string, id: string): Promise<ChatMessage | null>;
    /**
     * 把最近的聊天信息标记为已读
     * @param lastestChatMessageId 最近聊天信息编号
     */
    markChatMessagesRead(lastestChatMessageId: string): Promise<void>;
    sendDistributorMessage(args: {
        distributorId: string;
        customerId: string;
        content: string;
    }): Promise<ChatMessage>;
    sendCustomerMessage(args: {
        distributorId: string;
        customerId: string;
        content: string;
        fromUserId?: string;
    }): Promise<ChatMessage>;
}
