// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Import your logo image
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="company-info">
        <img src={logo} alt="Company Logo" className="logo-img" />
        <span className="company-name">Your Company Name</span>
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
