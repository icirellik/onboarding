'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SectionList = require('./SectionList');

var _SectionList2 = _interopRequireDefault(_SectionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A flow contains mutliple different sections that each have completable
 * skills.
 */
class Flow extends _react2.default.PureComponent {
  render() {
    const { title, sections } = this.props.flow.data[0];
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        null,
        title
      ),
      _react2.default.createElement(_SectionList2.default, { sections: sections })
    );
  }
}

Flow.propTypes = {
  flow: _propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    data: _propTypes2.default.array.isRequired
  }).isRequired
};

exports.default = Flow;