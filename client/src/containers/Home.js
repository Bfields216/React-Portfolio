import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Card from "react-bootstrap/Card";
import { List } from "../components/List";
import Navbar from '../components/NavBar'
// import Button from 'react-bootstrap/Button';

class Home extends Component {
  render() {
    return (
      <div>

        <Jumbotron>
        <Navbar />
          <p>Brandon Fields Portfolio</p>
          <br />
          <p>
            {" "}
            Thank you for taking the time to check out my portfolio, if you have
            any questions please don't hesitate to contact me!{" "}
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col size="md-6" id="header">
            <div >
              <h4>FULL-STACK Software Developer from Atlanta, GA.</h4>
              <li>
                <b>Brandon Fields</b>
              </li>
              <li>
                <b>02-May-1991</b>
              </li>
              <li>
                <b> 216-952-1738 </b>
              </li>
              <li>
                <b>Atlanta, Georgia </b>
              </li>
              <li>
                <b>
                  <a href="mailto:Brandonfields2010@gmail.com">
                    {" "}
                    Brandonfields2010@gmail.com
                  </a>{" "}
                </b>
              </li>
              <li>
                <b>
                  <a href="https://github.com/Bfields216">B-Fields - Github</a>
                </b>
              </li>

              <a href="https://drive.google.com/file/d/1wW8Q3gQYmWGft4FhzyvGqLIf-Ov5gwnT/view?usp=sharing">
                <h4>
                  <font>
                    <font>View My CV Here</font>
                  </font>
                </h4>
              </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Container fluid>
            <Row>
              <Col size="md-9">
                <p>
                  My name is Brandon Fields I am from Cleveland Ohio. Full Stack
                  Developer looking for his start in the Tech Industry. Proven
                  skills in multitasking and handling crisis management.
                  Increased utilization of Google Apps for the benefit of the
                  DeKalb County Board of Commissioners. Managed day to day
                  operations for a County Commissioner that had over 740,000
                  citizens, conflict resolution was a key to managing requests
                  and calls. Highly proficient in Microsoft Office, HTML, CSS,
                  Javascript, Jquery, NodeJS, AJAX. Excellent communicator who
                  is able to understand any audience and effectively connect
                  with all levels of management. Georgia Tech Full Stack
                  Development Bootcamp Certification.
                  <br />
                  <strong>
                    Check The Portoflio on the bottom of this page to see games
                    I've created.
                  </strong>
                </p>
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src="/" /> */}
                  <Card.Body>
                    <Card.Title>Quick Facts About Me</Card.Title>
                    <Card.Text>
                      Interested in exploring careers in Full Stack Development
                      and working freelance.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        <h1>Portfolio</h1>
        <List>
          <div>
            <a href="https://bfields216.github.io/unit-4-game/">
              <h3>The Crystal Collector Game</h3>
            </a>

            <p>
              I built a game that allows you to click on crystals for points -
              CrystalsCollector Game (Recommended) ![Crystal
              Collector](Images/1-CrystalCollector.jpg) 1. [Watch the
              demo](https://youtu.be/yNI0l2FMeCk). 2. The player will have to
              guess the answer, just like in Word Guess. This time, though, the
              player will guess with numbers instead of letters. 3. Here's how
              the app works: * The app should show the number of games the
              player wins and loses. To that end, do not refresh the page as a
              means to restart the game.
            </p>
          </div>
          <div>
            <a href="https://bfields216.github.io/TriviaGame/">
              <h3>
                <b>Trial Trivia</b>
              </h3>
            </a>

            <p>
              A game I built. - Basic Quiz (Timed Form)
              ![Basic](Images/1-basic.jpg) * You'll create a trivia form with
              multiple choice or true/false options (your choice). * The player
              will have a limited amount of time to finish the quiz. * The game
              ends when the time runs out. The page will reveal the number of
              questions that players answer correctly and incorrectly. * Don't
              let the player pick more than one answer per question. * Don't
              forget to include a countdown timer.
            </p>
          </div>
          <div>
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
          <div>
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
          <div>
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
              forecast, for the user. Below the map and weather, the user will
              have 5 buttons to choose from: "Restaurants", "Places to Stay",
              "Current Events", "Local News", and "Emergency Services". This
              application is useful because it provides a one stop shop for
              current information pertaining to one's geolocation. A user will
              no longer have to navigate the web to locate all these different
              pieces of information, but rather have them available at the click
              of a button. It is perfect for anyone who is traveling to a
              locaiton foreign to them, and would like to have a general idea of
              the area they are visiting. Nonetheless, it could even be used by
              someone who is local, and just wants to stay up to date with
              everything in the area. This application is maintained and
              supported by our RealTime Team: Mutahir Chaudhry, Brandon Fields,
              Ryan Hart, Jeremiah Graham.
            </p>
          </div>
        </List>
        <section>
          <h1>My Skills</h1>
          <div>
            <h3>
              <font>
                <font>
                  Web development / Full Stack Development / Front End / Back
                  End{" "}
                </font>
              </font>
            </h3>
            <p>
              <font>
                <font>
                  {" "}
                  Htlm5 / Css3 / Boostrap / Git / Javascript / Jquery /
                  Frameworks / React.js / Node.js / MySQL / Express / Handlebars
                  / Sequelize / Mongo-Mongoose / Java{" "}
                </font>
              </font>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
