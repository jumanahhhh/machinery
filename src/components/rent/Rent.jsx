import React from 'react';
import './Rent.css';
import bulldozers from '../assets/conc.png'; 
import arrow from "../assets/arrow.png"
const Rent = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>HOW IT WORKS</h2>
        <h1>Renting Equipment with <span className="highlight">Built</span></h1>
        <h3>Over <span className="highlight">50+</span> Heavy Equipment for Rent!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend orci at iaculis congue. Vivamus quis auctor nulla. Aenean consequat lectus est, sed ullamcorper mi sagittis ac Aenean consequat lectus est.</p>
        <p>congue. Vivamus quis auctor nulla. Aenean consequat lectus est, sed ullamcorper mi sagittis ac Aenean consequat lectus est.</p>
        
        <div className="buttons">
          <button className="bttn yellow" ><img src={arrow}></img>Browse our Catalog</button>
          <button className="bttn yellow"><img src={arrow}></img>Request a Quote</button>
          <button className="bttn black"><img src={arrow}></img>Reliable Delivery</button>
          <button className="bttn yellow"><img src={arrow}></img>Easy Returns</button>
        </div>
      </div>
      <div class="image-container">
        <div class="yellow-background"></div>
        <img src={bulldozers} alt="Heavy Equipment" />
        <div class="overlay" id="overlay-text">
            <h3>Book & Rent Now at Built Modern Machinery</h3>
        </div>
   </div>  

    </div>
  );
};

export default Rent;
