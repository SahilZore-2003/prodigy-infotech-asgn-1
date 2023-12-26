import React from 'react'
import "./Header.scss"
import Navbar from '../Navbar/Navbar'
import home_img from "../../assets/home.png"
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header id='home'>
      <Navbar />
      <div className="container">
        <div className='left'>
          <h1>Your Favourite Food Delivered Hote & Fresh</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta sed odio corporis commodi obcaecati repudiandae asperiores id velit dolor.</p>
          <button>Order Now <FaArrowRight /></button>
        </div>
        <div className="right">
          <img src={home_img} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
