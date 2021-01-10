import React from 'react'

let gitdev = {
    padding: "1vw 1vw 1vw 1vw",
    textAlign: "center",
}
class HackathonFormat extends React.Component{
    render(){
    return(
        <React.Fragment>
            <h3 class = "HackathonName"> {this.props.ProjectName} </h3>
            <div style = {gitdev}>
            <a href={this.props.linktodev} target="_blank" rel="noopener noreferrer">
               
<img src={require("../../images/Devpost.png")} alt="devpost" class="hover-item"/>
</a>
<a href={this.props.linktogit} target="_blank" rel="noopener noreferrer">
<img src={require("../../images/github-logo.png")} alt="github" class = "hover-item"/>
</a>
</div>
            <p className=  "hackathonp"> {this.props.hackathontext}
            </p>
        </ React.Fragment>
    )
}
}
export default HackathonFormat;