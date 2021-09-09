import React from "react";
import Header from "./Header";
import NavBar from "./Navbar";
import Experience from "./Experience";
import ProjectSlider from "./ProjectSlider";
import Footer from "./Footer";

export const App = () => {
  return (
    <div>
      <div id="homewrapper">
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <NavBar />
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Header />
        <Experience />
        <ProjectSlider />
        <Footer />
      </div>
    </div>
  );
};
