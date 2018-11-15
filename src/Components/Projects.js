import React, { Component } from "react";
import weatherAppImg from "../Images/weatherApp.png";
import twitchAppImg from "../Images/twitchApp.png";
import wikipediaAppImg from "../Images/wikipediaApp.png";

class Projects extends Component {
  state = {
    weat:
      "This app give you the weather in your current location by using HTML5 geolocation and a weather API",
    wiki:
      "This app helps users to perform a quick wikipedia search.It also helps the user to get a random wikipedia search,for the trivia enthusiast",

    twi:
      "This app lets me veiw if my Favourite twitch streamers are onlines, using the Twitch API"
  };

  handleMouseOver1 = () => {
    document.getElementById(
      "demo"
    ).innerHTML = `<h4>Current Weather App</h4> <br/> <p>${
      this.state.weat
    }</p>`;
    //document.getElementById("details").innerHTML = this.state.weat;

    //console.log("MouseOver1");
  };

  handleMouseOver2 = () => {
    document.getElementById(
      "demo"
    ).innerHTML = `<h4>TwitchApi App</h4> <br/> <p>${this.state.twi}</p>`;
    //document.getElementById("details").innerHTML = this.state.twi;
    //console.log("MouseOver2");
  };

  handleMouseOver3 = () => {
    document.getElementById(
      "demo"
    ).innerHTML = `<h4>Wikipedia Viewer App</h4> <br/> <p>${
      this.state.wiki
    }</p>`;
    //document.getElementById("details").innerHTML = this.state.wiki;
    //console.log("MouseOver3");
  };

  render() {
    return (
      <div>
        <div id="carousel">
          <div className="slide">
            <a
              id="1"
              href="https://vicsweatherapp.000webhostapp.com/"
              target="blank"
              onMouseOver={this.handleMouseOver1}
            >
              <img alt={weatherAppImg} id="weatherApp" src={weatherAppImg} />
            </a>
          </div>
          <div className="slide">
            <a
              id="2"
              href="https://wikipedia-viewer.000webhostapp.com/"
              target="blank"
              onMouseOver={this.handleMouseOver2}
            >
              <img alt={twitchAppImg} id="wikipediaApp" src={twitchAppImg} />
            </a>
          </div>
          <div className="slide">
            <a
              id="3"
              href="https://victortwitchapp.000webhostapp.com/"
              target="blank"
              onMouseOver={this.handleMouseOver3}
            >
              <img alt={wikipediaAppImg} id="twitchApp" src={wikipediaAppImg} />
            </a>
          </div>
        </div>

        {/*showing results after hovering */}
        <br />
        <section id="projectDetail">
          <div id="demo" className="container">
            <p id="details" />
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
