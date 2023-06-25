import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import item1 from "../assets/3.jpg"
import item2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div className='Services'>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
    <div>
      <img src={item1} alt="Item1" />
      <p className='legend'>Full Stack</p>
    </div>

    <div>
      <img src={item2} alt="Item2 " />
      <p className='legend'>Peer-to-Peer Support</p>
    </div>

    </Carousel>
    </div>
  )
}

export default Services