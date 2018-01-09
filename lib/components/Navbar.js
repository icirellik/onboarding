import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppNavbar extends React.PureComponent {
  render() {
	  return (
  	<Navbar style={{backgroundColor: "#44C938"}}>
  		<Navbar.Header>
  			<Navbar.Brand>
  				<h1 style={{color: "#4C4F53", fontSize: "4em"}}>Hyland Onboarding Happiness</h1>
  			</Navbar.Brand>
  		</Navbar.Header>
  	</Navbar>);
  }
}

export default AppNavbar;
