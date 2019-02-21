import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Home extends Component {
  render() {
    return (
     <div className="home_wrap">
       <h1>Home page</h1>
       <Counter />

       
     </div>
    );
  }
}

 
