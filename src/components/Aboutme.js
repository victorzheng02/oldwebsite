import React from 'react'

let removemargin = {
    marginTop: "0px",
    marginBottom: "0px"
}
class Aboutme extends React.Component{
    render(){
        return(
            <div id = "aboutme">
                <div class = "blurredbox">
                <h1 style = {removemargin}>hello world</h1>
                </div>
            </div>
        )
    }
}
export default Aboutme;