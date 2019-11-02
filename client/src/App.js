import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Nav from "./components/Nav"
// import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return(
    // <Router>
    // <div>
    //   <Switch>
    //     <Route path="/" Component={Home} />
    //   </Switch>
    //   </div>
    // </Router>
    
    <div>
      <Nav />
      <Home />
    </div>
  )
}console.log("hello")

export default App;
