"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var maishu_chitu_service_1 = require("maishu-chitu-service");

exports.events = {
  /** 成功调用 login 方法后引发 */
  login: maishu_chitu_service_1.Callbacks(),

  /** 成功调用 logout 方法后引发 */
  logout: maishu_chitu_service_1.Callbacks(),

  /** 成功调用 register 方法后引发 */
  register: maishu_chitu_service_1.Callbacks()
};
//# sourceMappingURL=events.js.map
