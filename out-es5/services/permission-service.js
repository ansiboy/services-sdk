"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

var errors_1 = require("../errors"); // import { events } from "../events";


var PermissionService =
/*#__PURE__*/
function (_service_1$Service) {
  _inherits(PermissionService, _service_1$Service);

  function PermissionService() {
    var _this;

    _classCallCheck(this, PermissionService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PermissionService).apply(this, arguments));
    _this.role = new RoleModule(_assertThisInitialized(_this));
    _this.user = new UserModule(_assertThisInitialized(_this));
    _this.sms = new SMSModule(_assertThisInitialized(_this));
    _this.currentUser = {
      resource: {
        list: function list() {
          var url = _this.url("current-user/resource/list");

          return _this.get(url);
        }
      }
    };
    _this.resource = {
      list: function list(args) {
        var url = _this.url("resource/list");

        return _this.getByJson(url, {
          args: args
        });
      },
      item: function item(id) {
        var url = _this.url("resource/item");

        return _this.getByJson(url, {
          id: id
        });
      },
      remove: function remove(id) {
        var url = _this.url("resource/remove");

        return _this.post(url, {
          id: id
        });
      },
      add: function add(item) {
        var url = _this.url("resource/add");

        return _this.postByJson(url, {
          item: item
        });
      },
      update: function update(item) {
        var url = _this.url("resource/update");

        return _this.postByJson(url, {
          item: item
        });
      }
    };
    _this.token = {
      list: function list(args) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var url, r;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  url = this.url('token/list');
                  r = this.getByJson(url, {
                    args: args
                  });
                  return _context.abrupt("return", r);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      },
      add: function add(item) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var url, r;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  url = this.url("token/add");
                  _context2.next = 3;
                  return this.postByJson(url, {
                    item: item
                  });

                case 3:
                  r = _context2.sent;
                  return _context2.abrupt("return", r);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }
    };
    return _this;
  }

  _createClass(PermissionService, [{
    key: "url",
    value: function url(path) {
      if (!PermissionService.baseUrl) throw errors_1.errors.serviceUrlCanntNull('permissionService');
      if (PermissionService.baseUrl.endsWith("/")) return "".concat(PermissionService.baseUrl).concat(path);
      return "".concat(PermissionService.baseUrl, "/").concat(path);
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
      regeneratorRuntime.mark(function _callee3() {
        var url;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (userId) {
                  _context3.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('userId');

              case 2:
                url = this.url('application/removeUser');
                return _context3.abrupt("return", this.deleteByJson(url, {
                  userId: userId
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      regeneratorRuntime.mark(function _callee4() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(args == null)) {
                  _context4.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('args');

              case 2:
                url = this.url('application/users');
                _context4.next = 5;
                return this.getByJson(url, {
                  args: args
                });

              case 5:
                result = _context4.sent;

                if (!(result == null)) {
                  _context4.next = 8;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 8:
                return _context4.abrupt("return", result);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
    /**
     * 获取用角色
     * @param userId 用户编号
     */

  }, {
    key: "getUserRoles",
    value: function getUserRoles(userId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = this.url('role/userRoles');
                _context5.next = 3;
                return this.getByJson(url, {
                  userIds: [userId]
                });

              case 3:
                r = _context5.sent;
                return _context5.abrupt("return", r[userId]);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }]);

  return PermissionService;
}(service_1.Service);

exports.PermissionService = PermissionService;

var ServiceModule =
/*#__PURE__*/
function () {
  function ServiceModule(service) {
    _classCallCheck(this, ServiceModule);

    this.service = service;
    this.getByJson = this.service.getByJson.bind(this.service);
    this.postByJson = this.service.postByJson.bind(this.service);
    this.get = this.service.get;
  }

  _createClass(ServiceModule, [{
    key: "url",
    value: function url(path) {
      if (!PermissionService.baseUrl) throw errors_1.errors.serviceUrlCanntNull('permissionService');
      return "".concat(PermissionService.baseUrl, "/").concat(path);
    }
  }]);

  return ServiceModule;
}();

var UserModule =
/*#__PURE__*/
function (_ServiceModule) {
  _inherits(UserModule, _ServiceModule);

  function UserModule() {
    _classCallCheck(this, UserModule);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserModule).apply(this, arguments));
  }

  _createClass(UserModule, [{
    key: "list",

    /** 获取用户列表 */
    value: function list(args) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = this.url('user/list');
                _context6.next = 3;
                return this.getByJson(url, {
                  args: args
                });

              case 3:
                result = _context6.sent;

                if (!(result == null)) {
                  _context6.next = 6;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 6:
                return _context6.abrupt("return", result);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
    /**
     * 更新用户信息
     * @param item 用户
     */

  }, {
    key: "update",
    value: function update(item) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = this.url('user/update');
                _context7.next = 3;
                return this.postByJson(url, {
                  user: item
                });

              case 3:
                result = _context7.sent;
                return _context7.abrupt("return", result);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
    /**
     * 获取用户
     * @param userId 用户编号
     */

  }, {
    key: "item",
    value: function item(userId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var url, user;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = this.url('user/item');
                _context8.next = 3;
                return this.getByJson(url, {
                  userId: userId
                });

              case 3:
                user = _context8.sent;
                return _context8.abrupt("return", user);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
    /**
     * 添加用户信息
     * @param item 用户
     */

  }, {
    key: "addUser",
    value: function addUser(item) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        var url, result, r;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                url = this.url('user/add');
                _context9.next = 3;
                return this.postByJson(url, {
                  item: item
                });

              case 3:
                r = _context9.sent;
                return _context9.abrupt("return", r);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
    /** 设置用户角色 */

  }, {
    key: "setRoles",
    value: function setRoles(userId, roleIds) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        var url;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (userId) {
                  _context10.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('userId');

              case 2:
                if (roleIds) {
                  _context10.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('roleIds');

              case 4:
                url = this.url('user/setRoles');
                return _context10.abrupt("return", this.postByJson(url, {
                  userId: userId,
                  roleIds: roleIds
                }));

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
    /** 通过手机获取用户 */

  }, {
    key: "listByMobile",
    value: function listByMobile(mobile) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11() {
        var args, r;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (mobile) {
                  _context11.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('mobile');

              case 2:
                args = {};
                args.filter = "mobile = '".concat(mobile, "'");
                _context11.next = 6;
                return this.list(args);

              case 6:
                r = _context11.sent;
                return _context11.abrupt("return", r.dataItems[0]);

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
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
  }, {
    key: "login",
    value: function login(arg0, password) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12() {
        var args, username, url, r;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(typeof arg0 == "string")) {
                  _context12.next = 9;
                  break;
                }

                username = arg0;

                if (username) {
                  _context12.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('username');

              case 4:
                if (password) {
                  _context12.next = 6;
                  break;
                }

                throw errors_1.errors.argumentNull('password');

              case 6:
                args = {
                  username: username,
                  password: password
                };
                _context12.next = 10;
                break;

              case 9:
                args = arg0;

              case 10:
                url = this.url('user/login');
                _context12.next = 13;
                return this.postByJson(url, args);

              case 13:
                r = _context12.sent;

                if (!(r == null)) {
                  _context12.next = 16;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 16:
                return _context12.abrupt("return", r);

              case 17:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
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
      regeneratorRuntime.mark(function _callee13() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (mobile) {
                  _context13.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('mobile');

              case 2:
                if (password) {
                  _context13.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('password');

              case 4:
                if (smsId) {
                  _context13.next = 6;
                  break;
                }

                throw errors_1.errors.argumentNull('smsId');

              case 6:
                if (verifyCode) {
                  _context13.next = 8;
                  break;
                }

                throw errors_1.errors.argumentNull('verifyCode');

              case 8:
                url = this.url('user/register');
                _context13.next = 11;
                return this.postByJson(url, {
                  mobile: mobile,
                  password: password,
                  smsId: smsId,
                  verifyCode: verifyCode,
                  data: data
                });

              case 11:
                r = _context13.sent;

                if (!(r == null)) {
                  _context13.next = 14;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 14:
                return _context13.abrupt("return", r);

              case 15:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
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
      regeneratorRuntime.mark(function _callee14() {
        var url, user;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                url = this.url('user/me');
                _context14.next = 3;
                return this.getByJson(url);

              case 3:
                user = _context14.sent;
                return _context14.abrupt("return", user);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
    /**
     * 获取当前登录用户的角色
     */

  }, {
    key: "myRoles",
    value: function myRoles() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15() {
        var url, roles;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                url = this.url('user/getRoles');
                _context15.next = 3;
                return this.getByJson(url);

              case 3:
                roles = _context15.sent;
                return _context15.abrupt("return", roles);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
    /**
     * 给指定的用户添加角色
     * @param userId 用户编号
     * @param roleIds 多个角色编号
     */

  }, {
    key: "addUserRoles",
    value: function addUserRoles(userId, roleIds) {
      var url = this.url('user/addRoles');
      return this.postByJson(url, {
        userId: userId,
        roleIds: roleIds
      });
    }
  }]);

  return UserModule;
}(ServiceModule);

var RoleModule =
/*#__PURE__*/
function (_ServiceModule2) {
  _inherits(RoleModule, _ServiceModule2);

  function RoleModule() {
    var _this2;

    _classCallCheck(this, RoleModule);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(RoleModule).apply(this, arguments));
    _this2.resource = {
      /**
       * 获取角色所允许访问的资源 id
       * @param roleId 指定的角色编号
       */
      ids: function ids(roleId) {
        return __awaiter(_assertThisInitialized(_this2), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee16() {
          var url, r;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  if (roleId) {
                    _context16.next = 2;
                    break;
                  }

                  throw errors_1.errors.argumentNull('roleId');

                case 2:
                  url = this.url('role/resourceIds');
                  _context16.next = 5;
                  return this.getByJson(url, {
                    roleId: roleId
                  });

                case 5:
                  r = _context16.sent;
                  return _context16.abrupt("return", r || []);

                case 7:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));
      }
    };
    return _this2;
  }

  _createClass(RoleModule, [{
    key: "list",
    value: function list() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17() {
        var url;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                url = this.url("role/list");
                return _context17.abrupt("return", this.get(url));

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
  }, {
    key: "item",
    value: function item(id) {
      var url = this.url("role/item");
      return this.get(url, {
        id: id
      });
    }
  }, {
    key: "add",
    value: function add(arg1, arg2) {
      var url = this.url("role/add");
      var item;

      if (typeof arg1 == "string") {
        item = {
          name: arg1,
          remark: arg2
        };
      } else {
        item = arg1;
      }

      return this.postByJson(url, {
        item: item
      });
    }
    /**
     * 删除角色
     * @param id 要删除的角色编号
     */

  }, {
    key: "remove",
    value: function remove(id) {
      var url = this.url("role/remove");
      return this.postByJson(url, {
        id: id
      });
    }
  }, {
    key: "update",
    value: function update(item) {
      var url = this.url("role/update");
      return this.postByJson(url, {
        item: item
      });
    }
    /**
     * 获取角色所允许访问的资源 id
     * @param roleId 指定的角色编号
     */

  }, {
    key: "resourceIds",
    value: function resourceIds(roleId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (roleId) {
                  _context18.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('roleId');

              case 2:
                url = this.url('role/resourceIds');
                _context18.next = 5;
                return this.getByJson(url, {
                  roleId: roleId
                });

              case 5:
                r = _context18.sent;
                return _context18.abrupt("return", r || []);

              case 7:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
    /**
     *
     * @param roleId 指定的角色编号
     * @param resourceIds 角色所允许访问的资源编号
     */

  }, {
    key: "setResource",
    value: function setResource(roleId, resourceIds) {
      if (!roleId) throw errors_1.errors.argumentNull('roleId');
      if (!resourceIds) throw errors_1.errors.argumentNull('resourceIds');
      var url = this.url('role/setResources');
      return this.postByJson(url, {
        roleId: roleId,
        resourceIds: resourceIds
      });
    }
  }]);

  return RoleModule;
}(ServiceModule);

var SMSModule =
/*#__PURE__*/
function (_ServiceModule3) {
  _inherits(SMSModule, _ServiceModule3);

  function SMSModule() {
    _classCallCheck(this, SMSModule);

    return _possibleConstructorReturn(this, _getPrototypeOf(SMSModule).apply(this, arguments));
  }

  _createClass(SMSModule, [{
    key: "sendRegisterVerifyCode",

    /**
     * 发送注册操作验证码
     * @param mobile 接收验证码的手机号
     */
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
      regeneratorRuntime.mark(function _callee19() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (smsId) {
                  _context19.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('smsId');

              case 2:
                if (verifyCode) {
                  _context19.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('verifycode');

              case 4:
                url = this.url('sms/checkVerifyCode');
                _context19.next = 7;
                return this.postByJson(url, {
                  smsId: smsId,
                  verifyCode: verifyCode
                });

              case 7:
                r = _context19.sent;
                return _context19.abrupt("return", r);

              case 9:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
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
  }]);

  return SMSModule;
}(ServiceModule);
//# sourceMappingURL=permission-service.js.map
