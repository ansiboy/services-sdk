/*!
 * 
<<<<<<< HEAD
 *  maishu-services-sdk v1.13.4
=======
 *  maishu-services-sdk v1.15.0
>>>>>>> b9acbbe8538f6cebc1505b677567d4a13a7362a2
 *  https://github.com/ansiboy/services-sdk
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maishu-chitu-service"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-chitu-service"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("maishu-chitu-service")) : factory(root["maishu-chitu-service"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof window === 'undefined' ? global : window, function(__WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = {
  serviceUrlCanntNull: function serviceUrlCanntNull(serviceName) {
    var msg = "Service '".concat(serviceName, "' base url can not null.");
    return new Error(msg);
  },
  unexpectedNullResult: function unexpectedNullResult() {
    var msg = "Null result is unexpected.";
    return new Error(msg);
  },
  unexpectedNullValue: function unexpectedNullValue(name) {
    var msg = "variable ".concat(name, " is unexpected null value.");
    return new Error(msg);
  },
  argumentNull: function argumentNull(name) {
    var msg = "Arugment ".concat(name, " cannt null or empty.");
    return new Error(msg);
  },
  fieldNull: function fieldNull(field, itemName) {
    var msg = "".concat(itemName, " ").concat(field, " cannt be null or empty");
    return new Error(msg);
  },
  instanceMessangerStart: function instanceMessangerStart() {
    var msg = "Instance messanger is start.";
    return new Error(msg);
  },
  notSupportedInNode: function notSupportedInNode() {
    var msg = "Not implement in node environment.";
  }
};
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/events.js":
/*!***************************!*\
  !*** ./out-es5/events.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service");

exports.events = {
  /** 成功调用 login 方法后引发 */
  login: maishu_chitu_service_1.Callbacks(),

  /** 成功调用 logout 方法后引发 */
  logout: maishu_chitu_service_1.Callbacks(),

  /** 成功调用 register 方法后引发 */
  register: maishu_chitu_service_1.Callbacks()
};
//# sourceMappingURL=events.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var service_1 = __webpack_require__(/*! ./services/service */ "./out-es5/services/service.js");

exports.Service = service_1.Service;

var image_service_1 = __webpack_require__(/*! ./services/image-service */ "./out-es5/services/image-service.js");

exports.ImageService = image_service_1.ImageService;

var user_service_1 = __webpack_require__(/*! ./services/user-service */ "./out-es5/services/user-service.js");

exports.UserService = user_service_1.UserService;

var toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ "./out-es5/services/toolkit-service.js");

exports.ToolkitService = toolkit_service_1.ToolkitService;

var permission_service_1 = __webpack_require__(/*! ./services/permission-service */ "./out-es5/services/permission-service.js");

exports.PermissionService = permission_service_1.PermissionService; // export { InstanceMessanger } from './services/instance-messanger'
// export { MessageService } from './services/message-service'

var settings_1 = __webpack_require__(/*! ./settings */ "./out-es5/settings.js");

exports.settings = settings_1.settings;

var events_1 = __webpack_require__(/*! ./events */ "./out-es5/events.js");

exports.events = events_1.events;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/services/image-service.js":
/*!*******************************************!*\
  !*** ./out-es5/services/image-service.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var service_1 = __webpack_require__(/*! ./service */ "./out-es5/services/service.js");

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

var settings_1 = __webpack_require__(/*! ../settings */ "./out-es5/settings.js");
/** 图片服务，实现图片的上传，获取 */


var ImageService =
/*#__PURE__*/
function (_service_1$Service) {
  _inherits(ImageService, _service_1$Service);

  function ImageService() {
    _classCallCheck(this, ImageService);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageService).apply(this, arguments));
  }

  _createClass(ImageService, [{
    key: "url",
    value: function url(path) {
      if (!ImageService.baseUrl) throw errors_1.errors.serviceUrlCanntNull('imageService');
      return "".concat(ImageService.baseUrl, "/").concat(path);
    }
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */

  }, {
    key: "imageSource",
    value: function imageSource(id, width, height) {
      if (!id) {
        width = width == null ? 200 : width;
        height = height == null ? 100 : height;
        id = this.generateImageBase64(width, height, settings_1.settings.noImageText);
        return id;
      }

      var isBase64 = id.startsWith('data:image');

      if (isBase64) {
        return id;
      }

      var url = this.url('image');
      url = "".concat(url, "?id=").concat(id);
      if (width != null) url = url + "&width=".concat(width);
      if (height != null) url = url + "&height=".concat(height);
      return url;
    }
  }, {
    key: "generateImageBase64",
    value: function generateImageBase64(width, height, obj, options) {
      if (document == null) {
        throw errors_1.errors.notSupportedInNode();
      }

      var canvas = document.createElement('canvas');
      canvas.width = width; //img_width;

      canvas.height = height; //img_height;

      var ctx = canvas.getContext('2d');
      if (ctx == null) throw new Error('ccreate canvas context fail.');
      var draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
      draw(ctx, width, height);
      return canvas.toDataURL();
    }
  }, {
    key: "getImageSize",
    value: function getImageSize(imageBase64) {
      if (!imageBase64) throw errors_1.errors.argumentNull('imageBase64');
      return new Promise(function (resolve, reject) {
        var i = new Image();

        i.onload = function () {
          resolve({
            width: i.width,
            height: i.height
          });
        };

        i.src = imageBase64;
      });
    }
    /**
     * 对图片进行缩放
     * @param imageBase64 图片 base64 格式数据
     * @param width 目标图片的宽度
     * @param height 目标图片的高度
     */

  }, {
    key: "resize",
    value: function resize(imageBase64, width, height) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var canvas, ctx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (imageBase64) {
                  _context.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('imageBase64');

              case 2:
                if (width) {
                  _context.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('width');

              case 4:
                if (height) {
                  _context.next = 6;
                  break;
                }

                throw errors_1.errors.argumentNull('height');

              case 6:
                canvas = document.createElement('canvas'); //.getElementById("canvas");

                ctx = canvas.getContext("2d");
                canvas.width = width;
                canvas.height = height;
                _context.next = 12;
                return new Promise(function (resolve, reject) {
                  var img = new Image();
                  img.src = imageBase64;

                  img.onload = function () {
                    // width = img.width
                    // height = img.height
                    if (ctx == null) throw 'get canvas context fail';
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL());
                  };
                });

              case 12:
                return _context.abrupt("return", _context.sent);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "list",
    value: function list(args) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(ImageService.baseUrl, "/list");
                _context2.next = 3;
                return this.postByJson(url, args);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /**
     * 上传图片
     * @param imageBase64 图片的 base64 数据
     */

  }, {
    key: "upload",
    value: function upload(imageBase64) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var url, imageSize, maxWidth, maxHeight, height, width;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (imageBase64) {
                  _context3.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('imageBase64');

              case 2:
                url = this.url('upload');
                _context3.next = 5;
                return this.getImageSize(imageBase64);

              case 5:
                imageSize = _context3.sent;
                maxWidth = 800;
                maxHeight = 800;

                if (!(imageSize.width > maxWidth)) {
                  _context3.next = 15;
                  break;
                }

                // || imageSize.height > maxHeight
                height = imageSize.height / imageSize.width * maxWidth;
                _context3.next = 12;
                return this.resize(imageBase64, maxWidth, height);

              case 12:
                imageBase64 = _context3.sent;
                _context3.next = 20;
                break;

              case 15:
                if (!(imageSize.height > maxHeight)) {
                  _context3.next = 20;
                  break;
                }

                width = imageSize.width / imageSize.height * maxHeight;
                _context3.next = 19;
                return this.resize(imageBase64, width, maxHeight);

              case 19:
                imageBase64 = _context3.sent;

              case 20:
                return _context3.abrupt("return", this.postByJson(url, {
                  image: imageBase64
                }));

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
    /**
     *
     * @param id 删除图片
     */

  }, {
    key: "remove",
    value: function remove(id) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var url;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (id) {
                  _context4.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('id');

              case 2:
                url = this.url("remove");
                return _context4.abrupt("return", this.postByJson(url, {
                  id: id
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return ImageService;
}(service_1.Service);

exports.ImageService = ImageService;
var draws = {
  text: function text(imageText, options) {
    return function (ctx, canvasWidth, canvasHeight) {
      // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
      var fontSize = Math.floor(canvasWidth / imageText.length * 0.6);
      var bgColor = 'whitesmoke';
      var textColor = '#999'; // let fontSize = Math.min(fontSize1, fontSize2);

      options = options || {};
      ctx.fillStyle = options.bgColor || bgColor; //'whitesmoke';

      ctx.fillRect(0, 0, canvasWidth, canvasHeight); // 设置字体

      ctx.font = "Bold ".concat(options.fontSize, "px Arial"); // 设置对齐方式

      ctx.textAlign = "left"; // 设置填充颜色

      ctx.fillStyle = options.textColor || textColor; //"#999";

      var textWidth = fontSize * imageText.length;
      var startX = Math.floor((canvasWidth - textWidth) * 0.5);
      var startY = Math.floor((canvasHeight - (options.fontSize || fontSize)) * 0.3); // 设置字体内容，以及在画布上的位置

      ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
    };
  }
};
//# sourceMappingURL=image-service.js.map


/***/ }),

/***/ "./out-es5/services/permission-service.js":
/*!************************************************!*\
  !*** ./out-es5/services/permission-service.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var service_1 = __webpack_require__(/*! ./service */ "./out-es5/services/service.js");

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

var events_1 = __webpack_require__(/*! ../events */ "./out-es5/events.js");

var PermissionService =
/*#__PURE__*/
function (_service_1$Service) {
  _inherits(PermissionService, _service_1$Service);

  function PermissionService() {
    var _this;

    _classCallCheck(this, PermissionService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PermissionService).call(this));
    _this.self = _assertThisInitialized(_this);
    _this.currentUser = {
      resource: {
        list: function list() {
          var url = _this.url("current-user/resource/list");

          return _this.get(url);
        }
      }
    };
    _this.role = {
      /**
       * 获取角色列表
       */
      list: function list() {
        var url = _this.url("role/list");

        return _this.get(url);
      },

      /**
       * 获取单个角色
       * @param id 要获取的角色编号
       */
      item: function item(id) {
        var url = _this.url("role/item");

        return _this.get(url, {
          id: id
        });
      },

      /**
       * 添加角色
       * @param name 要添加的角色名称
       * @param remark 要添加的角色备注
       */
      add: function add(item) {
        var url = _this.url("role/add");

        return _this.postByJson(url, {
          item: item
        });
      },

      /**
       * 删除角色
       * @param id 要删除的角色编号
       */
      remove: function remove(id) {
        var url = _this.url("role/remove");

        return _this.postByJson(url, {
          id: id
        });
      },
      update: function update(item) {
        var url = _this.url("role/update");

        return _this.postByJson(url, {
          item: item
        });
      },
      resource: {
        /**
         * 获取角色所允许访问的资源 id
         * @param roleId 指定的角色编号
         */
        ids: function ids(roleId) {
          return __awaiter(_assertThisInitialized(_this), void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var url, r;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (roleId) {
                      _context.next = 2;
                      break;
                    }

                    throw errors_1.errors.argumentNull('roleId');

                  case 2:
                    url = this.url('role/resourceIds');
                    _context.next = 5;
                    return this.getByJson(url, {
                      roleId: roleId
                    });

                  case 5:
                    r = _context.sent;
                    return _context.abrupt("return", r || []);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
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
    _this.user = {
      list: function list(args) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var url, result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  url = this.url('user/list');
                  _context2.next = 3;
                  return this.getByJson(url, {
                    args: args
                  });

                case 3:
                  result = _context2.sent;

                  if (!(result == null)) {
                    _context2.next = 6;
                    break;
                  }

                  throw errors_1.errors.unexpectedNullResult();

                case 6:
                  return _context2.abrupt("return", result);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      },
      update: function update(item) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var url, result;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  url = this.url('user/update');
                  _context3.next = 3;
                  return this.postByJson(url, {
                    user: item
                  });

                case 3:
                  result = _context3.sent;
                  return _context3.abrupt("return", result);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      },

      /**
       * 添加用户信息
       * @param item 用户
       */
      add: function add(item, roleIds) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var url, result, r;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  url = this.url('user/add');
                  _context4.next = 3;
                  return this.postByJson(url, {
                    item: item,
                    roleIds: roleIds
                  });

                case 3:
                  r = _context4.sent;
                  return _context4.abrupt("return", r);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));
      }
    };
    _this.token = {
      list: function list(args) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var url, r;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  url = this.url('token/list');
                  r = this.getByJson(url, {
                    args: args
                  });
                  return _context5.abrupt("return", r);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));
      },
      add: function add(item) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var url, r;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  url = this.url("token/add");
                  _context6.next = 3;
                  return this.postByJson(url, {
                    item: item
                  });

                case 3:
                  r = _context6.sent;
                  return _context6.abrupt("return", r);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));
      }
    };
    return _this;
  }

  _createClass(PermissionService, [{
    key: "url",
    value: function url(path) {
      if (!PermissionService.baseUrl) throw errors_1.errors.serviceUrlCanntNull('permissionService');
      return "".concat(PermissionService.baseUrl, "/").concat(path);
    } // //=============================================================
    // // 资源相关
    // /** 添加资源 */
    // async addResource(item: Partial<Resource>) {
    //     if (!item) throw errors.argumentNull('item')
    //     let url = this.url('resource/add')
    //     let result = await this.postByJson<{ id: string }>(url, { item })
    //     Object.assign(item, result)
    //     return result
    // }
    // /** 更新资源 */
    // async updateResource(item: Partial<Resource>) {
    //     if (!item) throw errors.argumentNull('item')
    //     let url = this.url('resource/update')
    //     let result = await this.postByJson(url, { item })
    //     Object.assign(item, result)
    //     return result
    // }
    // /** 获取资源列表 */
    // async getResourceList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<Resource>> {
    //     if (!args) throw errors.argumentNull('args')
    //     let url = this.url('resource/list')
    //     if (!args.sortExpression)
    //         args.sortExpression = 'sort_number asc'
    //     type T = Resource & { data?: { visible?: boolean } }
    //     let result = await this.getByJson<DataSourceSelectResult<T>>(url, { args })
    //     if (result == null)
    //         throw errors.unexpectedNullResult()
    //     for (let i = 0; i < result.dataItems.length; i++) {
    //         result.dataItems[i].data = result.dataItems[i].data || {}
    //     }
    //     return result
    // }
    // /**
    //  * 删除指定的资源
    //  * @param id 要删除的资源编号
    //  */
    // async deleteResource(id: string) {
    //     if (!id) throw errors.argumentNull('id')
    //     let url = this.url('resource/remove')
    //     return this.postByJson(url, { id })
    // }
    // /**
    //  * 获取指定资源的子按钮
    //  * @param id 资源编号
    //  */
    // async getResourceChildCommands(id: string) {
    //     if (!id) throw errors.argumentNull('id')
    //     let buttonType: ResourceType = 'button'
    //     let filter = `parent_id = '${id}' and type = '${buttonType}'`
    //     let url = `resource/list`
    //     let result = await this.getByJson(url, { filter })
    //     return result
    // }
    //=============================================================
    // 角色相关
    // async getRoles(): Promise<Role[]> {
    //     let url = this.url('role/list')
    //     let r = await this.getByJson<Role[]>(url)
    //     return r || []
    // }

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
      regeneratorRuntime.mark(function _callee7() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (roleId) {
                  _context7.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('roleId');

              case 2:
                url = this.url('role/resourceIds');
                _context7.next = 5;
                return this.getByJson(url, {
                  roleId: roleId
                });

              case 5:
                r = _context7.sent;
                return _context7.abrupt("return", r || []);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
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
    } // addRole(name: string, remark?: string) {
    //     if (!name) throw errors.argumentNull("name");
    //     let url = this.url("role/add");
    //     return this.postByJson(url, { name, remark });
    // }
    // removeRole(id: string) {
    //     if (!id) throw errors.argumentNull("id");
    //     let url = this.url("role/remove");
    //     return this.postByJson(url, { id });
    // }
    //================================================================
    // 用户相关

    /** 获取用户列表 */

  }, {
    key: "getUserList",
    value: function getUserList(args) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = this.url('user/list');
                _context8.next = 3;
                return this.getByJson(url, {
                  args: args
                });

              case 3:
                result = _context8.sent;

                if (!(result == null)) {
                  _context8.next = 6;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 6:
                return _context8.abrupt("return", result);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
    /** 通过手机获取用户 */

  }, {
    key: "getUserByMobile",
    value: function getUserByMobile(mobile) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        var args, r;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (mobile) {
                  _context9.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('mobile');

              case 2:
                args = {};
                args.filter = "mobile = '".concat(mobile, "'");
                _context9.next = 6;
                return this.getUserList(args);

              case 6:
                r = _context9.sent;
                return _context9.abrupt("return", r.dataItems[0]);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
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
                url = this.url('application/removeUser');
                return _context10.abrupt("return", this.deleteByJson(url, {
                  userId: userId
                }));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
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
      regeneratorRuntime.mark(function _callee11() {
        var url, result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!(args == null)) {
                  _context11.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('args');

              case 2:
                url = this.url('application/users');
                _context11.next = 5;
                return this.getByJson(url, {
                  args: args
                });

              case 5:
                result = _context11.sent;

                if (!(result == null)) {
                  _context11.next = 8;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 8:
                return _context11.abrupt("return", result);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
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
      regeneratorRuntime.mark(function _callee12() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (smsId) {
                  _context12.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('smsId');

              case 2:
                if (verifyCode) {
                  _context12.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('verifycode');

              case 4:
                url = this.url('sms/checkVerifyCode');
                _context12.next = 7;
                return this.postByJson(url, {
                  smsId: smsId,
                  verifyCode: verifyCode
                });

              case 7:
                r = _context12.sent;
                return _context12.abrupt("return", r);

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
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
      regeneratorRuntime.mark(function _callee13() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (username) {
                  _context13.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('username');

              case 2:
                if (password) {
                  _context13.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('password');

              case 4:
                url = this.url('user/login');
                _context13.next = 7;
                return this.postByJson(url, {
                  username: username,
                  password: password
                });

              case 7:
                r = _context13.sent;

                if (!(r == null)) {
                  _context13.next = 10;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 10:
                service_1.Service.loginInfo.value = r;
                service_1.Service.setStorageLoginInfo(r);
                events_1.events.login.fire(this, r);
                return _context13.abrupt("return", r);

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
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
      regeneratorRuntime.mark(function _callee14() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (mobile) {
                  _context14.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull('mobile');

              case 2:
                if (password) {
                  _context14.next = 4;
                  break;
                }

                throw errors_1.errors.argumentNull('password');

              case 4:
                if (smsId) {
                  _context14.next = 6;
                  break;
                }

                throw errors_1.errors.argumentNull('smsId');

              case 6:
                if (verifyCode) {
                  _context14.next = 8;
                  break;
                }

                throw errors_1.errors.argumentNull('verifyCode');

              case 8:
                url = this.url('user/register');
                _context14.next = 11;
                return this.postByJson(url, {
                  mobile: mobile,
                  password: password,
                  smsId: smsId,
                  verifyCode: verifyCode,
                  data: data
                });

              case 11:
                r = _context14.sent;

                if (!(r == null)) {
                  _context14.next = 14;
                  break;
                }

                throw errors_1.errors.unexpectedNullResult();

              case 14:
                service_1.Service.setStorageLoginInfo(r);
                events_1.events.register.fire(this, r);
                return _context14.abrupt("return", r);

              case 17:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
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
      regeneratorRuntime.mark(function _callee15() {
        var url, user;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (service_1.Service.loginInfo.value) {
                  _context15.next = 2;
                  break;
                }

                return _context15.abrupt("return", null);

              case 2:
                url = this.url('user/me');
                _context15.next = 5;
                return this.getByJson(url);

              case 5:
                user = _context15.sent;
                return _context15.abrupt("return", user);

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
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
      regeneratorRuntime.mark(function _callee16() {
        var url, user;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                url = this.url('user/item');
                _context16.next = 3;
                return this.getByJson(url, {
                  userId: userId
                });

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
    } // async addUser(item: Partial<User>) {
    //     let url = this.url('user/add')
    //     let result: { id: string }
    //     let r = await this.postByJson<typeof result>(url, { item })
    //     return r
    // }

    /**
     * 更新用户信息
     * @param item 用户
     */

  }, {
    key: "updateUser",
    value: function updateUser(item) {
      var url = this.url('user/update');
      return this.postByJson(url, {
        user: item
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
      regeneratorRuntime.mark(function _callee17() {
        var url, roles;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                url = this.url('user/getRoles');
                _context17.next = 3;
                return this.getByJson(url);

              case 3:
                roles = _context17.sent;
                return _context17.abrupt("return", roles);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
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
    /**
     * 获取用角色
     * @param userId 用户编号
     */

  }, {
    key: "getUserRoles",
    value: function getUserRoles(userId) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18() {
        var url, r;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                url = this.url('role/userRoles');
                _context18.next = 3;
                return this.getByJson(url, {
                  userIds: [userId]
                });

              case 3:
                r = _context18.sent;
                return _context18.abrupt("return", r[userId]);

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

exports.PermissionService = PermissionService;
//# sourceMappingURL=permission-service.js.map


/***/ }),

/***/ "./out-es5/services/service.js":
/*!*************************************!*\
  !*** ./out-es5/services/service.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

var maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service");

var Service =
/*#__PURE__*/
function (_maishu_chitu_service) {
  _inherits(Service, _maishu_chitu_service);

  function Service() {
    _classCallCheck(this, Service);

    return _possibleConstructorReturn(this, _getPrototypeOf(Service).apply(this, arguments));
  }

  _createClass(Service, [{
    key: "ajax",
    value: function ajax(url, options) {
      var _this = this;

      var _super = Object.create(null, {
        ajax: {
          get: function get() {
            return _get(_getPrototypeOf(Service.prototype), "ajax", _this);
          }
        }
      });

      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var data, obj, d, keys, i, key, k;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = options || {};
                options.headers = options.headers || {};
                if (Service.loginInfo.value) options.headers['token'] = Service.loginInfo.value.token;
                if (Service.applicationId) options.headers['application-id'] = typeof Service.applicationId == 'function' ? Service.applicationId() : Service.applicationId;
                _context.next = 6;
                return _super.ajax.call(this, url, options);

              case 6:
                data = _context.sent;

                if (!(data == null)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", null);

              case 9:
                obj = data;

                if (!(obj.code && obj.message)) {
                  _context.next = 12;
                  break;
                }

                throw new Error(obj.message);

              case 12:
                if (obj != null && obj['DataItems'] != null && obj['TotalRowCount'] != null) {
                  d = {};
                  keys = Object.keys(data);

                  for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    k = key[0].toLowerCase() + key.substr(1);
                    d[k] = obj[key];
                  }

                  data = d;
                }

                this.travelJSON(data);
                return _context.abrupt("return", data);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
    /**
     * 遍历 JSON 对象各个字段，将日期字符串转换为 Date 对象
     * @param obj 要转换的 JSON 对象
     */

  }, {
    key: "travelJSON",
    value: function travelJSON(obj) {
      if (typeof obj === 'string' && this.isDateString(obj)) {
        return new Date(obj);
      } else if (typeof obj === 'string') {
        return obj;
      }

      var stack = new Array();
      stack.push(obj);

      while (stack.length > 0) {
        var item = stack.pop();

        for (var key in item) {
          var value = item[key];
          if (value == null) continue;

          if (value instanceof Array) {
            for (var i = 0; i < value.length; i++) {
              stack.push(value[i]);
            }

            continue;
          }

          if (_typeof(value) == 'object') {
            stack.push(value);
            continue;
          }

          if (typeof value == 'string' && this.isDateString(value)) {
            item[key] = new Date(value);
          }
        }
      }

      return obj;
    }
  }, {
    key: "isDateString",
    value: function isDateString(text) {
      var datePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
      var datePattern1 = /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}/;
      return text.match(datePattern) != null || text.match(datePattern1) != null;
    }
  }], [{
    key: "getStorageLoginInfo",
    value: function getStorageLoginInfo() {
      var loginInfoSerialString = this.getCookie(Service.LoginInfoStorageName);
      if (!loginInfoSerialString) return null;

      try {
        var loginInfo = JSON.parse(loginInfoSerialString);
        return loginInfo;
      } catch (e) {
        console.error(e);
        console.log(loginInfoSerialString);
        return null;
      }
    }
  }, {
    key: "setStorageLoginInfo",
    value: function setStorageLoginInfo(value) {
      if (value == null) {
        this.removeCookie(Service.LoginInfoStorageName);
        return;
      }

      this.setCookie(Service.LoginInfoStorageName, JSON.stringify(value), 1000);
    }
  }, {
    key: "setCookie",
    value: function setCookie(name, value, days) {
      // nodejs 没有 document
      if (typeof document == 'undefined') return;
      var expires = "";

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      if (typeof document == 'undefined') return null;
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(name) {
      // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.setCookie(name, '');
    }
  }]);

  return Service;
}(maishu_chitu_service_1.Service);

Service.LoginInfoStorageName = 'app-login-info';
Service.loginInfo = new maishu_chitu_service_1.ValueStore(Service.getStorageLoginInfo());
exports.Service = Service;
//# sourceMappingURL=service.js.map


/***/ }),

/***/ "./out-es5/services/toolkit-service.js":
/*!*********************************************!*\
  !*** ./out-es5/services/toolkit-service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var service_1 = __webpack_require__(/*! ./service */ "./out-es5/services/service.js");

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

var ToolkitService =
/*#__PURE__*/
function (_service_1$Service) {
  _inherits(ToolkitService, _service_1$Service);

  function ToolkitService() {
    _classCallCheck(this, ToolkitService);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToolkitService).call(this));
  }

  _createClass(ToolkitService, [{
    key: "url",
    value: function url(path) {
      if (!path) throw new Error('Argument path cannt be null or empty.');
      if (!ToolkitService.baseUrl) throw errors_1.errors.serviceUrlCanntNull('toolServiceUrl');
      return "".concat(ToolkitService.baseUrl, "/").concat(path);
    }
    /** 获取系统自动生成不重复的唯一数字 */

  }, {
    key: "uniqueNumber",
    value: function uniqueNumber() {
      var url = this.url('unique-number');
      return this.getByJson(url);
    }
  }]);

  return ToolkitService;
}(service_1.Service);

exports.ToolkitService = ToolkitService;
//# sourceMappingURL=toolkit-service.js.map


/***/ }),

/***/ "./out-es5/services/user-service.js":
/*!******************************************!*\
  !*** ./out-es5/services/user-service.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var permission_service_1 = __webpack_require__(/*! ./permission-service */ "./out-es5/services/permission-service.js");
/** 与用户相关的服务，这个类已经废弃，请使用  PermissionService*/


var UserService =
/*#__PURE__*/
function (_permission_service_) {
  _inherits(UserService, _permission_service_);

  function UserService() {
    _classCallCheck(this, UserService);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserService).apply(this, arguments));
  }

  return UserService;
}(permission_service_1.PermissionService);

exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map


/***/ }),

/***/ "./out-es5/settings.js":
/*!*****************************!*\
  !*** ./out-es5/settings.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var image_service_1 = __webpack_require__(/*! ./services/image-service */ "./out-es5/services/image-service.js");

var permission_service_1 = __webpack_require__(/*! ./services/permission-service */ "./out-es5/services/permission-service.js");

var toolkit_service_1 = __webpack_require__(/*! ./services/toolkit-service */ "./out-es5/services/toolkit-service.js");

var service_1 = __webpack_require__(/*! ./services/service */ "./out-es5/services/service.js");

exports.settings = {
  noImageText: '暂无图片',

  get applicationId() {
    return service_1.Service.applicationId;
  },

  set applicationId(value) {
    service_1.Service.applicationId = value;
  },

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
  }

};
//# sourceMappingURL=settings.js.map


/***/ }),

/***/ "maishu-chitu-service":
/*!***************************************!*\
  !*** external "maishu-chitu-service" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.es5.js.map