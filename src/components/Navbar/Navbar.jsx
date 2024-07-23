import React, { Component } from 'react'
import "./Navbar.css"
class  Navbar extends Component{
  state={clicked: false};
  handleClick= ()=>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <div className='navbar'>
      <div className="nav-left">
        <h1> HMS </h1>
      </div>
      <div id="nav-menu" className={this.state.clicked ? ".nav-menu active" : ".nav-menu"}>
        <li><a className='active' href="index.html">Home</a></li>
        <li><a>About us</a></li>
        <li><a>Equipment</a></li>
        <li><a>Our Services</a></li>
        <li><a>Contact Us</a></li>
        <div className="btn">
        <a href="#"> ➭ Make Appoinment</a>
        </div>
      </div>
      

      <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      </div>
  )
}
}

export default Navbar
