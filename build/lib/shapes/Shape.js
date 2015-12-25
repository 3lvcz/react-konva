'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _abstractComponent = require('../abstract/Component');

var _abstractComponent2 = _interopRequireDefault(_abstractComponent);

var Shape = (function (_Component) {
  _inherits(Shape, _Component);

  function Shape() {
    _classCallCheck(this, Shape);

    _Component.apply(this, arguments);
  }

  return Shape;
})(_abstractComponent2['default']);

exports['default'] = Shape;
module.exports = exports['default'];