import React from 'react'
import "./About.scss"
import section_img from "../../assets/section.png"


const About = () => {
    return (
        <section className='about' id='about'>
            <div className="left">
                <img src={section_img} alt="" />
            </div>
            <div className="right">
                <p>About</p>
                <h1>Food Is An Important Part
                    Of A Balanced Diet</h1>
                <div className="desc">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas sed quaerat modi veniam odit eveniet quibusdam est voluptatibus cupiditate.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas sed quaerat modi veniam odit eveniet quibusdam est voluptatibus cupiditate.
                    </p>
                </div>
                <div className="buttons">
                    <button className="btn">Learn More</button>
                    <button className="btn">Watch Now</button>
                </div>
            </div>
        </section>
    )
}

export default About
