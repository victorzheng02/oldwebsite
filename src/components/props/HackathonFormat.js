import React from "react";
import githubLogo from "../../images/github-logo.png";
import devpostLogo from "../../images/Devpost.png";

class HackathonFormat extends React.Component {
  render() {
    return (
      <div id="project">
        <h3 className="HackathonName"> {this.props.ProjectName} </h3>
        <div className="slider-icons">
          <img
            src={devpostLogo}
            alt="devpost"
            className="hover-item"
            onClick={() => window.open(this.props.linktodev, "_blank")}
          />
          <img
            src={githubLogo}
            alt="github"
            className="hover-item"
            onClick={() => window.open(this.props.linktogit, "_blank")}
          />
        </div>
        <p className="hackathonp"> {this.props.hackathontext}</p>
      </div>
    );
  }
}
export default HackathonFormat;
