import React, {Component} from "react"
import Mediabox from "./Mediabox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faHome,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";

class Header extends Component{
    render(){
        const avatar = {
            borderRadius: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "23%",
            height: "23%",
        }
    return (
        <div class = "blurredbox">
                <div class = "fillerbox">
        </div>
        <img style = {avatar}src={require("../images/pictureofme.jpg")} alt = "me" />
        <div id = "mediabox">
            <Mediabox />
            </div>
        <h1 id = "intro">Hi! My Name is Victor Zheng </h1>

        <p id = "summarybox">I am an 18 year old math student who will be attending the University of Waterloo for their 
        Computing and Financial Management program this fall.
        Scroll down to learn a bit about me! </p>

        <a href="#hobbies"><img class = "vert-move"src={require("../images/arrow.png")} alt = "me" /></a>
        </div>

    )}}

export default Header