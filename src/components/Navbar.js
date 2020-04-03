import React from "react"
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
let NavBar = () => {
    return(
    <Router><div class = "NavigationBar">
        <nav>
            <ul>
            <li><Link to="#Home">Home</Link></li>
            <li><Link to="#aboutme">About Me</Link></li>
            <li><Link to="#experience">Experience</Link></li>
            {/* <li><Link to="Resume">Resume</Link></li> */}
            <li><a href="#Resume">Resume</a></li>
                </ul>
            </nav>
    </div>
    
    </Router>)
}
export default NavBar
