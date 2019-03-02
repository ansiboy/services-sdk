"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_1 = require("maishu-chitu");
exports.events = {
    /** 成功调用 login 方法后引发 */
    login: maishu_chitu_1.Callbacks(),
    /** 成功调用 logout 方法后引发 */
    logout: maishu_chitu_1.Callbacks()
};
