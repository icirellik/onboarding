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
  navBarHeader: {
    color: "#fff",
    fontSize: "3em"
  },
  navBar: {
    backgroundColor: "#44C938"
  }
};

class AppNavbar extends _react2.default.PureComponent {
  render() {
    return _react2.default.createElement(
      _reactBootstrap.Navbar,
      { style: styles.navBar },
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        { style: styles.navBarHeader },
        this.props.i18n.header
      )
    );
  }
}

AppNavbar.propTypes = {
  i18n: _propTypes2.default.object.isRequired
};

exports.default = AppNavbar;