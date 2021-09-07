import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function HideOnScroll(props) {
  const { children, window } = props;
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
        <Navbar expand="md" id="NavBar" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link id="NavBarItem" href="#home">
                Home
              </Nav.Link>
              <Nav.Link id="NavBarItem" href="#experience">
                Extracurriculars
              </Nav.Link>
              <Nav.Link id="NavBarItem" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link
                id="NavBarItem"
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </HideOnScroll>
    </React.Fragment>
  );
}
