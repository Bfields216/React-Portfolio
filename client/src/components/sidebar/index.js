// import React from 'react'
import "./style.css"

import meI from "../assets/Me.jpg";
// // import List from '@material-ui/core/List'
// // import ListItem from '@material-ui/core/ListItem'
// // import ListItemText from '@material-ui/core/ListItemText'
import { Container } from "reactstrap";
// import { Nav, NavItem, Link } from "reactstrap";

import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

// function Sidebar() {
//   return (

//     <div className="sidebar">
//     <Container>
//     <div>Welcome to the Portfolio of Brandon Fields</div>
//     <br/>
//  

//           <Nav>
//         <NavItem>
//         <NavLink
//             href="/" active><FaHome />

//           </NavLink>
//         </NavItem>

//         <NavLink
//           href="https://www.linkedin.com/in/brandon-fields-932015b1/"
//           active

//         ><AiFillLinkedin/>

//         </NavLink>
//         <NavLink  href="https://github.com/Bfields216" active><GoMarkGithub />

//         </NavLink>
//       </Nav>
//   </Container>
//     </div>
//   )
// }

// export default Sidebar

import React from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar 
        sidebar={
          <div id='app'>
            <h1 id="header">Welcome to Brandon Fields Port</h1>
            {/* <Link to="/About">About</Link> */}
    <img
              src={meI}
              alt="me"
              style={{ width: "17%",  border: "solid" , borderRadius: "30%", marginLeft: "5%" }}
            />
          
            <br/>
            
             <div id='icon'>
                <Link href="/" active>
                  <h1 id="home">
                    <FaHome />
                  </h1>
                </Link>
              
              
            
            <Link a href="https://github.com/Bfields216">
              <h1 id='Git'> 
                <GoMarkGithub />
              </h1>
            </Link>
            <Link a href="https://www.linkedin.com/in/brandon-fields-932015b1/">
              <h1 id="link">
                <AiFillLinkedin />
              </h1>{" "}
            </Link></div>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        // styles={{ sidebar: { position: "unset" }  }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          <p>Open sidebar</p>
        </button>
      </Sidebar>
    );
  }
}

export default App;
