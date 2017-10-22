'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _utils = require('./utils');

var _NProgressTemplate = require('./NProgressTemplate');

var _NProgressTemplate2 = _interopRequireDefault(_NProgressTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withNProgress = function withNProgress() {
  var WrappedComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _NProgressTemplate2.default;
  var stateName = arguments[1];

  var WithNProgress = function (_Component) {
    _inherits(WithNProgress, _Component);

    function WithNProgress() {
      _classCallCheck(this, WithNProgress);

      return _possibleConstructorReturn(this, (WithNProgress.__proto__ || Object.getPrototypeOf(WithNProgress)).apply(this, arguments));
    }

    _createClass(WithNProgress, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if ((0, _utils.isDOMAvailable)()) {
          var _props = this.props,
              nprogress = _props.nprogress,
              color = _props.color;

          var template = (0, _server.renderToString)(_react2.default.createElement(WrappedComponent, { color: color }));

          _nprogress2.default.configure(_extends({}, nprogress, { template: template
          }));
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if ((0, _utils.isDOMAvailable)()) {
          var increment = nextProps.increment;


          if (increment === 0) {
            _nprogress2.default.done();
          } else {
            _nprogress2.default.inc();
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _utils.isDOMAvailable)()) {
          _nprogress2.default.done();
          _nprogress2.default.remove();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return WithNProgress;
  }(_react.Component);

  WithNProgress.propTypes = {
    nprogress: _propTypes2.default.object, // eslint-disable-line
    color: _propTypes2.default.string.isRequired,
    increment: _propTypes2.default.number.isRequired
  };


  WithNProgress.displayName = 'WithNProgress(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';

  return (0, _reactRedux.connect)(function (state) {
    return {
      increment: state[stateName].increment
    };
  }, null)(WithNProgress);
};

exports.default = withNProgress;
module.exports = exports['default'];