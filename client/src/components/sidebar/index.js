import React from 'react'
import "./style.css"

import meI from "../assets/Me.jpg"
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import { Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from "reactstrap";

import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

function Sidebar() {
  return (
   
    <div className="sidebar"> 
    <Container>
    <div>Welcome to the Portfolio of Brandon Fields</div>
    <br/>
    <div>
          <img
              src={meI}
              alt="me"
              style={{ width: "29%",  border: "solid" , borderRadius: "50%", marginLeft: "6%" }}
            />
          </div>
          <br/>
  
          <Nav>
        <NavItem>
        <NavLink
            href="/" active><FaHome />
           
          </NavLink>
        </NavItem>
        
        <NavLink 
          href="https://www.linkedin.com/in/brandon-fields-932015b1/"
          active
          
        ><AiFillLinkedin/>
          
        </NavLink>
        <NavLink  href="https://github.com/Bfields216" active><GoMarkGithub />   
        
        </NavLink>
      </Nav>
  </Container>
    </div>
  )
}

export default Sidebar