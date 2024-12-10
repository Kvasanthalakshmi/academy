// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Abslider.css'; // Ensure this CSS file is linked

// Import your images
import ac from '../Assets/c#.jpg';
import as from '../Assets/an.jpg';
// import ep from '../Assets/ep.jpg';
import hi from '../Assets/c++.jpg';
import hp from '../Assets/css.jpg';
import le from '../Assets/dj.jpg';
import ze from '../Assets/html.jpg';
import sa from '../Assets/java.jpg';
import py from '../Assets/python.jpg';
import re from '../Assets/re.jpg';
import an from '../Assets/an.jpg';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4, // Display 4 images at a time as shown in the example
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-image-container"><img src={ac} alt="Image 1" className="slider-image" /></div>
        <div className="slider-image-container"><img src={as} alt="Image 2" className="slider-image" /></div>
        {/* <div className="slider-image-container"><img src={ep} alt="Image 3" className="slider-image" /></div> */}
        <div className="slider-image-container"><img src={hi} alt="Image 4" className="slider-image" /></div>
        <div className="slider-image-container"><img src={hp} alt="Image 5" className="slider-image" /></div>
        <div className="slider-image-container"><img src={le} alt="Image 6" className="slider-image" /></div>
        <div className="slider-image-container"><img src={ze} alt="Image 7" className="slider-image" /></div>
        <div className="slider-image-container"><img src={sa} alt="Image 8" className="slider-image" /></div>
        <div className="slider-image-container"><img src={py} alt="Image 8" className="slider-image" /></div>
        <div className="slider-image-container"><img src={re} alt="Image 8" className="slider-image" /></div>
        <div className="slider-image-container"><img src={an} alt="Image 8" className="slider-image" /></div>

     
     
      </Slider>
    </div>
  );
}

export default ImageSlider;
