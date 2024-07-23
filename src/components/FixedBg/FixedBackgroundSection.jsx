import React from 'react';
import './FixedBackgroundSection.css';
import arrow from '../assets/arrow.png'; // Make sure to import your arrow image

const FixedBackgroundSection = () => {
  return (
    <div className="fixed-background-container">
      <div className="fixed-background-overlay">
        <p className="small-text">GET A QUOTE FOR RENTAL USE</p>
        <h1>Are You Prepared to <span>Get Started?</span></h1>
        <h1>Get a Quote Right Now</h1>
        <button className="fixed-background-button">
          <img src={arrow} alt="Arrow" />
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FixedBackgroundSection;
