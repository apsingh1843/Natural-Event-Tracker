import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="heading">
        <h3><b>Natural Event Tracker</b></h3>
        <small>(Using NASA Open APIs)</small>
      </div>
      <Navbar dark expand="xs" className="navbarbg">
         <div className="container">
              <Nav navbar>
                <NavItem >
                  <NavLink className="nav-link" to="/wildfire">Wildfire</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/">Volcanoes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/">Sea and Lake Ice</NavLink>
                </NavItem>
              </Nav>
         </div>
      </Navbar>
    </header>
  );
}

export default Header;
