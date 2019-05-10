"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var service_1 = require("./service");

var errors_1 = require("../errors");

var events_1 = require("../events");

var PermissionService =
/*#__PURE__*/
function (_service_1$Service) {
  _inherits(PermissionService, _service_1$Service);

  function PermissionService() {
    _classCallCheck(this, PermissionService);

    return _possibleConstructorReturn(this, _getPrototypeOf(PermissionService).call(this));
  }

  _createClass(PermissionService, [{
    key: "url",
    value: function url(path) {
      if (!PermissionService.baseUrl) throw errors_1.errors.serviceUrlCanntNull('permissionService');
      return "".concat(PermissionService.baseUrl, "/").concat(path);
    } //=============================================================
    // 资源相关

    /** 添加资源 */

  }, {
    key: "addResource",
    value: function addResource(item) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (item) {
                  _context.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('item');

              case 2:
                url = this.url('resource/add');
                _context.next = 5;
                return this.postByJson(url, {
                  item: item
                });

              case 5:
                result = _context.sent;
                Object.assign(item, result);
                return _context.abrupt("return", result);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
    /** 更新资源 */

  }, {
    key: "updateResource",
    value: function updateResource(item) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (item) {
                  _context2.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('item');

              case 2:
                url = this.url('resource/update');
                _context2.next = 5;
                return this.postByJson(url, {
                  item: item
                });

              case 5:
                result = _context2.sent;
                Object.assign(item, result);
                return _context2.abrupt("return", result);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /** 获取菜单类型的资源 */

  }, {
    key: "getMenuResources",
    value: function getMenuResources() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var menuType, args;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                menuType = 'menu';
                args = {
                  filter: "(type = \"".concat(menuType, "\")")
                };
                return _context3.abrupt("return", this.getResourceList(args));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
    /** 获取资源列表 */

  }, {
    key: "getResourceList",
    value: function getResourceList(args) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var url, result, i;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (args) {
                  _context4.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('args');

              case 2:
                url = this.url('resource/list');
                if (!args.sortExpression) args.sortExpression = 'sort_number asc';
                _context4.next = 6;
                return this.getByJson(url, {
                  args: args
                });

              case 6:
                result = _context4.sent;

                if (!(result == null)) {
                  _context4.next = 9;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 9:
                for (i = 0; i < result.dataItems.length; i++) {
                  result.dataItems[i].data = result.dataItems[i].data || {};
                }

                return _context4.abrupt("return", result);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
    /**
     * 删除指定的资源
     * @param id 要删除的资源编号
     */

  }, {
    key: "deleteResource",
    value: function deleteResource(id) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var url;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (id) {
                  _context5.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('id');

              case 2:
                url = this.url('resource/remove');
                return _context5.abrupt("return", this.postByJson(url, {
                  id: id
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
    /**
     * 获取指定资源的子按钮
     * @param id 资源编号
     */

  }, {
    key: "getResourceChildCommands",
    value: function getResourceChildCommands(id) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var buttonType, filter, url, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (id) {
                  _context6.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('id');

              case 2:
                buttonType = 'button';
                filter = "parent_id = '".concat(id, "' and type = '").concat(buttonType, "'");
                url = "resource/list";
                _context6.next = 7;
                return this.getByJson(url, {
                  filter: filter
                });

              case 7:
                result = _context6.sent;
                return _context6.abrupt("return", result);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    } //=============================================================
    // 角色相关

    /**
     * 获取角色列表
     */

  }, {
    key: "getRoles",
    value: function getRoles() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = this.url('role/list');
                _context7.next = 3;
                return this.getByJson(url);

              case 3:
                r = _context7.sent;
                return _context7.abrupt("return", r || []);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
    /**
     * 获取单个角色
     * @param id 要获取的角色编号
     */

  }, {
    key: "getRole",
    value: function getRole(id) {
      if (!id) throw errors_1.errors.argumentNull('id');
      var url = this.url('role/get');
      return this.getByJson(url, {
        id: id
      });
    }
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */

  }, {
    key: "setRoleResource",
    value: function setRoleResource(roleId, resourceIds) {
      if (!roleId) throw errors_1.errors.argumentNull('roleId');
      if (!resourceIds) throw errors_1.errors.argumentNull('resourceIds');
      var url = this.url('role/setResources');
      return this.postByJson(url, {
        roleId: roleId,
        resourceIds: resourceIds
      });
    }
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */

  }, {
    key: "getRoleResourceIds",
    value: function getRoleResourceIds(roleId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (roleId) {
                  _context8.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('roleId');

              case 2:
                url = this.url('role/resourceIds');
                _context8.next = 5;
                return this.getByJson(url, {
                  roleId: roleId
                });

              case 5:
                r = _context8.sent;
                return _context8.abrupt("return", r || []);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
    /** 设置用户角色 */

  }, {
    key: "setUserRoles",
    value: function setUserRoles(userId, roleIds) {
      if (!userId) throw errors_1.errors.argumentNull('userId');
      if (!roleIds) throw errors_1.errors.argumentNull('roleIds');
      var url = this.url('user/setRoles');
      return this.postByJson(url, {
        userId: userId,
        roleIds: roleIds
      });
    } //================================================================
    // 用户相关

    /** 获取用户列表 */

  }, {
    key: "getUserList",
    value: function getUserList(args) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                url = this.url('user/list');
                _context9.next = 3;
                return this.getByJson(url, {
                  args: args
                });

              case 3:
                result = _context9.sent;

                if (!(result == null)) {
                  _context9.next = 6;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 6:
                return _context9.abrupt("return", result);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
    /** 通过手机获取用户 */

  }, {
    key: "getUserByMobile",
    value: function getUserByMobile(mobile) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        var args, r;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (mobile) {
                  _context10.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('mobile');

              case 2:
                args = {};
                args.filter = "mobile = '".concat(mobile, "'");
                _context10.next = 6;
                return this.getUserList(args);

              case 6:
                r = _context10.sent;
                return _context10.abrupt("return", r.dataItems[0]);

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
    /**
     * 移除当前应用的用户
     * @param userId 要移除的用户编号
     */

  }, {
    key: "removeUser",
    value: function removeUser(userId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11() {
        var url;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (userId) {
                  _context11.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('userId');

              case 2:
                url = this.url('application/removeUser');
                return _context11.abrupt("return", this.deleteByJson(url, {
                  userId: userId
                }));

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
    /**
     * 获取当前应用的所有用户
     * @param args 数据源选择参数
     */

  }, {
    key: "getApplicatinUsers",
    value: function getApplicatinUsers(args) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(args == null)) {
                  _context12.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('args');

              case 2:
                url = this.url('application/users');
                _context12.next = 5;
                return this.getByJson(url, {
                  args: args
                });

              case 5:
                result = _context12.sent;

                if (!(result == null)) {
                  _context12.next = 8;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 8:
                return _context12.abrupt("return", result);

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */

  }, {
    key: "sendRegisterVerifyCode",
    value: function sendRegisterVerifyCode(mobile) {
      var url = this.url('sms/sendVerifyCode');
      return this.postByJson(url, {
        mobile: mobile,
        type: 'register'
      });
    }
    /**
     * 校验验证码
     * @param smsId 验证码信息的 ID 号
     * @param verifyCode 验证码
     */

  }, {
    key: "checkVerifyCode",
    value: function checkVerifyCode(smsId, verifyCode) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (smsId) {
                  _context13.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('smsId');

              case 2:
                if (verifyCode) {
                  _context13.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('verifycode');

              case 4:
                url = this.url('sms/checkVerifyCode');
                _context13.next = 7;
                return this.postByJson(url, {
                  smsId: smsId,
                  verifyCode: verifyCode
                });

              case 7:
                r = _context13.sent;
                return _context13.abrupt("return", r);

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
    /**
     * 发送重置密码操作验证码
     * @param mobile 接收验证码的手机号
     */

  }, {
    key: "sendResetVerifyCode",
    value: function sendResetVerifyCode(mobile) {
      if (!mobile) throw errors_1.errors.argumentNull('mobile');
      var url = this.url('sms/sendVerifyCode');
      return this.postByJson(url, {
        mobile: mobile,
        type: 'resetPassword'
      });
    }
    /**
     * 重置密码
     * @param mobile 手机号
     * @param password 新密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */

  }, {
    key: "resetPassword",
    value: function resetPassword(mobile, password, smsId, verifyCode) {
      if (!mobile) throw errors_1.errors.argumentNull('mobile');
      if (!password) throw errors_1.errors.argumentNull('password');
      if (!smsId) throw errors_1.errors.argumentNull('smsId');
      if (!verifyCode) throw errors_1.errors.argumentNull('verifyCode');
      var url = this.url('user/resetPassword');
      return this.postByJson(url, {
        mobile: mobile,
        password: password,
        smsId: smsId,
        verifyCode: verifyCode
      });
    }
    /**
     * 重置手机号码
     * @param mobile 需要重置的新手机号
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */

  }, {
    key: "resetMobile",
    value: function resetMobile(mobile, smsId, verifyCode) {
      if (!mobile) throw errors_1.errors.argumentNull('mobile');
      if (!smsId) throw errors_1.errors.argumentNull('smsId');
      if (!verifyCode) throw errors_1.errors.argumentNull('verifyCode');
      var url = this.url('user/resetMobile');
      return this.postByJson(url, {
        mobile: mobile,
        smsId: smsId,
        verifyCode: verifyCode
      });
    }
    /**
     * 退出登录
     */

  }, {
    key: "logout",
    value: function logout() {
      if (service_1.Service.loginInfo.value == null) return; //TODO: 将服务端 token 设置为失效

      events_1.events.logout.fire(this, service_1.Service.loginInfo.value);
      service_1.Service.setStorageLoginInfo(null);
      service_1.Service.loginInfo.value = null;
    }
    /**
     * 登录
     * @param username 用户名
     * @param password 密码
     */

  }, {
    key: "login",
    value: function login(username, password) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (username) {
                  _context14.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('username');

              case 2:
                if (password) {
                  _context14.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('password');

              case 4:
                url = this.url('user/login');
                _context14.next = 7;
                return this.postByJson(url, {
                  username: username,
                  password: password
                });

              case 7:
                r = _context14.sent;

                if (!(r == null)) {
                  _context14.next = 10;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 10:
                service_1.Service.loginInfo.value = r;
                service_1.Service.setStorageLoginInfo(r);
                events_1.events.login.fire(this, r);
                return _context14.abrupt("return", r);

              case 14:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
    /**
     * 注册
     * @param mobile 手机号
     * @param password 密码
     * @param smsId 短信编号
     * @param verifyCode 验证码
     */

  }, {
    key: "register",
    value: function register(mobile, password, smsId, verifyCode, data) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (mobile) {
                  _context15.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('mobile');

              case 2:
                if (password) {
                  _context15.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('password');

              case 4:
                if (smsId) {
                  _context15.next = 6;
                  break;
                }

                throw errors_1.errors.argumentNull('smsId');

              case 6:
                if (verifyCode) {
                  _context15.next = 8;
                  break;
                }

                throw errors_1.errors.argumentNull('verifyCode');

              case 8:
                url = this.url('user/register');
                _context15.next = 11;
                return this.postByJson(url, {
                  mobile: mobile,
                  password: password,
                  smsId: smsId,
                  verifyCode: verifyCode,
                  data: data
                });

              case 11:
                r = _context15.sent;

                if (!(r == null)) {
                  _context15.next = 14;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 14:
                service_1.Service.setStorageLoginInfo(r);
                events_1.events.register.fire(this, r);
                return _context15.abrupt("return", r);

              case 17:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
    /**
     * 获取用户个人信息
     */

  }, {
    key: "me",
    value: function me() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16() {
        var url, user;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                url = this.url('user/me');
                _context16.next = 3;
                return this.getByJson(url);

              case 3:
                user = _context16.sent;
                return _context16.abrupt("return", user);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
    /**
     * 获取用户
     * @param userId 用户编号
     */

  }, {
    key: "getUser",
    value: function getUser(userId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17() {
        var url, user;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                url = this.url('user/item');
                _context17.next = 3;
                return this.getByJson(url, {
                  userId: userId
                });

              case 3:
                user = _context17.sent;
                return _context17.abrupt("return", user);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
    /**
     * 更新用户信息
     * @param user 用户
     */

  }, {
    key: "update",
    value: function update(user) {
      var url = this.url('user/update');
      return this.postByJson(url, {
        user: user
      });
    }
    /**
     * 获取当前登录用户的角色
     */

  }, {
    key: "myRoles",
    value: function myRoles() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18() {
        var url, roles;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                url = this.url('user/getRoles');
                _context18.next = 3;
                return this.getByJson(url);

              case 3:
                roles = _context18.sent;
                return _context18.abrupt("return", roles);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
  }]);

  return PermissionService;
}(service_1.Service);

exports.PermissionService = PermissionService; // export interface User {
//     id: string,
//     user_name: string,
//     mobile: string,
//     email: string,
//     password: string,
//     sort_number: number,
//     data?: any
//     // roleIds: string[]
// }
//# sourceMappingURL=permission-service.js.map