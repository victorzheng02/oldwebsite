import React from 'react'

let aboutbox = {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "1.5vw",
    textAlign: "center",
    fontWeight: "normal"
}
class Aboutme extends React.Component{
    render(){
        return(
            <div id = "aboutme">
                <div class = "blurredbox">
                <h1 style = {aboutbox}>My name is Victor Zheng, and I will be attending Waterloo for the Computing Financial Management
program at the University of Waterloo this fall. When I am not coding, I enjoy playing badminton, swimming and the guitar </h1>                
                </div>
            </div>
        )
    }
}
export default Aboutme;