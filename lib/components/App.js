import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Flow from './Flow';
import Login from './Login';
import Navbar from './Navbar';
import PinEntry from './PinEntry';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  appState = () => {
    const { flows } = this.props.store.getState();
    return { flows };
  }
  state = this.appState();
  onStoreChange = () => {
    this.setState(this.appState);
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
}
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    const { flows } = this.state;
    const isAuthenticated = this.props.store.isAuthenticated();

    if (!isAuthenticated) {
      return (
        <div>
          <Navbar />
          <Switch>
            <Redirect exact from="/" to='/login' />
            <Route path='/login' component={Login} />
            <Route path='/pin-entry' component={PinEntry} />
          </Switch>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(props) => (
            <Flow flow={flows[0]} />
          )} />
          <Route path='/login' component={Login} />
          <Route path='/pin-entry' component={PinEntry} />
          <Route render={(props) => (
            <Flow flow={flows[0]} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
