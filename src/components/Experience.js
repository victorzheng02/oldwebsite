import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
const headerStyle = {
    fontSize: "3vw",
    color: "white"
}
const hackathonexperience = {
    fontSize: "1vw",
    color: "white"
}
let Experience = () => {
    return(
        <Router>
        <div>
            <div class = "experience">
            <h1 style = {headerStyle}>Hackathons</h1>
            <div class = "Hackathons"></div>
            <h2> FraserHacks </h2>
            <h3> MeshForm </h3>
            <a href="https://devpost.com/software/meshform">
<img src={require("../images/Devpost.png")} alt="devpost" width = "5%" height = "5%"/>
</a>

            <p style = {hackathonexperience}> Created an app for FRC scouting events. After entering scouting information on your phone, you can wirelessly transmit the data to other teammates using a qr code.
            </p>
        
            <h2> Hack the North </h2>
            <h2> Jam Hacks </h2>
            <h2> WolfHacks </h2>
            <h1 style = {headerStyle}> Work Experience </h1>
            </div>
        </div>
        </Router>
    )   
}
export default Experience;