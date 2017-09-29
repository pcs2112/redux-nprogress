'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNProgress = exports.reducer = exports.end = exports.inc = undefined;

var _actions = require('./actions');

Object.defineProperty(exports, 'inc', {
  enumerable: true,
  get: function get() {
    return _actions.inc;
  }
});
Object.defineProperty(exports, 'end', {
  enumerable: true,
  get: function get() {
    return _actions.end;
  }
});

var _WithNProgress = require('./WithNProgress');

Object.defineProperty(exports, 'withNProgress', {
  enumerable: true,
  get: function get() {
    return _WithNProgress.withNProgress;
  }
});

var _reducer2 = require('./reducer');

var _reducer3 = _interopRequireDefault(_reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer3.default;