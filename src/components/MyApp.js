import React from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import Experience from "./Experience"
import Hobbies from "./Hobbies"
import ProjectSlider from "./ProjectSlider"
import Aboutme from "./Aboutme"
class App extends React.Component{
    render(){
    return(<div>
        <NavBar />
        <Header  />
        <Aboutme />
        <Hobbies />
        <ProjectSlider />
        <Experience />
        </div>)
    }
}

export default App