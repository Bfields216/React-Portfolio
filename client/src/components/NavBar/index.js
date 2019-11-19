import React from "react";
import "./style.css";
import { Nav, NavItem, NavLink } from "reactstrap";

import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
// import Sidebar from 'react-bootstrap-sidebar';


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Navbar(props) {
  
  return (
    
    <div style={{backgroundcolor:'transparent'}}>
      <Nav>
        <NavItem>
        <NavLink
         style={{backgroundcolor: 'transparent', width: '72px;', height: '50px;' }}   href="/" active><FaHome />
           
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink href="/About" active>
            About
          </NavLink>
        </NavItem> */}
        {/* <NavItem>
          <NavLink href="/Register" active>
            Contact
          </NavLink> */}
        {/* </NavItem> */}
        <NavLink 
          href="https://www.linkedin.com/in/brandon-fields-932015b1/"
          active
        ><AiFillLinkedin/>
          
        </NavLink>
        <NavLink  href="https://github.com/Bfields216" active><GoMarkGithub />   
        
        </NavLink>
      </Nav>
    </div>
  );
}

export default Navbar;
