'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _konva = require('konva');

var _konva2 = _interopRequireDefault(_konva);

var _util = require('../util');

var _eventsJs = require('../events.js');

var _eventsJs2 = _interopRequireDefault(_eventsJs);

var Base = (function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    _Component.apply(this, arguments);
  }

  Base.prototype.createKonvaNode = function createKonvaNode() {
    return new _konva2['default'][this.displayName](this.getValidProps());
  };

  Base.prototype.componentDidMount = function componentDidMount() {
    this.node = this.createKonvaNode();
    this.updateNodeProps(this.props);
  };

  Base.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    this.updateNodeProps(newProps, this.props);
  };

  Base.prototype.componentWillUnmount = function componentWillUnmount() {
    this.node.destroy();
  };

  Base.prototype.isValidProp = function isValidProp(prop) {
    return prop !== 'children';
  };

  Base.prototype.getValidProps = function getValidProps() {
    var _this = this;

    var props = {};

    Object.keys(this.props).filter(function (prop) {
      return !_eventsJs2['default'][prop] && _this.isValidProp(prop);
    }).forEach(function (prop) {
      return props[prop] = _this.props[prop];
    });

    return props;
  };

  Base.prototype.updateNodeProps = function updateNodeProps(newProps) {
    var oldProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var differences = _util.diff(oldProps, newProps);

    for (var _iterator = differences.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref[0];
      var type = _ref[1];

      var _event = _eventsJs2['default'][prop];
      var value = newProps[prop];

      if (_event) {
        // if an event handler prop
        if (type === 'delete') {
          this.node.off(_event, value);
        } else if (type === 'create') {
          this.node.on(_event, value);
        } else {
          this.node.off(_event);
          this.node.on(_event, value);
        }
      } else if (this.isValidProp(prop)) {
        // if an attribute
        if (type === 'delete') {
          this.node.setAttr(prop, null);
          delete this.node.attrs[prop];
        } else {
          this.node.setAttr(prop, value);
        }
      }
    }
  };

  Base.prototype.render = function render() {
    return _react2['default'].createElement('span', null);
  };

  return Base;
})(_react.Component);

exports['default'] = Base;
module.exports = exports['default'];