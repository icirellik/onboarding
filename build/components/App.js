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

var _Flow = require('./Flow');

var _Flow2 = _interopRequireDefault(_Flow);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.appState = () => {
      const { articles, flows, searchTerm } = this.props.store.getState();
      return { articles, flows, searchTerm };
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
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    const { flows } = this.state;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Navbar2.default, null),
      _react2.default.createElement(_Flow2.default, {
        flows: flows
      })
    );
  }
}

App.childContextTypes = {
  store: _propTypes2.default.object
};
exports.default = App;