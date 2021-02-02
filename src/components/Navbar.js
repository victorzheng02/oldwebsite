import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function NavBar(props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
        <nav>
            <ul class = "NavBar">
            <li class = "NavBarItem"><a href="#home">Home</a></li>
            {/* <li class = "NavBarItem"><a href = "#aboutme">About Me</a></li> */}
            <li class = "NavBarItem"><a href="#experience">Experience</a></li>
            <li class = "NavBarItem"><a href="#projects">Projects</a></li>
            {/* <li class = "NavBarItem"><a href="#workexperience">Work Experience</a></li> */}
            
            <li class = "NavBarItem"><a href="/ProgrammingResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
 
                </ul>
            </nav>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}