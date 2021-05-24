import React from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="heading">
        <h3><b>Natural Events Tracker</b></h3>
        <small>(Using NASA Open APIs)</small>
      </div>
      <Navbar dark expand="xs" className="navbarbg">
         <div className="container">
              <Nav navbar>
                <NavItem >
                  <NavLink className="nav-link" to="/wildfire">Wildfire</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/volcano">Volcanoes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/iceberg">Sea and Lake Ice</NavLink>
                </NavItem>
              </Nav>
         </div>
      </Navbar>
    </header>
  );
}

export default Header;
