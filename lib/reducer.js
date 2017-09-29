'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

var initialState = {
  increment: 0
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

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

module.exports = exports['default'];