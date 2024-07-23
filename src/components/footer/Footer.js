import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">
            <span className="footer-logo-icon">⚙️</span>
            Built
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis.
          </p>
          <p>
            adipiscing elit ut elit tellus luctus nec ullamcorper mattis.
          </p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Equipment</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Precision Tools</a></li>
            <li><a href="#">Heavy-duty Gear</a></li>
            <li><a href="#">Tech Solutions</a></li>
            <li><a href="#">Industrial Muscle</a></li>
            <li><a href="#">Custom Fleet</a></li>
            <li><a href="#">Reliable Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © Jumanah Maheen</p>
      </div>
    </footer>
  );
}

export default Footer;
