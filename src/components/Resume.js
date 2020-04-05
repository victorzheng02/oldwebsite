import React, { Component } from 'react';
import { Document } from 'react-pdf'
class Resume extends Component {
  render() {


    return (
      <div id="resume">
      <Document file="../images/Resume.pdf"
      onLoadSuccess={this.onDocumentLoadSuccess} />
   </div>
    );
  }
}

export default Resume;
