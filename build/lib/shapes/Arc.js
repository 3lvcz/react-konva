'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var Arc = (function (_Shape) {
  _inherits(Arc, _Shape);

  function Arc() {
    _classCallCheck(this, Arc);

    _Shape.apply(this, arguments);

    this.displayName = 'Arc';
  }

  return Arc;
})(_Shape3['default']);

exports['default'] = Arc;
module.exports = exports['default'];