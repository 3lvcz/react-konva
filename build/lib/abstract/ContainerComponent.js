'use strict';

exports.__esModule = true;
var _slice = Array.prototype.slice;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container2 = require('./Container');

var _Container3 = _interopRequireDefault(_Container2);

var ContainerComponent = (function (_Container) {
  _inherits(ContainerComponent, _Container);

  function ContainerComponent() {
    _classCallCheck(this, ContainerComponent);

    _Container.apply(this, arguments);
  }

  ContainerComponent.prototype.componentDidMount = function componentDidMount() {
    var _Container$prototype$componentDidMount;

    (_Container$prototype$componentDidMount = _Container.prototype.componentDidMount).call.apply(_Container$prototype$componentDidMount, [this].concat(_slice.call(arguments)));
    this.context.container.add(this.node);
  };

  return ContainerComponent;
})(_Container3['default']);

ContainerComponent.contextTypes = {
  container: _react2['default'].PropTypes.object.isRequired
};

exports['default'] = ContainerComponent;
module.exports = exports['default'];