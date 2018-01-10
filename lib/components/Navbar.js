import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const styles =  {
  header: {
    color: "#fff",
    fontSize: "3em",
  },
};

class AppNavbar extends React.PureComponent {
  render() {
    return (
    <Navbar style={{backgroundColor: "#44C938"}}>
      <Navbar.Header style={styles.header}>
        Hyland Onboarding
      </Navbar.Header>
    </Navbar>);
  }
}

export default AppNavbar;
