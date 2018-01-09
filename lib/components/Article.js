import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';
import { Panel } from 'react-bootstrap';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};
const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

class Article extends React.PureComponent {
  state = {
    open: true,
  };
  toggleArticle = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    const { article, author } = this.props;
    return (
      <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
        <Panel.Heading onClick={this.toggleArticle}>{article.title}</Panel.Heading>
				<Panel.Collapse>
					<Panel.Body>{article.body}</Panel.Body>
				</Panel.Collapse>
			</Panel>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
