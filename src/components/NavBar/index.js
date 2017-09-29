import React, { Component } from 'react';
import './main.css';


class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="/declaration-of-independence">Declaration of Independence</a></li>
          <li><a href="/articles-of-confederation">Articles of Confederation</a></li>
          <li><a href="/constitution">Constitution</a></li>
          <li><a href="/bill-of-rights">Bill of Rights</a></li>
          <li><a href="/constitutional-amendments">Constitutional Amendments (11-27)</a></li>
          <li className="list-right"><a href="/about">About</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
