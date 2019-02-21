import React, { Component } from 'react';

// export default class Footer extends component {
 
//   render3(){
//     return (
//       <div className="footer_wrap">
//         <h1>Footer</h1>
//       </div>
//      );
//   }
//   render() {
//     return this.render3()
//   }
// }

export default (props) => {
  function render(){
    return (
      <div className="footer_wrap">
         <h1>Footer {props.name}</h1>
       </div>
    )
  }
  return render()
}

// export default Footer;

 
