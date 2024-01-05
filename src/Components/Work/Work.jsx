import React from 'react'
import "./Work.scss"
import chicken from "../../assets/chicken.png"
import truck from "../../assets/truck.png"
import touch from "../../assets/touch.png"
import Title from '../Title/Title'

import { Fade } from "react-awesome-reveal";



const Work = () => {

    const workCard = [
        {
            image: chicken,
            title: "Pick Meals"
        },
        {
            image: truck,
            title: "Choose How Often"
        },
        {
            image: touch,
            title: "Fast Deliveries"
        },
    ]


    return (
        <div className='work center' id='work'>
            <Title title="Work" heading="How It Works" />

            <div className="work-card-container">
                {
                    workCard.map((e, i) => (
                        <Fade duration={1500} >
                            <div className="work-card" key={i}>
                            <img src={e.image} alt="" />
                            <h3>{e.title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A natus dolores quidem, quibusdam ipsum laborum alias tempora cum unde itaque.</p>
                        </div>
                        </Fade>
                        
                    ))
                }

            </div>
        </div>
    )
}

export default Work
