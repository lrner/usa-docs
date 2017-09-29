import React, { Component } from 'react';
import file from './text'
import './index.css';


var marked = require('marked');


class App extends Component {

  render() {
    return (
      <div className="App Constitution">
        <br />
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(file)}}></div>
        <img className='document' src="/img/Constitution_Pg1of4_AC.jpg" alt="Constitution Page 1" />
        <img className='document' src="/img/Constitution_Pg2of4_AC.jpg" alt="Constitution Page 2" />
        <img className='document' src="/img/Constitution_Pg3of4_AC.jpg" alt="Constitution Page 3" />
        <img className='document' src="/img/Constitution_Pg4of4_AC.jpg" alt="Constitution Page 4" />
      </div>
    );
  }
}

export default App;
