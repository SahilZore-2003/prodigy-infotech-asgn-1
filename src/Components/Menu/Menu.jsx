import React from 'react'
import "./Menu.scss"
import { FaRegStar } from "react-icons/fa";
import Title from '../Title/Title'
import image1 from "../../assets/item1.png"
import image2 from "../../assets/item2.png"
import image3 from "../../assets/item3.png"
import image4 from "../../assets/item4.png"
import image5 from "../../assets/item5.png"
import image6 from "../../assets/item6.png"
const Menu = () => {
    const menus = [
        {
            id: 1,
            image: image1,
            name: "Rose Muffen",
            price: 12
        },
        {
            id: 2,
            image: image2,
            name: "Pan Cake",
            price: 15
        },
        {
            id: 3,
            image: image3,
            name: "Egg Muffen",
            price: 10
        },
        {
            id: 4,
            image: image4,
            name: "Salads",
            price: 12
        },
        {
            id: 5,
            image: image5,
            name: "Egg Masala",
            price: 20
        },
        {
            id: 6,
            image: image6,
            name: "Vegie Muffen",
            price: 18
        }
    ]

    return (
        <div className='menu center' id='menu'>
            <Title title="Menu" heading="Explore our best menu" />
            <div className="menu-container">
                {
                    menus.map((e) => (
                        <div className="menu-item" key={e.id}>
                            <div className="top">
                                <img src={e.image} alt="" />
                            </div>
                            <div className="middle">
                                <h1>
                                    <span>{e.name}</span>
                                    <span>{e.price} $</span>
                                </h1>
                                <small>served with french fries + drink</small>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                            </div>
                            <div className="bottom">
                                <div className="stars">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className='addicon'>
                                    +
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Menu
