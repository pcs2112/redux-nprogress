'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INCREMENT = exports.INCREMENT = 'redux-nprogress/INCREMENT';
var END = exports.END = 'redux-nprogress/END';

var inc = exports.inc = function inc() {
  return {
    type: INCREMENT
  };
};

var end = exports.end = function end() {
  return {
    type: END
  };
};