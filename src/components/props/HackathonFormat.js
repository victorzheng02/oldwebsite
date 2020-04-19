import React from 'react'


const hackathonexperience = {
    fontSize: "1.2vw",
    color: "Black",
    padding: "0",
    position: "relative",
}

class HackathonFormat extends React.Component{
    render(){
    return(
        <div class ="hackathonformat">
        <h2 class = "HackathonName"> {this.props.HackathonName}</h2>
            <h3 class = "HackathonName"> {this.props.ProjectName} </h3>
            <a href={this.props.linktodev} target="_blank">
<img src={require("../../images/Devpost.png")} alt="devpost" width = "20%" height = "20%"/>
</a>
<a href={this.props.linktogit} target="_blank">
<img src={require("../../images/github-logo.png")} alt="github" width = "20%" height = "20%"/>
</a>
            <p style = {hackathonexperience}> {this.props.hackathontext}
            </p>
        </div>
    )
}
}
export default HackathonFormat;