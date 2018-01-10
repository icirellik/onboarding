import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const styles = {

};

class Skill extends React.PureComponent {
  render() {
    const { name, details, completed } = this.props.skill;
    const iconClass = (completed) ? 'fa fa-check-circle-o' : 'fa fa-circle-o';
    return (
      <Panel>
        <Panel.Heading>
          <i
            style={{color: "#4C4F53"}}
            className={iconClass}
          ></i>{name}
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <p>{details}</p>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

Skill.propTypes = {
  skill: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default Skill;
