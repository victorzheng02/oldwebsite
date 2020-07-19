import React from 'react'
import { faCentercode } from '@fortawesome/free-brands-svg-icons';


const hackathonexperience = {
    fontSize: "1.5vw",
    color: "Black",
    padding: "0",
    position: "relative",  
    textAlign: "center",
    marginLeft: "3vw",
    marginRight: "3vw"
}

let gitdev = {
    padding: "1vw 1vw 1vw 1vw",
    textAlign: "center",
}
//   a.social {
//     margin: 0 1rem;
//     transition: transform 200ms;
//     display: inline-block;
//   }
//   a.social:hover {
//     transform: translateY(-3px);
//   }
class HackathonFormat extends React.Component{
    render(){
    return(
        <div class ="hackathonformat">
            <h3 class = "HackathonName"> {this.props.ProjectName} </h3>
            <div style = {gitdev}>
            <a href={this.props.linktodev} target="_blank" >
               
<img src={require("../../images/Devpost.png")} alt="devpost" width = "25%" height = "25%" class="hover-item"/>
</a>
<a href={this.props.linktogit} target="_blank">
<img src={require("../../images/github-logo.png")} alt="github" width = "25%" height = "25%" class = "hover-item"/>
</a>
</div>
            <p style = {hackathonexperience}> {this.props.hackathontext}
            </p>
        </div>
    )
}
}
export default HackathonFormat;