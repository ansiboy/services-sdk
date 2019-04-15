import { ImageService } from "./services/image-service";
import { PermissionService } from "./services/permission-service";
import { ToolkitService } from "./services/toolkit-service";

interface Settings {
    /** 图片服务的 URL 地址 */
    imageServiceUrl?: string,
    /** 权限管理的 URL 地址 */
    permissionServiceUrl?: string,
    /** 工具类服务 URL 地址 */
    toolServiceUrl?: string,
    /** 空白图片时显示的文字 */
    noImageText: string,
    /** ApplicationId */
    applicationId?: string | (() => string),
}
export let settings: Settings = {
    noImageText: '暂无图片',

    /** 获取图片服务的 URL 地址 */
    get imageServiceUrl() {
        return ImageService.baseUrl
    },
    /** 设置图片服务的 URL 地址 */
    set imageServiceUrl(value: string) {
        ImageService.baseUrl = value
    },

    /** 获取权限管理的 URL 地址 */
    get permissionServiceUrl() {
        return PermissionService.baseUrl
    },
    /** 设置权限管理的 URL 地址 */
    set permissionServiceUrl(value: string) {
        PermissionService.baseUrl = value
    },

    /** 获取工具类服务的 URL 地址 */
    get toolServiceUrl() {
        return ToolkitService.baseUrl;
    },
    /** 设置工具类服务的 URL 地址 */
    set toolServiceUrl(value: string) {
        ToolkitService.baseUrl = value;
    },

}
