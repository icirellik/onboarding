import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

/**
 * Renders a list of skills within a section.
 */
class SkillList extends React.PureComponent {
  render() {
    const  { skills } = this.props;
    return (
      <div>
        {skills.map((skill, i) =>
          <Skill
            key={i}
            skill={skill}
          />
        )}
      </div>
    );
  }
}

SkillList.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default SkillList;
