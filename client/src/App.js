import React, { Component } from "react";
import "./App.css";
// import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Sidebar from "./components/sidebar";
// import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Sidebar/>

         

          {/* <About /> */}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// console.log("hello");

export default App;
