import React, {Component} from "react"
import Mediabox from "./Mediabox"
import Fade from "react-reveal"
class Header extends Component{
    render(){
        const avatar = {
            borderRadius: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1.5vh",
            width: "35vh",
            height: "42vh",
        }
    return (
        <div class = "blurredbox">
            <Fade top>
        <img style = {avatar} id = "avatar" src={require("../images/victor(me).png")} alt = "me" />
            <Mediabox />
        <h1 id = "intro">Hi! My name is Victor Zheng </h1>

        <p id = "summarybox">I am a first-year student attending the Computing and Financial Management program
        at the University of Waterloo. Scroll down to learn a bit about me! </p>

        <a href="#experience"><img class = "vert-move"src={require("../images/arrow.png")} alt = "me" /></a>
        </Fade>
        </div>
    )}}

export default Header