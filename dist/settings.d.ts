interface Settings {
    /** 图片服务的 URL 地址 */
    imageServiceUrl?: string;
    /** 权限管理的 URL 地址 */
    permissionServiceUrl?: string;
    toolServiceUrl?: string;
    /** 消息服务地址 */
    messageServiceUrl?: string;
    /** 即时消息 URL 地址 */
    instanceMessangerUrl?: string;
    /** 空白图片时显示的文字 */
    noImageText: string;
    /** ApplicationId */
    applicationId?: string | (() => string);
}
export declare let settings: Settings;
export {};
