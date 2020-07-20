import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Container, Row, Col } from 'react-bootstrap';
import { Autoplay } from 'swiper/js/swiper.esm';
let Hobby = {
    marginBottom: "0.5vw",
    fontSize: "2.2vw",
    marginTop: "0.5vw",
    paddingTop: "0.5vw",
}
let flexitem = {
    borderRadius: "10%",
    width: "90%",
    height:"auto",
}
let flexpara = {
    // paddingBottom: "2vw",
   
}
class Hobbies extends React.Component {
    render() {
        return (<div id="hobbies">
            <h1 id = "exp"> Experience</h1>
            <Container fluid>
                <Row style = {{padding: "0vw 15vw 0vw 15vw"}} xs = {1} md = {2} lg = {3} xl = {3}>
                    <Col>
                        <div class="flex-item"><h1 style={Hobby}> Badminton</h1>
                            <img style={flexitem} src={require("../images/badminton.jpg")} alt="me" />
                            <p class = "flexpara">Having played badminton since I was 7, I currently train and play on a provincial level for Lee's Badminton Club.</p></div></Col>

                    <Col>
                        <div class="flex-item">
                            <h1 style={Hobby}>Model UN </h1>
                            <img style={flexitem} src={require("../images/pictureofme.jpg")} alt="me" />
                            <p class = "flexpara">Having served as the president of my highschool's chapter of over 50 members for two years, I've attended and hosted numerous Model UN conferences.</p>
                        </div>
                    </Col>
                    <Col>
                        <div class="flex-item" style={{ marginBottom: "2vw" }}>
                            <h1 style={Hobby}> MEDLIFE</h1>
                            <img style={flexitem} src={require("../images/medlife.jpg")} alt="me" />
                            <p class = "flexpara">With this non-profit, I've hosted multiple fundraisers and even went to Peru, building a staircase and helping with a mobile clinic.</p>
                        </div>
                    </Col>
                    <Col> <div class="flex-item" style={{ marginBottom: "2vw" }}>
                        <h1 style={Hobby}> Hackathons</h1>
                        <img style={flexitem} src={require("../images/hackathon.jpg")} alt="me" />
                        <p class = "flexpara">Having participated in numerous hackathons such as Hack the North and JAMHacks, I've created many projects which you can check out in the projects section!</p>
                    </div></Col>
                    <Col><div class="flex-item" style={{ marginBottom: "2vw" }}>
                        <h1 style={Hobby}> Robotics</h1>
                        <img style={flexitem} src={require("../images/robotics.jpg")} alt="me" />
                        <p class = "flexpara">Serving as the executive of finance for Team 4308 Absolute Robotics, I've amassed over $10,000 in sponsorships for my team, which competes at the international level. </p>
                    </div>
                    </Col>
                    <Col> <div class="flex-item">
                    <h1 style={Hobby}> DECA</h1>
                    <img style={flexitem} src={require("../images/deca.jpg")} alt="me" />
                    <p class = "flexpara">Joining my school's chapter in grade 11, I placed top 20 in both years for the HLM category and first out of 1227 North Atlantic teams for the DECA Stock Market Game.</p>
                </div>
                </Col>
                </Row>
            </Container>
            <div class="flex-container">




            </div>
        </div>)
    }
}
export default Hobbies
