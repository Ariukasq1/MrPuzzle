import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  return (
    <div className="slider1">
      <Carousel className="orgon" fade>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/88888.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/99999.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/rubik3.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/rubik3.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
