import React from 'react';
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

export default SectionList;
