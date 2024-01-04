import React from 'react';
import Header from './Header';


const AboutUs = () => {
  return (
    
    <div className="about-us">
      <div className="overlay">
        <h1>About Us</h1>
        <p>
          Welcome to InsuranceBazzar, your trusted partner in finding the best insurance solutions.
          Our mission is to provide you with comprehensive and affordable insurance options to
          protect what matters most to you.
        </p>
        <p>
          Contact us today to learn more about our services and how we can assist you in
          securing a better future. <a href="/contact">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
