import { UserService } from './services/user-service';
import { LoginInfo } from './services/service';
export declare let events: {
    /** 成功调用 login 方法后引发 */
    login: import("./services/chitu-extends").Callback1<UserService, LoginInfo>;
    /** 成功调用 logout 方法后引发 */
    logout: import("./services/chitu-extends").Callback1<UserService, LoginInfo>;
    /** 成功调用 register 方法后引发 */
    register: import("./services/chitu-extends").Callback1<UserService, LoginInfo>;
};
