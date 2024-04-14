// About.js
import React from 'react';
import './About.css'; // Import CSS file for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>About Us</h2>
        <p>Welcome to our company! We are dedicated to providing the best products and services to our customers.</p>
      </div>
      <div className="background-section">
        <h2>Our Company Background</h2>
        <p>Here you can detail the background, history, and any other relevant information about your company.</p>
      </div>
      <div className="company-details">
        <h2>Company Details</h2>
        <p>
          <strong>Ali company</strong><br />
          lusaka Zamdia<br />
          CO 80302<br /><br />
          <strong>Email:</strong> gmail.com
        </p>
      </div>
    </div>
  );
}

export default About;
