import React from 'react'
import Slider from 'react-slick';

function Carrousel({ children, infinite, arrows, autoplay }) {
    let settings = {
        dots: false,
        infinite: infinite,
        arrows: arrows ? false : true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: autoplay ? true : false,
              autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
          { children }
        </Slider>
  )
}

export default Carrousel
