import React from "react"
import AboutMe from "./Header"
import NavBar from "./Navbar"
import Experience from "./Experience"
import Resume from "./Resume"
class App extends React.Component{
    render(){
    return(<div>
        <NavBar />
        <AboutMe  />
        <Experience />
        <Resume />
        </div>)
    }
}

export default App