"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_service_1 = require("./services/image-service");
const permission_service_1 = require("./services/permission-service");
const toolkit_service_1 = require("./services/toolkit-service");
exports.settings = {
    noImageText: '暂无图片',
    // get applicationId() {
    //     return Service.applicationId
    // },
    // set applicationId(value) {
    //     Service.applicationId = value
    // },
    /** 获取图片服务的 URL 地址 */
    get imageServiceUrl() {
        return image_service_1.ImageService.baseUrl;
    },
    /** 设置图片服务的 URL 地址 */
    set imageServiceUrl(value) {
        image_service_1.ImageService.baseUrl = value;
    },
    /** 获取权限管理的 URL 地址 */
    get permissionServiceUrl() {
        return permission_service_1.PermissionService.baseUrl;
    },
    /** 设置权限管理的 URL 地址 */
    set permissionServiceUrl(value) {
        permission_service_1.PermissionService.baseUrl = value;
    },
    /** 获取工具类服务的 URL 地址 */
    get toolServiceUrl() {
        return toolkit_service_1.ToolkitService.baseUrl;
    },
    /** 设置工具类服务的 URL 地址 */
    set toolServiceUrl(value) {
        toolkit_service_1.ToolkitService.baseUrl = value;
    },
};
