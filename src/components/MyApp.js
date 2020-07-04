import React from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import Experience from "./Experience"
import Hobbies from "./Hobbies"
import ProjectSlider from "./ProjectSlider"
import Aboutme from "./Aboutme"
import Footer from "./Footer"

class App extends React.Component{
    render(){
    return(<div>
        <NavBar />
        <Header  />
        {/* <Aboutme /> */}
        <Hobbies />
        <ProjectSlider />
        <Experience />
        <Footer/>
        </div>)
    }
}

export default App