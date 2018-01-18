'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _SkillList = require('./SkillList');

var _SkillList2 = _interopRequireDefault(_SkillList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  panel: {
    marginBottom: "10px"
  },
  panelHeader: {
    color: "#4C4F53",
    fontSize: "3.1em"
  },
  panelBody: {
    color: "#4C4F53",
    fontSize: "1.7em"
  }
};

/**
 * A section is a collapsible panel that contains a set of skills.
 */
class Section extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      open: true
    }, this.toggleArticle = () => {
      this.setState({
        open: !this.state.open
      });
    }, _temp;
  }

  render() {
    const { title, skills } = this.props.section;
    return _react2.default.createElement(
      _reactBootstrap.Panel,
      {
        expanded: !this.state.open,
        onToggle: () => {},
        style: styles.panel
      },
      _react2.default.createElement(
        _reactBootstrap.Panel.Heading,
        {
          onClick: this.toggleArticle,
          style: styles.panelHeader
        },
        title
      ),
      _react2.default.createElement(
        _reactBootstrap.Panel.Collapse,
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel.Body,
          {
            style: styles.panelBody
          },
          _react2.default.createElement(_SkillList2.default, { skills: skills })
        )
      )
    );
  }
}

Section.propTypes = {
  section: _propTypes2.default.shape({
    skills: _propTypes2.default.array.isRequired,
    title: _propTypes2.default.string.isRequired
  }).isRequired
};

exports.default = Section;