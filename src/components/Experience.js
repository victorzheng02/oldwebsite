import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import HackathonFormat from "./props/HackathonFormat";
import Hobbies from "./Hobbies"
const headerStyle = {   
    fontSize: "3vw",
    color: "Black",
    paddingTop: "2%",
    textAlign: "center"
}
let Experience = () => {
    return(
        <Router>
        <div>
        <div id = "experience">
        <h1 style = {headerStyle}>Hackathons</h1>
            <ul class = "flex-container">
            <li class="flex-item">
            <HackathonFormat 
            HackathonName = "FraserHacks"
            ProjectName = "MeshForm"
            linktodev = "https://devpost.com/software/meshform"
            linktogit = "https://github.com/SmilestheSad/MeshForm"
            hackathontext = "Created an app for FRC scouting events. After entering scouting information on your phone, 
            you can wirelessly transmit the data to other teammates using a QR code. Built using react native and javascript."
                />
            </li>
            <li class="flex-item">
            <HackathonFormat 
            HackathonName = "HacktheNorth"
            ProjectName = "AllerVision"
            linktodev = "https://devpost.com/software/allervision"
            linktogit = "https://github.com/SmilestheSad/HTNFrontEnd"
            hackathontext = "Created an app that uses Google's Vision API to scan foods and detect potential allergies. 
            Built using react native, ajax, python, flask and edamam api."
                />
            </li>
            <li class="flex-item">
            <HackathonFormat 
            HackathonName = "JamHacks"
            ProjectName = "The Jam Expansion"
            linktodev = "https://devpost.com/software/thejamexpansion"
            linktogit = "https://github.com/SmilestheSad/TheJamExpansion"
            hackathontext = "Created a dungeon crawler game with multiple levels using python and pygame."
                />
            </li>
            <li class="flex-item">
            <HackathonFormat 
            HackathonName = "WolfHacks"
            ProjectName = "Globlate"
            linktodev = "https://devpost.com/software/wolfhacks19"
            linktogit = "https://github.com/SmilestheSad/wolfhacks19"
            hackathontext = "Messaging app with built to allow people who speak different languages to communicate with each other. 
            Built using Google Translate API, Firebase, javascript, HTML and CSS."
                />
            </li>
            </ul>
            <h1 style = {headerStyle}> Work Experience </h1>
            <h2 class = "WorkExperience"> conversationHEALTH</h2>
            
<div class = "workbox">
<a href="https://www.conversationhealth.com/">
<img src={require("../images/conversattionhealth.png") } alt="convohealth" width = "100%" height = "100%"/>
</a> 
            <ul>
            <li class = "WorkExperience">Created chatbot named "emojiHEALTH," designed to help teens learn and talk about health, using mainly JavaScript
                     and the Botpress framework</li>
            <li class = "WorkExperience">Assisted in implementing Natural Language Processing through RASA</li>
            <li class = "WorkExperience">Implementing over 30 different conversational flows into the bot</li>
            <li class = "WorkExperience">Developing a user database system using SQLite</li>
            <li class = "WorkExperience">Managing version control and fixing merging conflicts</li>
            </ul>
            </div>
            
            <div id = "Hobbies">
            <Hobbies />
            </div>
            </div>
        </div>
        </Router>
    )   
}
export default Experience;