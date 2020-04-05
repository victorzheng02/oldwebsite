import React from 'react';
const ImageFormat = {
    width:"100%", 
    height:"100%"
}
let BoxFormat = (props) =>{
    return(
    <div class="flip-box">
    <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require("../../images/modelun.png")} alt="Paris" style={ImageFormat}/>
    </div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an city</p>
    </div>
  </div>
</div>
)
}

export default BoxFormat