'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Layer2 = require('./Layer');

var _Layer3 = _interopRequireDefault(_Layer2);

var FastLayer = (function (_Layer) {
  _inherits(FastLayer, _Layer);

  function FastLayer() {
    _classCallCheck(this, FastLayer);

    _Layer.apply(this, arguments);

    this.displayName = 'FastLayer';
  }

  return FastLayer;
})(_Layer3['default']);

exports['default'] = FastLayer;
module.exports = exports['default'];