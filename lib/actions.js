"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.end = exports.inc = exports.END = exports.INCREMENT = void 0;
var INCREMENT = 'redux-nprogress/INCREMENT';
exports.INCREMENT = INCREMENT;
var END = 'redux-nprogress/END';
exports.END = END;

var inc = function inc() {
  return {
    type: INCREMENT
  };
};

exports.inc = inc;

var end = function end() {
  return {
    type: END
  };
};

exports.end = end;