import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import AnchorLink from 'react-anchor-link-smooth-scroll';

let NavBar = () => {
    return(
        <Router>
    <div class = "NavigationBar">
        <nav>
            <ul class = "NavBar">
            <li class = "NavBarItem"><a href="#Home">Home</a></li>
            <li class = "NavBarItem"><a href="#aboutme">About Me</a></li>
            <li class = "NavBarItem"><a href="#projects">Projects</a></li>
            <li class = "NavBarItem"><a href="#workexperience">Work Experience</a></li>
            <li class = "NavBarItem"><a href="#Hobbies">Hobbies</a></li>
            <li class = "NavBarItem"><a href="/images/ProgrammingResume.pdf" target="_blank">Resume</a></li>
 
                </ul>
            </nav>
    </div>
    </Router>
    )}
export default NavBar
