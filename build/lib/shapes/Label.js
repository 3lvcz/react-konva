'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _abstractContainerComponent = require('../abstract/ContainerComponent');

var _abstractContainerComponent2 = _interopRequireDefault(_abstractContainerComponent);

var Label = (function (_ContainerComponent) {
  _inherits(Label, _ContainerComponent);

  function Label() {
    _classCallCheck(this, Label);

    _ContainerComponent.apply(this, arguments);

    this.displayName = 'Label';
  }

  return Label;
})(_abstractContainerComponent2['default']);

exports['default'] = Label;
module.exports = exports['default'];