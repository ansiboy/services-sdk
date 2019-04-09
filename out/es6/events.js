"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chitu_extends_1 = require("./services/chitu-extends");
exports.events = {
    /** 成功调用 login 方法后引发 */
    login: chitu_extends_1.Callbacks(),
    /** 成功调用 logout 方法后引发 */
    logout: chitu_extends_1.Callbacks(),
    /** 成功调用 register 方法后引发 */
    register: chitu_extends_1.Callbacks(),
};
