import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import SkillList from './SkillList';

const styles = {
  panel: {
    marginBottom: "10px",
  },
  panelHeader: {
    color: "#4C4F53",
    fontSize: "3.1em",
  },
  panelBody: {
    color: "#4C4F53",
    fontSize: "1.7em",
  },
};

/**
 * A section is a collapsible panel that contains a set of skills.
 */
class Section extends React.PureComponent {
  state = {
    open: true,
  };

  toggleArticle = () => {
    this.setState({
      open: !this.state.open,
    })
  };

  render() {
    const { title, skills } = this.props.section;
    return (
      <Panel
        expanded={!this.state.open}
        onToggle={() => {}}
        style={styles.panel}
      >
        <Panel.Heading
          onClick={this.toggleArticle}
          style={styles.panelHeader}
        >
          {title}
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body
            style={styles.panelBody}
          >
            <SkillList skills={skills} />
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

Section.propTypes = {
  section: PropTypes.shape({
    skills: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Section;
