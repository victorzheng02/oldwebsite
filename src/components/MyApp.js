import React from "react"
import AboutMe from "./Header"
import NavBar from "./Navbar"
import Experience from "./Experience"
import ProjectSlider from "./ProjectSlider"
class App extends React.Component{
    render(){
    return(<div>
        <NavBar />
        <AboutMe  />
        <ProjectSlider />
        <Experience />
        </div>)
    }
}

export default App