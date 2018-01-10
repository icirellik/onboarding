'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SkillList = require('SkillList');

var _SkillList2 = _interopRequireDefault(_SkillList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {};

class Section extends _react2.default.PureComponent {
  render() {
    const { title, skills } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        null,
        title
      ),
      _react2.default.createElement(_SkillList2.default, { skills: skills })
    );
  }
}

Section.propTypes = {
  title: _propTypes2.default.string.isRequired,
  skills: _propTypes2.default.object.isRequired
};

exports.default = Section;