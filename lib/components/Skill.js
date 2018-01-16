import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const styles = {
  icon: {
    color: '#4C4F53',
  }
};

/**
 * A skill is an invdividual, completable task.
 */
class Skill extends React.PureComponent {
  render() {
    const { name, details, completed } = this.props.skill;
    const iconClass = (completed) ? 'fa fa-check-circle-o' : 'fa fa-circle-o';
    return (
      <Panel expanded onToggle={() => {}}>
        <Panel.Heading>
          <i style={styles.icon} className={iconClass}></i>
          {name}
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
