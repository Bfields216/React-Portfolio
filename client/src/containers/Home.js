import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import { Container } from "reactstrap";
// import Image from "../components/assets/spacesky.jpg"
import meI from "../components/assets/Me.jpg";
// import Card from "react-bootstrap/Card";
import { List } from "../components/List";
// import Nav from "../components/Nav"
import Navbar from "../components/NavBar";
import Background from "../components/assets/Desert-Nights.jpg";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
// import Roll from "react-reveal/Roll";

// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
import "../App.css";

// import Button from 'react-bootstrap/Button';

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})` }}>
        <Navbar />
        {/* const ParallaxImage = () => ( */}
        {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src={Image} /> */}
        {/* <Roll> */}
          <div
            className="jumbotron"
            style={{
              color: "white",
              textAlign: "center",
              margin: "auto",
              backgroundImage: `url(${Background})`
            }}
          >
            <h1><strong>The Portfolio of Brandon Fields</strong></h1>
            {/* <br /> */}
            {/* <p>
            {" "}
            Thank you for taking the time to check out my portfolio, if you have
            any questions please don't hesitate to contact me!{" "}
          </p> */}
            {/* <br/>
          <br/>
          <br/> */}
            <br />
            

           
           
          </div>
          
          <Container
            style={{
              border: "solid",
              margin: "auto",
              textAlign: "center",
              color: "white"
            }}
          >
            {/* <Row>
            <Col  > */}
            <div>
              <Zoom>
                <h4>FULL-STACK Software Developer from Atlanta, GA.</h4>
                <li>
                  <b>Brandon Fields</b>
                </li>
                <li>
                  <b>02-May-1991</b>
                </li>
                {/* <li>
              <b> 216-952-1738 </b>
            </li> */}
                <li>
                  <b>Atlanta, Georgia </b>
                </li>

                <li>
                  <a href="mailto:Brandonfields2010@gmail.com">
                    {" "}
                    Brandonfields2010@gmail.com
                  </a>{" "}
                </li>

                <li>
                  <a href="https://github.com/Bfields216">B-Fields - Github</a>
                </li>

                <a href="https://drive.google.com/file/d/1wW8Q3gQYmWGft4FhzyvGqLIf-Ov5gwnT/view?usp=sharing">
                  <h4>
                    <font>
                      <font>View My CV Here</font>
                    </font>
                  </h4>
                </a>
              </Zoom>
            </div>
            <section>
              <Zoom>
                <h3>My Skills</h3>
                <div>
                  <h4>
                    <font>
                      <font>
                        Web development / Full Stack Development / Front End /
                        Back End{" "}
                      </font>
                    </font>
                  </h4>
                  <p>
                    <font>
                      <font>
                        {" "}
                        Htlm5 / Css3 / Boostrap / Git / Github / Javascript /
                        Jquery / Frameworks / React.js / Node.js / MySQL /
                        Express / Handlebars / Sequelize / Mongo-Mongoose / Java{" "}
                      </font>
                    </font>
                  </p>
                </div>
              </Zoom>
            </section>
          </Container>
          <br/>
          {/* </Parallax> ); */}
          <div>
          <img
              src={meI}
              alt="me"
              style={{ width: "29%",  border: "solid" , borderRadius: "50%", marginLeft: "36%" }}
            />
          </div>
          <br />
          <div>
            <br />
            <Container fluid>
              <Flip>
                <h1
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    color: "white"
                  }}
                >
                  About Me
                </h1>
                <p
                  className="row"
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    color: "white"
                  }}
                >
                  My name is Brandon Fields I am from Cleveland Ohio. Full Stack
                  Developer looking for his start in the Tech Industry. Proven
                  skills in multitasking and handling crisis management.
                  Increased utilization of Google Apps for the benefit of the
                  DeKalb County Board of Commissioners. Managed day to day
                  operations for a County Commissioner that had over 740,000
                  citizens, conflict resolution was a key to managing requests
                  and calls. Highly proficient in Microsoft Office, HTML, CSS,
                  Javascript, Jquery, NodeJS, AJAX, Github, Reactjs. Excellent
                  communicator who is able to understand any audience and
                  effectively connect with all levels of management. Georgia
                  Tech Full Stack Development Bootcamp Certification.
                  <br />
                  <br />
                  <strong style={{ margin: "auto" }}>
                    Check The Portoflio on the bottom of this page to see games
                    I've created.
                  </strong>
                  <br />
                </p>
                <br />
                {/* <Card style={{ width: "18rem", margin:'auto' }}>
              
              <Card.Body>
                <Card.Title>Quick Facts About Me</Card.Title>
                <Card.Text>
                  Interested in exploring careers in Full Stack Development and
                  working freelance.
                </Card.Text>
                
              </Card.Body>
            </Card> */}
                {/* <br /> */}
              </Flip>
            </Container>{" "}
          </div>
          <br />
          <br />
          <div style={{ textAlign: "center", color: "white" }}>
            <h1> Portfolio </h1>
          </div>
          <br />
          <br />
          <List>
            <div style={{ color: "white" }}>
              <a href="http://drinkson.herokuapp.com/">
                <h3>Drinks on Us</h3>
              </a>

              <p>
                Drinkson is a mobile web app that allows users to check in to a
                bar and order drinks via the mobile app with the tap of your
                finger. You can also send drinks to other users that have
                checked in the same location. - pay with your phone - apple pay,
                PayPal - the card on file during sign up - age verification: add
                drivers licenses number, birthdate and full name - Convenience,
                not having to wait in line and spend more time with the people
                you are with, promotes more human interaction, self-service
                option, payment security so bars don't have hold debit cards.
                Research- Chickfila the app, Starbucks app, Uber Eats
                self-service options give you instant access to order drinks
                from a nearby bar without the the hassle of having to wait in
                line all through the click of a button allows users to send
                drins to other users on the app that are in that same location
                through check-ins.
              </p>
            </div>
            <div style={{ color: "white" }}>
              <a href="https://bfields216.github.io/RealTime/">
                <h3>
                  <b>Real-Time</b>
                </h3>
              </a>
              {/* <!-- <p><strong>Real-Time</strong></p> --> */}
              <p>
                RealTime is an application that allows a user to retrieve
                information based on their geolocation. The user will have a map
                of their current locaiton provided via google maps that is
                constantly displayed, along with the 10 day local weather
                forecast, for the user. This application is maintained and
                supported by our RealTime Team: Mutahir Chaudhry, Brandon
                Fields, Ryan Hart, Jeremiah Graham.
              </p>
            </div>
          </List>
        {/* </Roll> */}
        <br />
            <br />
        <Container
          style={{
            border: "solid",
            margin: "auto",
            textAlign: "center",
            color: "white"
          }}
        >
          {/* <Row>
            <Col  > */}
            
          <div>
            {/* <Zoom> */}
              <h4>Contact Me </h4>
              {/* <li>
              <b>Brandon Fields</b>
            </li>
            <li>
              <b>02-May-1991</b>
            </li> */}
              {/* <li>
              <b> 216-952-1738 </b>
            </li> */}
              {/* <li>
              <b>Atlanta, Georgia </b>
            </li> */}

              <li>
                <a href="mailto:Brandonfields10@icloud.com">
                  {" "}
                  Brandonfields10@icloud.com
                </a>{" "}
              </li>

              <li>
                <a href="https://github.com/Bfields216">B-Fields - Github</a>
              </li>

              <a href="https://docs.google.com/document/d/1Y3MRNlb6hpDuQFarkUCYLkU5A3SMCfjtM36-16iFKOQ/edit?usp=sharing">
                <h4>
                  <font>
                    <font>View My CV Here</font>
                  </font>
                </h4>
              </a>
            {/* </Zoom> */}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
