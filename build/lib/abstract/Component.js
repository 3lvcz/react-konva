'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

var Component = (function (_Base) {
  _inherits(Component, _Base);

  function Component() {
    _classCallCheck(this, Component);

    _Base.apply(this, arguments);
  }

  Component.prototype.componentDidMount = function componentDidMount() {
    _Base.prototype.componentDidMount.call(this);
    this.context.container.add(this.node);
  };

  return Component;
})(_Base3['default']);

Component.contextTypes = {
  container: _react2['default'].PropTypes.object.isRequired
};

exports['default'] = Component;
module.exports = exports['default'];