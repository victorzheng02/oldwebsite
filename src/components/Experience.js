import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

// import Carouseltest from "./Carouseltest"
const headerStyle = {   
    fontSize: "3vw",
    color: "Black",
    paddingTop: "5%",
    paddingBottom: "3%",
    marginTop: "0px",
    textAlign: "center"
}
class Experience extends React.Component{
    render(){
        
    return(
        <Router>
        <div>
        
        <div id = "experience">
            <h1 style = {headerStyle} id = "workexperience"> Work Experience </h1>
            <h2 class = "Work"> conversationHEALTH</h2>
            
<div class = "workbox">
<a href="https://www.conversationhealth.com/" target="_blank">
<img src={require("../images/conversattionhealth.png") } alt="convohealth" width = "70%" height = "70%"/>
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
            
            </div>
        </div>
        </Router>
    )}
}
export default Experience;