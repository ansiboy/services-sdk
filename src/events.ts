import { Callbacks } from 'maishu-chitu-service'
import { UserService } from './services/user-service';
import { LoginInfo } from './services/service';
export let events = {
    /** 成功调用 login 方法后引发 */
    login: Callbacks<UserService, LoginInfo>(),
    /** 成功调用 logout 方法后引发 */
    logout: Callbacks<UserService, LoginInfo>(),
    /** 成功调用 register 方法后引发 */
    register: Callbacks<UserService, LoginInfo>(),
} 