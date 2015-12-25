'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

var Container = (function (_Base) {
  _inherits(Container, _Base);

  function Container() {
    _classCallCheck(this, Container);

    _Base.call(this);
    this.node = new Set();
  }

  Container.prototype.getChildContext = function getChildContext() {
    return {
      container: this.node
    };
  };

  Container.prototype.componentDidMount = function componentDidMount() {
    var _this = this;

    var mountedChildNodes = this.node;
    _Base.prototype.componentDidMount.call(this);
    mountedChildNodes.forEach(function (node) {
      return _this.node.add(node);
    });
  };

  Container.prototype.render = function render() {
    return _react2['default'].createElement(
      'span',
      null,
      _react2['default'].Children.map(this.props.children, function (child) {
        return child ? _react2['default'].cloneElement(child) : null;
      })
    );
  };

  return Container;
})(_Base3['default']);

Container.childContextTypes = {
  container: _react2['default'].PropTypes.object.isRequired
};

Container.propTypes = {
  children: _react2['default'].PropTypes.any
};

exports['default'] = Container;
module.exports = exports['default'];