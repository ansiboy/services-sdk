import { Callbacks } from 'maishu-chitu'
import { LoginInfo, UserService } from './services/user-service';
export let events = {
    /** 成功调用 login 方法后引发 */
    login: Callbacks<UserService, LoginInfo>(),
    /** 成功调用 logout 方法后引发 */
    logout: Callbacks<UserService, LoginInfo>()
} 