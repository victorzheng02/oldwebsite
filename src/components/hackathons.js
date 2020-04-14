import React from 'react'


const hackathonexperience = {
    fontSize: "1.2vw",
    color: "Black"
}
function HackathonFormat(props){
    return(
        <div class ="hackathonformat">
        <h2 class = "HackathonName"> {props.HackathonName}</h2>
            <h3> {props.ProjectName} </h3>
            <a href={props.linktodev}>
<img src={require("../images/Devpost.png")} alt="devpost" width = "5%" height = "5%"/>
</a>
<a href={props.linktogit}>
<img src={require("../images/github-logo.png")} alt="github" width = "5%" height = "5%"/>
</a>
            <p style = {hackathonexperience}> {props.hackathontext}
            </p>
        </div>
    )
}
export default HackathonFormat