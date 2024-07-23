import React from 'react';
import './HeroSection.css'; 
import excavatorImage from '../assets/ccutter.png'; 
import tile1 from "../assets/tile1.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>WELCOME TO BUILT</h1>
        <h2>Your Perfect Collaborator on any Project.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="hero-buttons">
          <button className="get-started"> ➭ Get Started</button>
          <button class="button">
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
</button>
          <button className="watch-it-now">Watch it Now</button>
        </div>
      </div>
      <div className="hero-overlay-image">
        <img src={excavatorImage} alt="Excavator" />
      </div>

      <div className="sliding-tile">
        <div className="sliding-content">
          <div className="slide"> {/* One Slide */}
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-1.png' alt="Logo 1" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-4.png' alt="Logo 2" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-1.png' alt="Logo 3" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-2.png' alt="Logo 4" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-1.png' alt="Logo 5" />
          </div>
          <div className="slide"> {/* One Slide */}
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-1.png' alt="Logo 1" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-4.png' alt="Logo 2" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-1.png' alt="Logo 3" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-2.png' alt="Logo 4" />
            <img src='https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/Client-1.png' alt="Logo 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
