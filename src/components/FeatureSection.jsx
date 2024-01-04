// components/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-content">
        <div className="feature-item">
          <h2>Financial Security</h2>
          <p>Ensure financial protection for your family in case of unexpected events.</p>
        </div>
        <div className="feature-item">
          <h2>Peace of Mind</h2>
          <p>Enjoy peace of mind knowing that your loved ones are safeguarded.</p>
        </div>
        <div className="feature-item">
          <h2>Flexible Plans</h2>
          <p>Choose from a variety of flexible life insurance plans tailored to your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
