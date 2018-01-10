import React from 'react';
import PropTypes from 'prop-types';

const styles = {

};

class Skill extends React.PureComponent {
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

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Skill;
