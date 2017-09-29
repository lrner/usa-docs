import React, { Component } from 'react';
import file from './text'
import './index.css';

var marked = require('marked');


class App extends Component {

  render() {
    return (
      <div className="App Confederation">
        <br />
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(file)}}></div>
        <img className='document' src="/img/ArticlesOfConfederation.jpg" alt="The Articles of Confederation"/>
      </div>
    );
  }
}

export default App;
