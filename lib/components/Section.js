import React from 'react';
import PropTypes from 'prop-types';
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
    const { title, skills } = this.props;
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
  title: PropTypes.string.isRequired,
  skills: PropTypes.object.isRequired,
};

export default Section;
