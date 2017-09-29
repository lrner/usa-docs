import React, { Component } from 'react';
import file from './text'
import './index.css';


var marked = require('marked');


class App extends Component {

  render() {
    return (
      <div className="App DeclarationOfIndependence">
        <br />
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(file)}}></div>
        <br />
        <br />
        <br />
        <img src="/img/United_States_Declaration_of_Independence.jpg" alt="The Declaration of Independence"/>
      </div>
    );
  }
}

export default App;
