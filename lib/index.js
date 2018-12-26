"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "inc", {
  enumerable: true,
  get: function get() {
    return _actions.inc;
  }
});
Object.defineProperty(exports, "end", {
  enumerable: true,
  get: function get() {
    return _actions.end;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer2.default;
  }
});
Object.defineProperty(exports, "withNProgress", {
  enumerable: true,
  get: function get() {
    return _WithNProgress.withNProgress;
  }
});

var _actions = require("./actions");

var _reducer2 = _interopRequireDefault(require("./reducer"));

var _WithNProgress = require("./WithNProgress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }