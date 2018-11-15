import React from "react";
import { Link } from "react-router-dom";
//import { SocialIcon } from "react-social-icons";
import logo from "../Images/logo.png";

/* Add drop down menu when nabar is small */
/* Sort out social media icons */
const Header = () => {
  return (
    <div id="header">
      <div id="myTopnav" className="container topnav">
        <div>
          <Link to="/">
            <img id="logo" src={logo} alt={logo} />
          </Link>
        </div>
        <nav>
          <ul>
            {/*
          <li>
            <Link to="/" className="nav-link">
              <i className="fas fa-home" />

              <img id="logo" style={logCss} src={logo} alt={logo} />
            </Link>
          </li>
         */}
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <span id="iconSize">
              <li>
                <a
                  href="https://www.linkedin.com/in/victor-bahlangene-9b406ba3/"
                  target="blank"
                  className="fa fa-linkedin"
                >
                  <i />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/9519233/victor-bahlangene"
                  target="blank"
                  className="fa fa-stack-overflow"
                >
                  <i />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/VBahlangene"
                  target="blank"
                  className="fa fa-twitter"
                >
                  <i />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/victorbahlangene"
                  target="blank"
                  className="fa fa-github"
                >
                  <i />
                </a>
              </li>
              <li />
            </span>
          </ul>
        </nav>
      </div>
    </div>
  );
};
/*
const logCss = {
  padding: "0 10px 0 0",
  margin: "0",
  width: "90px"
};

const textColor = {
  color: "white"
};
*/

export default Header;
