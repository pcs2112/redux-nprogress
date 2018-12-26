"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNProgress = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _nprogress = _interopRequireDefault(require("nprogress"));

var _utils = require("./utils");

var _NProgressTemplate = require("./NProgressTemplate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withNProgress = function withNProgress() {
  var WrappedComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _NProgressTemplate.NProgressTemplate;
  var stateName = arguments.length > 1 ? arguments[1] : undefined;

  var WithNProgress =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithNProgress, _Component);

    function WithNProgress() {
      _classCallCheck(this, WithNProgress);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithNProgress).apply(this, arguments));
    }

    _createClass(WithNProgress, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        if ((0, _utils.isDOMAvailable)()) {
          var _this$props = this.props,
              nprogress = _this$props.nprogress,
              color = _this$props.color;
          var template = (0, _server.renderToString)(_react.default.createElement(WrappedComponent, {
            color: color
          }));

          _nprogress.default.configure(_objectSpread({}, nprogress, {
            template: template
          }));
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if ((0, _utils.isDOMAvailable)()) {
          var increment = nextProps.increment;

          if (increment === 0) {
            _nprogress.default.done();
          } else {
            _nprogress.default.inc();
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if ((0, _utils.isDOMAvailable)()) {
          _nprogress.default.remove();
        }
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return WithNProgress;
  }(_react.Component);

  _defineProperty(WithNProgress, "propTypes", {
    nprogress: _propTypes.default.object,
    // eslint-disable-line
    color: _propTypes.default.string.isRequired,
    increment: _propTypes.default.number.isRequired
  });

  WithNProgress.displayName = "WithNProgress(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
  return (0, _reactRedux.connect)(function (state) {
    return {
      increment: state[stateName].increment
    };
  }, null)(WithNProgress);
};

exports.withNProgress = withNProgress;