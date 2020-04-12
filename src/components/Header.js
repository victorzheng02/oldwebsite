import React, {Component} from "react"

class AboutMe extends Component{
    render(){
        const avatar = {
            borderRadius: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "20%",
            height: "20%",
        }
    return (
        <div class = "blurredbox">
                <div class = "fillerbox">
        </div>
        <img style = {avatar}src={require("../images/pictureofme.jpg")} alt = "me" />
        {/* <img src={require("../../images/Devpost.png")} alt="devpost" width = "20%" height = "20%"/> */}
        <h1 id = "aboutme">Hi! My Name is Victor Zheng </h1>
        <p id = "summarybox">I am a grade 12 student currently attending the Woodlands Secondary School for the Enhanced Learning Program. Scroll down to learn a bit about me! </p>
        </div>

    )}}

export default AboutMe