'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRouterDom = require('react-router-dom');

var _Flow = require('./Flow');

var _Flow2 = _interopRequireDefault(_Flow);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _MarketingInfo = require('./MarketingInfo');

var _MarketingInfo2 = _interopRequireDefault(_MarketingInfo);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _PinEntry = require('./PinEntry');

var _PinEntry2 = _interopRequireDefault(_PinEntry);

var _PrivateRoute = require('./PrivateRoute');

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.appState = () => {
      const { flows, i18n } = this.props.store.getState();
      return { flows, i18n };
    }, this.state = this.appState(), this.onStoreChange = () => {
      this.setState(this.appState);
    }, _temp;
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    const { flows, i18n } = this.state;
    const isAuthenticated = this.props.store.isAuthenticated();

    if (!isAuthenticated) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { i18n: i18n }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _MarketingInfo2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/pin-entry', component: _PinEntry2.default })
        )
      );
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Navbar2.default, { i18n: i18n }),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: props => _react2.default.createElement(_Flow2.default, { flow: flows[0] }) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/pin-entry', component: _PinEntry2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { render: props => _react2.default.createElement(_Flow2.default, { flow: flows[0] }) })
      )
    );
  }
}

App.childContextTypes = {
  store: _propTypes2.default.object
};
exports.default = App;