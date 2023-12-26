import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoEarthSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footer-top">
                <div className="left">
                    <img src={logo} alt="" />
                    <div className="social">
                        <a href="https://github.com/SahilZore-2003"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sahil-zore-a58810246/"><CiLinkedin /></a>
                        <a href="https://wa.me/+917066150130"><FaWhatsapp /></a>
                        <a href="https://sahilzore-2003.github.io/myportfolio"><IoEarthSharp /></a>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h3>Home</h3>
                        <p>Home</p>
                        <p>Packages</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h3>Packages</h3>
                        <p>Quality</p>
                        <p>Help</p>
                        <p>Share Us</p>
                        <p>Career Us</p>
                    </div>
                    <div>
                        <h3>About US</h3>
                        <p>+91 9356089857</p>
                        <p>zoresahil80@gmail.com</p>
                    </div>
                    <div>
                        <h3>Contact US</h3>
                        <p>Tearm & Condition</p>
                        <p>Privacy & Policy</p>
                    </div>
                </div>
            </div>
            <div className="copyright center">
                ©️ <b>Sahil Zore</b> 2024. All rights reserved
            </div>
        </div>
    )
}

export default Footer
