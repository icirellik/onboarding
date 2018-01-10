import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
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
    const { articles, flows, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }
  state = this.appState();
  onStoreChange = () => {
    this.setState(this.appState);
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE)
          || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Navbar />
        <ArticleList
          articles={articles}
          flows={flows}
        />
      </div>
    );
  }
}

export default App;
