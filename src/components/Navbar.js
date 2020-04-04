import React from "react"
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router, Link} from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

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
            {/* <li class = "NavBarItem"><AnchorLink href = '#Home'>>Home</AnchorLink></li>
            <li class = "NavBarItem"><AnchorLink href="#aboutme">About Me</AnchorLink></li>
            <li class = "NavBarItem"><AnchorLink href="#experience">Experience</AnchorLink></li>
            <li class = "NavBarItem"><AnchorLink href="#Hobbies">Hobbies</AnchorLink></li>
            <li class = "NavBarItem"><AnchorLink href="#Resume">Resume</AnchorLink></li> */}
                </ul>
            </nav>
    </div>
    
    </Router>)
}
export default NavBar
