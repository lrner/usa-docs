import React, { Component } from 'react';
import file from './text'

var marked = require('marked');


class About extends Component {

  render() {
    return (
      <div className="About">
        <br />
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(file)}}></div>
	<br /><br />
        <center><a href="https://github.com/lrner/usa-docs"><img src="/img/GitHub-Mark-32px.png" alt="github" /></a></center>
      </div>
    );
  }
}

export default About;
