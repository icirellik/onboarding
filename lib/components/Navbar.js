import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppNavbar extends React.PureComponent {
  render() {
	  return (
  	<Navbar>
  		<Navbar.Header>
  			<Navbar.Brand>
  				<a href="#home">React-Bootstrap</a>
  			</Navbar.Brand>
  		</Navbar.Header>
  	</Navbar>);
  }
}

export default AppNavbar;
