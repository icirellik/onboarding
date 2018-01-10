import React from 'react';
import PropTypes from 'prop-types';
import SkillList from './SkillList';

const styles = {

};

class Section extends React.PureComponent {
  render() {
    const { title, skills } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <SkillList skills={skills} />
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.object.isRequired,
};

export default Section;
