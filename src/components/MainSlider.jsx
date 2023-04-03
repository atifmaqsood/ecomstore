import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../images/b1.webp'
import b2 from '../images/b2.webp'
import b3 from '../images/b3.webp'
import b4 from '../images/b4.webp'

function MainSlider() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default MainSlider
