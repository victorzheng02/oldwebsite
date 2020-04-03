import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import HackathonFormat from "/hackathons";
const headerStyle = {
    fontSize: "3vw",
    color: "Black"
}
const hackathonexperience = {
    fontSize: "1.2vw",
    color: "Black"
}

let Experience = () => {
    return(
        <Router>
        <div>
            <div class = "experience">
            <h1 style = {headerStyle}>Hackathons</h1>
            <div class = "Hackathons"></div>
            {/* <HackathonFormat /> */}
            {/* <h2 class = "HackathonName"> FraserHacks </h2>
            <h3> MeshForm </h3>
            <a href="https://devpost.com/software/meshform">
<img src={require("../images/Devpost.png")} alt="devpost" width = "5%" height = "5%"/>
</a>
<a href="https://devpost.com/software/meshform">
<img src={require("../images/github-logo.png")} alt="github" width = "5%" height = "5%"/>
</a>
            <p style = {hackathonexperience}> Created an app for FRC scouting events. After entering scouting information on your phone, 
            you can wirelessly transmit the data to other teammates using a QR code. Built using react native and javascript.
            </p>
         */}
            <h2 class = "HackathonName"> Hack the North </h2>
            <h3> AllerVision</h3>
            <a href="https://devpost.com/software/allervision">
<img src={require("../images/Devpost.png")} alt="devpost" width = "5%" height = "5%"/>
</a>
<a href="https://github.com/SmilestheSad/HTNFrontEnd">
<img src={require("../images/github-logo.png")} alt="github" width = "5%" height = "5%"/>
</a>
<p style = {hackathonexperience}> Created an app that uses Google's Vision API to scan foods and detect potential allergies. Built using 
react native, ajax, python, flask and edamam api.
            </p>

            <h2 class = "HackathonName"> Jam Hacks </h2>
            <a href="https://devpost.com/software/thejamexpansion">
<img src={require("../images/Devpost.png")} alt="devpost" width = "5%" height = "5%"/>
</a>
<a href="https://github.com/SmilestheSad/TheJamExpansion">
<img src={require("../images/github-logo.png")} alt="github" width = "5%" height = "5%"/>
</a>
<p style = {hackathonexperience}> Created a dungeon crawler game with multiple levels using python and pygame.
     </p>
            <h2 class = "HackathonName"> WolfHacks </h2>
            <a href="https://devpost.com/software/wolfhacks19">
<img src={require("../images/Devpost.png")} alt="devpost" width = "5%" height = "5%"/>
</a>
<a href="https://github.com/SmilestheSad/wolfhacks19">
<img src={require("../images/github-logo.png")} alt="github" width = "5%" height = "5%"/>
</a>
<p style = {hackathonexperience}> Messaging app with built to allow people who speak different languages to communicate with each other. use cases include: immigrants 
Built using Google Translate API, Firebase, javascript, HTML and CSS.
</p>
            <h1 style = {headerStyle}> Work Experience </h1>
            <h2> conversationHEALTH</h2>
            <a href="https://www.conversationhealth.com/">
<img src={require("../images/conversattionhealth.png")} alt="convohealth" width = "5%" height = "5%"/>
</a>
            
            <li>Created chatbot named "emojiHEALTH," designed to help teens learn and talk about health, using mainly JavaScript
                     and the Botpress framework</li>
            <li>Assisted in implementing Natural Language Processing through RASA</li>
            <li>Implementing over 30 different conversational flows into the bot</li>
            <li>Developing a user database system using SQLite</li>
            <li>Managing version control and fixing merging conflicts</li>
            
            
            </div>
        </div>
        </Router>
    )   
}
export default Experience;