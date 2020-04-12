import React from 'react'

let HobbiesFormat = (props) => {
    let image = require(props.imagelink)
    return(
    <div >
    <div class="hobbyitem">
    <img src= {image}  alt="hobbyimage" width = {props.width} height = {props.height}/>
        <h1>{props.hobbytext}</h1>
        </div>
</div>)
}
export default HobbiesFormat;