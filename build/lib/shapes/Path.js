'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var Path = (function (_Shape) {
  _inherits(Path, _Shape);

  function Path() {
    _classCallCheck(this, Path);

    _Shape.apply(this, arguments);

    this.displayName = 'Path';
  }

  return Path;
})(_Shape3['default']);

exports['default'] = Path;
module.exports = exports['default'];