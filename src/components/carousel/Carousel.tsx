import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselProps } from '.';
const Carousel = ({ data }:CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.key} >
       
          <img src={item.image} alt={item.key + item.name} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
