import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
     <div className="nav_wrap">
     <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
         
        </ul>
     </div>
    );
  }
}

 
