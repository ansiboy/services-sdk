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

var service_1 = require("./service");

var errors_1 = require("../errors");

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
