import React from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import Experience from "./Experience"
import Hobbies from "./Hobbies"
import ProjectSlider from "./ProjectSlider"
import Aboutme from "./Aboutme"
import Footer from "./Footer"
import Particles from 'react-particles-js';
class App extends React.Component{
    render(){
    return(<div>
       
      <div id = "homewrapper">
        <NavBar />
        <Header  />
        {/* <Aboutme /> */}
        <Hobbies />
        <ProjectSlider />
        {/* <Experience /> */}
        <Footer/>
        </div> 
        </div>
    )}
}

export default App