import { LoginInfo } from './services/service';
import { PermissionService } from './services/permission-service';
export declare let events: {
    /** 成功调用 login 方法后引发 */
    login: import("maishu-chitu-service").Callback1<PermissionService, LoginInfo>;
    /** 成功调用 logout 方法后引发 */
    logout: import("maishu-chitu-service").Callback1<PermissionService, LoginInfo>;
    /** 成功调用 register 方法后引发 */
    register: import("maishu-chitu-service").Callback1<PermissionService, LoginInfo>;
};
