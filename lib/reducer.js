"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("./actions");

var initialState = {
  increment: 0
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.INCREMENT:
      return {
        increment: state.increment + 1
      };

    case _actions.END:
      return {
        increment: 0
      };

    default:
      return state;
  }
};

exports.default = _default;
module.exports = exports.default;