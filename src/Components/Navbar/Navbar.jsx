import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <div className='link'>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact US</a>
          </div>
          <FaCartShopping />
          <button>Booking Now</button>
          <div className={showNav ? "navicon navactive" : "navicon"} onClick={() => setShowNav(!showNav)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className={showNav ? "mobile-links active" : "mobile-links"}>
        <a onClick={() => setShowNav(!showNav)} href="#home">Home</a>
        <a onClick={() => setShowNav(!showNav)} href="#about">About</a>
        <a onClick={() => setShowNav(!showNav)} href="#work">Work</a>
        <a onClick={() => setShowNav(!showNav)} href="#menu">Menu</a>
        <a onClick={() => setShowNav(!showNav)} href="#contact">Contact us</a>
      </div>
    </>
  )
}

export default Navbar
