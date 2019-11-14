import React from "react";
import "./style.css";
import { Nav, NavItem, NavLink } from 'reactstrap';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Navbar(props) {
  return (
      <div>
        <Nav tabs>
        <NavItem>
        <NavLink href="/" active>Home</NavLink>
      </NavItem>
          <NavItem>
            <NavLink href="/About" active>About</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/Register" active>Contact</NavLink>
        </NavItem>
  
        
          </Nav>
        </div>
      );
    }

export default Navbar;
