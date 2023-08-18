import React, { Component } from 'react';
import '../Navbar/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <i className="fa-brands fa-github"></i>
        <span>Github-Finder</span>
      </div>
    )
  }
}

export default Navbar;
