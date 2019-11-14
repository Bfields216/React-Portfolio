import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import { Container } from "reactstrap";
// import Image from "../components/assets/spacesky.jpg"
import meI from "../components/assets/Me.jpg";
// import Card from "react-bootstrap/Card";
import { List } from "../components/List";
// import Navbar from "../components/NavBar";
import Background from "../components/assets/Desert-Nights.jpg";
// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
import "../App.css";

// import Button from 'react-bootstrap/Button';

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})` }}>
        {/* <Navbar /> */}
        {/* const ParallaxImage = () => ( */}
        {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src={Image} /> */}

        <div
          className="jumbotron"
          style={{
            color: "white",
            textAlign: "center",
            margin: "auto",
            backgroundImage: `url(${Background})`
          }}
        >
          <p>The Portfolio of Brandon Fields</p>
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
          <br />
          <br />

          <img
            src={meI}
            alt="me"
            style={{ width: "29%", height: "379px", border: "solid" }}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
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
          </div>
          <section>
            <h3>My Skills</h3>
            <div>
              <h4>
                <font>
                  <font>
                    Web development / Full Stack Development / Front End / Back
                    End{" "}
                  </font>
                </font>
              </h4>
              <p>
                <font>
                  <font>
                    {" "}
                    Htlm5 / Css3 / Boostrap / Git / Github / Javascript / Jquery
                    / Frameworks / React.js / Node.js / MySQL / Express /
                    Handlebars / Sequelize / Mongo-Mongoose / Java{" "}
                  </font>
                </font>
              </p>
            </div>
          </section>
        </Container>
        {/* </Parallax> ); */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <br />
          <Container fluid>
            <h1 style={{ textAlign: "center", margin: "auto", color: "white" }}>
              About Me
            </h1>
            <p
              className="row"
              style={{ textAlign: "center", margin: "auto", color: "white" }}
            >
              My name is Brandon Fields I am from Cleveland Ohio. Full Stack
              Developer looking for his start in the Tech Industry. Proven
              skills in multitasking and handling crisis management. Increased
              utilization of Google Apps for the benefit of the DeKalb County
              Board of Commissioners. Managed day to day operations for a County
              Commissioner that had over 740,000 citizens, conflict resolution
              was a key to managing requests and calls. Highly proficient in
              Microsoft Office, HTML, CSS, Javascript, Jquery, NodeJS, AJAX,
              Github, Reactjs. Excellent communicator who is able to understand
              any audience and effectively connect with all levels of
              management. Georgia Tech Full Stack Development Bootcamp
              Certification.
              <br />
              <br />
              <strong style={{ margin: "auto" }}>
                Check The Portoflio on the bottom of this page to see games I've
                created.
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
          </Container>{" "}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center", color: "white" }}>
          <h1> Portfolio </h1>
        </div>
        <br />
        <br />
        <List>
          <div style={{ color: "white" }}>
            <a href="https://bfields216.github.io/project3/">
              <h3>Drinks on Us</h3>
            </a>

            <p>
              Drinkson is an mobile web app that allows users to checkin to a
              bar and order drinks via the mobile app with the tap of your
              finger. You can alsosedn drinks to other users that have checked
              in to the same location. - pay with your phone - apple pay, paypal
              - card on file during siginup - age verification: add drivers
              licences number, birthdate and full name - Covience, not having to
              wait in line and spend more time with the people you are with,
              promotes more human interaction, self service option, payment
              security so bars don't have hold debit cards. Research- Chickfila
              app, Starbucks app, Uber Eats self service options gives you
              instant access to order drinks from a nearby bar without the
              hassle of having to wait inline all through the click of a button
              allows users to send drins to other users on the app that are in
              that same location throught check-ins.
            </p>
          </div>
          <div style={{ color: "white" }}>
            <a href="https://intense-basin-17439.herokuapp.com/">
              <h3>
                <b>Friend-Finder</b>
              </h3>
            </a>

            <p>
              In this activity, you'll build a compatibility-based
              "FriendFinder" application -- basically a dating app. This
              full-stack site will take in results from your users' surveys,
              then compare their answers with those from other users. The app
              will then display the name and picture of the user with the best
              overall match. You will use Express to handle routing. Make sure
              you deploy your app to Heroku so other users can fill it out.
            </p>
          </div>
          <div style={{ color: "white" }}>
            <a href="https://bfields216.github.io/Giphy-Homework/">
              <h3>
                <b>NBA Giphy Search</b>
              </h3>
            </a>
            {/* <p><strong>NBA Giphy Search </strong></p>  */}
            <p>
              A search engine using Giphy to find NBA players. - 1. **Hit the
              GIPHY API**. * Fool around with the GIPHY API. [Giphy
              API](https://developers.giphy.com/docs/). * Be sure to read about
              these GIPHY parameters (hint, hint): * `q` * `limit` * `rating` *
              Like many APIs, GIPHY requires developers to use a key to access
              their API data. To use the GIPHY API, you'll need a GIPHY account
              (don't worry, it's free!) and then obtain an API Key by [creating
              an app](https://developers.giphy.com/dashboard/?create=true). *
              Make sure you switch the protocol in the query URL from **`http to
              https`**, or the app may not work properly when deployed to Github
              Pages.
            </p>
          </div>
          <div style={{ color: "white" }}>
            <a href="https://bfields216.github.io/Train-Schedule/">
              <h3>
                <b>Train Schedule</b>
              </h3>
            </a>
            {/* <!-- <p><strong>Train Schedule</strong></p> --> */}
            <p>
              Here is a train schedule i built manipulating API Keys and Jquery.
              - Make sure that your app suits this basic spec: * When adding
              trains, administrators should be able to submit the following: *
              Train Name * Destination * First Train Time -- in military time *
              Frequency -- in minutes * Code this app to calculate when the next
              train will arrive; this should be relative to the current time. *
              Users from many different machines must be able to view same train
              times. * Styling and theme are completely up to you. Get Creative!
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
              supported by our RealTime Team: Mutahir Chaudhry, Brandon Fields,
              Ryan Hart, Jeremiah Graham.
            </p>
          </div>
        </List>
      </div>
    );
  }
}

export default Home;
