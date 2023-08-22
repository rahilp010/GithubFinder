import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <i className="fa-brands fa-github"></i>
        <span>Github-Finder</span>
        <ul>
          <li>
            <Link to='/' className='link'><i className="fas fa-home fa-sm me-2"></i>Home</Link>
            <Link to='/about' className='link'><i className="fas fa-info-circle fa-sm me-2"></i> About</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
