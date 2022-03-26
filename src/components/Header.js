import React, { Component } from "react";
import Mediabox from "./Mediabox";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal";
import profilePicture from "../images/profile.png";
import arrow from "../images/arrow.png";
import Typical from "react-typical"


const messages = ["a software developer", 1500,
                  "an athlete", 1500,
                  "an avid public speaker", 1500,
                  "pretty bad at chess", 1500]
class Header extends Component {
  render() {
    const avatar = {
      borderRadius: "50%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "1.5vh",
      width: "42vh",
      height: "42vh",
    };
    
    return (
      <div className="landing" id="home">
        <Fade top>
          <img style={avatar} id="avatar" src={profilePicture} alt="me" />
          <Mediabox />
          <Typography id="intro">Hi! My name is Victor Zheng</Typography>

          <p id="summarybox">
            I am <Typical wrapper="span" steps={messages} loop={Infinity}/>
          </p>
          <a href="#experience">
            <img className="vert-move" src={arrow} alt="me" />
          </a>
        </Fade>
      </div>
    );
  }
}

export default Header;
