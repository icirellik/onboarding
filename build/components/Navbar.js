'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  header: {
    color: "#fff",
    fontSize: "3em"
  }
};

class AppNavbar extends _react2.default.PureComponent {
  render() {
    return _react2.default.createElement(
      _reactBootstrap.Navbar,
      { style: { backgroundColor: "#44C938" } },
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        { style: styles.header },
        'Hyland Onboarding'
      )
    );
  }
}

exports.default = AppNavbar;