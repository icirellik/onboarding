import React from 'react';

import Skill from './Skill';

class SkillList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.skills).map((skills, i) =>
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
