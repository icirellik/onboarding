import React from 'react';

class Flow extends React.PureComponent {
  render() {
    const { name, details } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p>{details}</p>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })
};

export default Flow;
