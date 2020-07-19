import React from 'react';
import { Redirect } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';

let FooterStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "0.7vw",
    fontWeight: "normal",
    paddingTop: "1vw",

}
class Footer extends React.Component{
    render(){
        return(
            <h3 style = {FooterStyle}>Created by Victor Zheng<br></br>Last updated July 2020</h3>
        )
    }
}

export default Footer;