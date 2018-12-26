"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NProgressTemplate = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var barStyles = {
  position: 'fixed',
  zIndex: 1031,
  top: 0,
  left: 0,
  width: '100%',
  height: '2px'
};
var pegStyles = {
  display: 'block',
  position: 'absolute',
  right: '0px',
  width: '100px',
  height: '100%',
  opacity: 1.0,
  WebkitTransform: 'rotate(3deg) translate(0px, -4px)',
  msTransform: 'rotate(3deg) translate(0px, -4px)',
  transform: 'rotate(3deg) translate(0px, -4px)'
};

var NProgressTemplate = function NProgressTemplate(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#29d' : _ref$color;
  return _react.default.createElement("div", {
    className: "bar",
    role: "bar" // eslint-disable-line
    ,
    style: _objectSpread({}, barStyles, {
      background: color
    })
  }, _react.default.createElement("div", {
    className: "peg",
    style: _objectSpread({}, pegStyles, {
      boxShadow: "0 0 10px ".concat(color, ", 0 0 5px ").concat(color)
    })
  }));
};

exports.NProgressTemplate = NProgressTemplate;
NProgressTemplate.propTypes = {
  color: _propTypes.default.string.isRequired
};
NProgressTemplate.displayName = 'NProgressTemplate';