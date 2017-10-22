'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var color = _ref.color;
  return _react2.default.createElement(
    'div',
    {
      className: 'bar',
      role: 'progressbar',
      style: _extends({}, barStyles, { background: color })
    },
    _react2.default.createElement('div', { className: 'peg', style: _extends({}, pegStyles, { boxShadow: '0 0 10px ' + color + ', 0 0 5px ' + color }) })
  );
};

NProgressTemplate.propTypes = {
  color: _propTypes2.default.string
};

NProgressTemplate.defaultProps = {
  color: '#29d'
};

NProgressTemplate.displayName = 'NProgressTemplate';

exports.default = NProgressTemplate;
module.exports = exports['default'];