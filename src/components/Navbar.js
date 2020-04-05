import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Resume from "./Resume";
// import AnchorLink from 'react-anchor-link-smooth-scroll';

let NavBar = () => {
    return(
        <Router>
    <div class = "NavigationBar">
        <nav>
            <ul class = "NavBar">
            <li class = "NavBarItem"><Link to="#Home">Home</Link></li>
            <li class = "NavBarItem"><Link to="#aboutme">About Me</Link></li>
            <li class = "NavBarItem"><Link to="#experience">Experience</Link></li>
            <li class = "NavBarItem"><Link to="#Hobbies">Hobbies</Link></li>
            <li class = "NavBarItem"><Link to="/Resume">Resume</Link>"></li>
 
                </ul>
            </nav>
    <Switch>
          <Route exact strict path="/Resume">
            <Resume />
          </Route>
        </Switch>
    </div>
    </Router>
    )}
export default NavBar
