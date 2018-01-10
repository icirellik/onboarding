'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {};

class Skill extends _react2.default.PureComponent {
  render() {
    const { name, details } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        null,
        name
      ),
      _react2.default.createElement(
        'p',
        null,
        details
      )
    );
  }
}

Skill.propTypes = {
  name: _propTypes2.default.string.isRequired,
  details: _propTypes2.default.string.isRequired
};

exports.default = Skill;