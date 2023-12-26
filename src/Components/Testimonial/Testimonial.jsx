import React from 'react'
import Title from '../Title/Title'
import "./Testimonial.scss"
import me from "../../assets/me.png"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='Testimonial container'>
        <Title title="Testimonial" heading="What They are Saying" />

        <div className="testimonial-card center">
            <img src={me} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil vitae accusantium quae illo dicta? Laboriosam natus illo suscipit itaque</p>
            <div className="starts">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
            </div>
            <h2>Sahil Zore</h2>
        </div>
    </div>
  )
}

export default Testimonial
