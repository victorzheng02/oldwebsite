import React from "react"
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router, Link} from 'react-router-dom';
let NavBar = () => {
    return(
    <Router><div class = "NavigationBar">
        <nav>
            <ul class = "NavBar">
            <li class = "NavBarItem"><Link to="#Home">Home</Link></li>
            <li class = "NavBarItem"><Link to="#aboutme">About Me</Link></li>
            <li class = "NavBarItem"><Link to="#experience">Experience</Link></li>
            <li class = "NavBarItem"><Link to="#Hobbies">Hobbies</Link></li>
            <li class = "NavBarItem"><Link to="#Resume">Resume</Link></li>
                </ul>
            </nav>
    </div>
    
    </Router>)
}
export default NavBar
