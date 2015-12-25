'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _konva = require('konva');

var _konva2 = _interopRequireDefault(_konva);

var _abstractContainer = require('./abstract/Container');

var _abstractContainer2 = _interopRequireDefault(_abstractContainer);

var Stage = (function (_Container) {
  _inherits(Stage, _Container);

  function Stage() {
    _classCallCheck(this, Stage);

    _Container.apply(this, arguments);

    this.displayName = 'Stage';
  }

  Stage.prototype.createKonvaNode = function createKonvaNode() {
    return new _konva2['default'].Stage({
      container: _reactDom2['default'].findDOMNode(this.refs.canvas)
    });
  };

  Stage.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('div', { ref: 'canvas' }),
      _react2['default'].Children.map(this.props.children, function (child) {
        return child ? _react2['default'].cloneElement(child) : null;
      })
    );
  };

  return Stage;
})(_abstractContainer2['default']);

Stage.propTypes = {
  children: _react2['default'].PropTypes.any
};

exports['default'] = Stage;
module.exports = exports['default'];