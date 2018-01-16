import React from 'react';
import PropTypes from 'prop-types';
import SectionList from './SectionList';

/**
 * A flow contains mutliple different sections that each have completable
 * skills.
 */
class Flow extends React.PureComponent {
  render() {
    const { title, sections } = this.props.flow.data[0];
    return (
      <div>
        <h3>{title}</h3>
        <SectionList sections={sections} />
      </div>
    );
  }
}

Flow.propTypes = {
  flow: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }).isRequired,
};

export default Flow;
