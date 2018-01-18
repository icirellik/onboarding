'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  icon: {
    color: '#4C4F53'
  }
};

/**
 * A skill is an invdividual, completable task.
 */
class Skill extends _react2.default.PureComponent {
  render() {
    const { name, details, completed } = this.props.skill;
    const iconClass = completed ? 'fa fa-check-circle-o' : 'fa fa-circle-o';
    return _react2.default.createElement(
      _reactBootstrap.Panel,
      { expanded: true, onToggle: () => {} },
      _react2.default.createElement(
        _reactBootstrap.Panel.Heading,
        null,
        _react2.default.createElement('i', { style: styles.icon, className: iconClass }),
        name
      ),
      _react2.default.createElement(
        _reactBootstrap.Panel.Collapse,
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel.Body,
          null,
          _react2.default.createElement(
            'p',
            null,
            details
          )
        )
      )
    );
  }
}

Skill.propTypes = {
  skill: _propTypes2.default.shape({
    completed: _propTypes2.default.bool.isRequired,
    name: _propTypes2.default.string.isRequired,
    details: _propTypes2.default.string.isRequired
  }).isRequired
};

exports.default = Skill;