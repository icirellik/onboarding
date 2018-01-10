import React from 'react';
import PropTypes from 'prop-types';
import SectionList from './SectionList';

class Flow extends React.PureComponent {
  render() {
    const { flow } = this.props;
    return (
      <div>
        <h3>{flow.title}</h3>
        <SectionList sections={flow.sections} />
      </div>
    );
  }
}

Flow.propTypes = {
  flow: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
  })
};

export default Flow;
