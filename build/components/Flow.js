'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SectionList = require('./SectionList');

var _SectionList2 = _interopRequireDefault(_SectionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Flow extends _react2.default.PureComponent {
  render() {
    const { flow } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        null,
        flow.title
      ),
      _react2.default.createElement(_SectionList2.default, { sections: flow.sections })
    );
  }
}

Flow.propTypes = {
  flow: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired
  })
};

exports.default = Flow;