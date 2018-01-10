import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

class SectionList extends React.PureComponent {
  render() {
    const { sections } = this.props;
    return (
      <div>
        {sections.map(section =>
          <Section
            key={section.title}
            section={section}
          />
        )}
      </div>
    );
  }
}

SectionList.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      skills: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SectionList;
