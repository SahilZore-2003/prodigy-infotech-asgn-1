import React from 'react'
import "./Card.scss"
import { FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Card = () => {
    const cardItems = [
        {
            heading: "Todat 10 am to 7 am",
            subheading: "Working Hours",
            icon: FaRegClock
        },
        {
            heading: "velyka Vasy Lkisvska 100",
            subheading: "Get Directions",
            icon: IoLocationSharp
        },
        {
            heading: "+91 9356 089 857",
            subheading: "Call Online",
            icon: FaPhoneAlt
        }
    ]
    return (
        <section className='card-container'>
            {
                cardItems.map((e,i) => {
                    return (
                        <div className="card" key={i}>
                            {e.icon()}
                            <h3>{e.heading}</h3>
                            <p>{e.subheading}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Card
