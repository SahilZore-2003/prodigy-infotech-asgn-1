import React from 'react'
import "./Title.scss"

const Title = ({title,heading}) => {
  return (
    <section>
      <p className='title'>{title}</p>
      <h1 className='heading'>{heading}</h1>
      <p className='sub-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      </p>
    </section>
  )
}

export default Title
