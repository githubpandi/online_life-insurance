// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left-section">
          <h1>InsuranceBazzar</h1>
        </div>
        <div className="right-section">
          <ul>
            <li><a href="/"><h2>Home</h2></a></li>
            <li><a href="/aboutus"><h2>AboutUs</h2></a></li>
            <li><a href=""><h2>PopularPolicies</h2></a></li>
            <li><a href="/login"><h2>Login</h2></a></li>
            <li><a href="/signup"><h2>SignUp</h2></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
