import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
        <Navbar expand = "lg" id = "NavBar" bg="dark" variant = "dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
            <Nav.Link id = "NavBarItem"><a href="#home">Home</a></Nav.Link>
            <Nav.Link id = "NavBarItem"><a href="#experience">Experience</a></Nav.Link>
            <Nav.Link id = "NavBarItem"><a href="#projects">Projects</a></Nav.Link>
            <Nav.Link id = "NavBarItem"><a href="/ProgrammingResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}