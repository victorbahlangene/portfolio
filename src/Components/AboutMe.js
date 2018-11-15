import React, { Component } from "react";
import educationImg from "../Images/education.jpg";
import engineeringImg from "../Images/engineering.png";
import webDevImg from "../Images/web-development.png";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <section>
          <div id="showcase">
            <div className="centered">
              <h1>
                <span>Welcome</span>
                <br />
                <b>ITS NICE TO MEET YOU</b>
              </h1>
            </div>
          </div>
        </section>

        <section id="boxes">
          <div className="container" id="about">
            <div id="education" className="box">
              <img id="aboutMe" src={educationImg} alt={educationImg} />
              <h3>
                <b>About Me</b>
              </h3>
              <p>
                Victor Bahlangene was born in Bulawayo -Zimbabwe in 1996. He is
                studying for a B.Sc degree in Electrical and Electronics
                Engineering from Cyprus International University...since January
                2015.
              </p>
            </div>

            <div id="researching" className="box">
              <img id="research" src={engineeringImg} alt={engineeringImg} />
              <h3>
                <b>Research Interests</b>
              </h3>
              <ul>
                <li>Full Stack Web Developement</li>
                <li>Data Science</li>
                <li>Machine Learning</li>
                <li>Automation PLC</li>
              </ul>
            </div>

            <div id="webDevelopment" className="box">
              <img id="webDev" src={webDevImg} alt={webDevImg} />
              <h3>
                <b>WebDev Goals</b>
              </h3>
              <ul>
                <li>Devolop backend skill,including API development</li>
                <li>
                  Learn Data filtering by designing and using a twitter bot in
                  Node.js
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
/* this wrtting on the image to be done plus css */
export default AboutMe;
