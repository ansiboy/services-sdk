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
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var service_1 = require("./service");

var errors_1 = require("../errors");

var settings_1 = require("../settings");
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
      if (id != null && id.startsWith("http://")) return id;
      if (id != null && id.indexOf("/") >= 0) return id;

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
