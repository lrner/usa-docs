import React, { Component } from 'react';
import file from './text'

var marked = require('marked');


class App extends Component {

  render() {
    return (
      <div className="App">
        <br />
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(file)}}></div>
        <br /><br />
        <img className="document" src="/img/Bill of Rights.jpg" alt="The Bill of Rights"/>
      </div>
    );
  }
}

export default App;
