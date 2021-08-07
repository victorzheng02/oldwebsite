import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import WATOPhoto from "../images/WATOPhoto.jpeg";
import modelUNPhoto from "../images/pictureofme.jpg";
import medlifePhoto from "../images/medlife.jpg";
import badmintonPhoto from "../images/badminton.jpg";
import roboticsPhoto from "../images/robotics.jpg";
import decaPhoto from "../images/deca.jpg";
let Hobby = {
  marginBottom: "0.5vw",
  marginTop: "0.5vw",
  paddingTop: "0.5vw",
  minHeight: "30px",
};
let flexitem = {
  borderRadius: "10%",
  width: "90%",
  height: "100%",
};

let RowStyle = {
  padding: "0vw 15vw 0vw 15vw",
};

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <Fade left>
          <h1 id="exp"> Experience</h1>
        </Fade>
        <Zoom>
          <Container fluid>
            <Row style={RowStyle} xs={1} md={2} lg={3} xl={3}>
              <Col>
                {" "}
                <div className="flex-item" style={{ marginBottom: "2vw" }}>
                  <h1 style={Hobby}> WATonomous</h1>
                  <img style={flexitem} src={WATOPhoto} alt="me" />
                  <p className="flexpara">
                    Currently the business director for WATonomous, a student
                    design team based in the University of Waterloo. I've helped
                    raise over $30,000 in funding and lead the media,
                    sponsorship, and design subdivisions.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="flex-item">
                  <h1 style={Hobby}>Model UN </h1>
                  <img style={flexitem} src={modelUNPhoto} alt="me" />
                  <p className="flexpara">
                    Served as the co-president of our highschool chapter of 50
                    members for two years and have hosted numerous Model UN
                    conferences.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="flex-item" style={{ marginBottom: "2vw" }}>
                  <h1 style={Hobby}> MEDLIFE</h1>
                  <img style={flexitem} src={medlifePhoto} alt="me" />
                  <p className="flexpara">
                    With this non-profit, I've hosted multiple fundraisers and
                    even went to Peru, building a staircase and helping with a
                    mobile clinic.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="flex-item">
                  <h1 style={Hobby}> Badminton</h1>
                  <img style={flexitem} src={badmintonPhoto} alt="me" />
                  <p className="flexpara">
                    Having played badminton since I was 7, I've trained and
                    played on a provincial level for Lee's Badminton Club.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="flex-item" style={{ marginBottom: "2vw" }}>
                  <h1 style={Hobby}> First Robotics Competition</h1>
                  <img style={flexitem} src={roboticsPhoto} alt="me" />
                  <p className="flexpara">
                    Serving as the executive of finance for Team 4308: Absolute
                    Robotics, I've amassed over $10,000 in sponsorships for my
                    team, which competes at the international level.{" "}
                  </p>
                </div>
              </Col>
              <Col>
                {" "}
                <div className="flex-item">
                  <h1 style={Hobby}> DECA</h1>
                  <img style={flexitem} src={decaPhoto} alt="me" />
                  <p className="flexpara">
                    Joining my school's chapter in grade 11, I placed top 20 in
                    both years for the HLM category and first out of 1227 North
                    Atlantic teams for the DECA Stock Market Game.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="flex-container"></div>
        </Zoom>
      </div>
    );
  }
}
export default Experience;
