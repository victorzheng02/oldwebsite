import React from 'react'


const hackathonexperience = {
    fontSize: "1.2vw",
    color: "Black",
    padding: "0",
    position: "relative",
}

function HackathonFormat(props){
    return(
        <div class ="hackathonformat">
        <h2 class = "HackathonName"> {props.HackathonName}</h2>
            <h3 class = "HackathonName"> {props.ProjectName} </h3>
            <a href={props.linktodev}>
<img src={require("../../images/Devpost.png")} alt="devpost" width = "20%" height = "20%"/>
</a>
<a href={props.linktogit}>
<img src={require("../../images/github-logo.png")} alt="github" width = "20%" height = "20%"/>
</a>
            <p style = {hackathonexperience}> {props.hackathontext}
            </p>
        </div>
    )
}
export default HackathonFormat;