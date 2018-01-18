'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Skill = require('./Skill');

var _Skill2 = _interopRequireDefault(_Skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a list of skills within a section.
 */
class SkillList extends _react2.default.PureComponent {
  render() {
    const { skills } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      skills.map((skill, i) => _react2.default.createElement(_Skill2.default, {
        key: i,
        skill: skill
      }))
    );
  }
}

SkillList.propTypes = {
  skills: _propTypes2.default.array.isRequired
};

exports.default = SkillList;