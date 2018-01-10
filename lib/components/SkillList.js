import React from 'react';

import Skill from './Skill';

class SkillList extends React.PureComponent {
  render() {
    const  { skills } = this.props;
    return (
      <div>
        {Object.values(skills).map((skill, i) =>
          <Skill
            key={i}
            skill={skill}
          />
        )}
      </div>
    );
  }
}

export default SkillList;
