import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import Flow from './Flow';
import Navbar from './Navbar';

class App extends React.PureComponent {
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
    return (
      <div>
        <Navbar />
        <Flow flow={flows[0]} />
      </div>
    );
  }
}

export default App;
