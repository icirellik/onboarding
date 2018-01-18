'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a list of sections within a flow.
 */
class SectionList extends _react2.default.PureComponent {
  render() {
    const { sections } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      sections.map(section => _react2.default.createElement(_Section2.default, {
        key: section.title,
        section: section
      }))
    );
  }
}

SectionList.propTypes = {
  sections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    skills: _propTypes2.default.array.isRequired,
    title: _propTypes2.default.string.isRequired
  })).isRequired
};

exports.default = SectionList;