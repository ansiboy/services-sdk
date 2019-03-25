interface Settings {
    /** 图片服务的 URL 地址 */
    imageServiceUrl?: string,
    /** 权限管理的 URL 地址 */
    permissionServiceUrl?: string,
    toolServiceUrl?: string,
    /** 空白图片时显示的文字 */
    noImageText: string,
    /** ApplicationId */
    applicationId?: string | (() => string),
}
export let settings: Settings = {
    noImageText: '暂无图片'
}