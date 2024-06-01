import React from 'react'
import { Carousel } from 'react-bootstrap';
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home

