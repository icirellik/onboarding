import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppNavbar extends React.PureComponent {
  render() {
	  return (
  	<Navbar style={{backgroundColor: "#44C938"}}>
  		<Navbar.Header style={{color: "#fff", fontSize: "3em"}}>Hyland Onboarding Happiness</Navbar.Header>
  	</Navbar>);
  }
}

export default AppNavbar;
