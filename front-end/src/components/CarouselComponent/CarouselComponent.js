import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showIndicators={false}
      emulateTouch={true}
      interval={2000}
      infiniteLoop={true}
      showArrows={false}
    >
      <div>
        <img src="https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3000_.jpg" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/I/71zBGVPtAKL._SX3000_.jpg" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/I/61bHeh8tD5L._SX3000_.jpg" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
