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
