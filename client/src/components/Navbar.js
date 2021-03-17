import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li className="nav-li">Home</li>
        </Link>
        <Link to="/about">
          <li className="nav-li">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
