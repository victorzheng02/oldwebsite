import React from 'react'

class HobbiesFormat extends React.Component{
    render(){
    return(

    <div class = "text">
    <img src={require(this.props.imagesrc)} alt="devpost" width = "20%" height = "20%"/>
        <h1>{this.props.hobbytext}</h1>
</div>)
    }
}
export default HobbiesFormat;