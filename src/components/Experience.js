import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Row, Col } from "react-bootstrap";
import Extracurricular from "./Extracurricular";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import WATOPhoto from "../images/WATOPhoto.jpeg";
import modelUNPhoto from "../images/pictureofme.jpg";
import medlifePhoto from "../images/medlife.jpg";
import badmintonPhoto from "../images/badminton.jpg";
import roboticsPhoto from "../images/robotics.jpg";
import decaPhoto from "../images/deca.jpg";

const Hobby = {
  marginBottom: "0.5vw",
  marginTop: "0.5vw",
  paddingTop: "0.5vw",
  minHeight: "30px",
};
const flexitem = {
  borderRadius: "10%",
  width: "90%",
  height: "100%",
};

const RowStyle = {
  padding: "0vw 15vw 0vw 15vw",
};

const Extracurriculars = [
  {
    name: "WATonomous",
    time: "2020-present",
    photo: WATOPhoto,
    desc: `Currently the team captain for WATonomous, a student design
team based in the University of Waterloo. I manage the team
of over 50 students, helped raise over $30,000 in
funding, coordinate partnerships with large tech companies,
and more.`,
  },
  {
    name: "Badminton",
    time: "2013-Present",
    photo: badmintonPhoto,
    desc: `Having played badminton for as long as I could remember, I've trained and
    played on a provincial level for Lee's Badminton Club.`,
  },
  {
    name: "Model UN",
    time: "2018-2020",
    photo: modelUNPhoto,
    desc: `Served as the co-president of our highschool chapter of 50
  members for two years and have hosted numerous Model UN
  conferences.`,
  },
  {
    name: "MEDLIFE",
    time: "2019-2020",
    photo: medlifePhoto,
    desc: `With this non-profit, I've hosted multiple fundraisers and
  even went to Peru, building a staircase and helping with a
  mobile clinic.`,
  },
  {
    name: "First Robotics Competition",
    time: "2019-2020",
    photo: roboticsPhoto,
    desc: `Served as the executive of finance for Team 4308: Absolute
    Robotics, I've amassed over $10,000 in sponsorships for my
    team, which competes at the international level.`,
  },
  {
    name: "DECA",
    time: "2018-2020",
    photo: decaPhoto,
    desc: `Joining my school's chapter in grade 11, I placed top 20 in
    both years for the HLM category and first out of 1227 North
    Atlantic teams for the DECA Stock Market Game.`,
  },
];
class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <Fade left>
          <h1 id="exp"> Extracurriculars</h1>
        </Fade>
        <Zoom>
          <Container fluid>
            <Row style={RowStyle} xs={1} md={2} lg={3} xl={3}>
              {Extracurriculars.map((extracurricular) => (
                <Col>
                  <Extracurricular {...extracurricular} />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="flex-container"></div>
        </Zoom>
      </div>
    );
  }
}
export default Experience;
