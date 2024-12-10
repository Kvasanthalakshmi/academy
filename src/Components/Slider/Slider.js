import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Corrected image paths
import Acc1 from "../Assets/a1.jpg";
import Acc2 from "../Assets/a2.jpg";
import Acc3 from "../Assets/a3.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatically play slides
    autoplaySpeed: 3000, // Delay between auto slide transitions
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Keep showing one slide on smaller devices
        },
      },
    ],
  };

  // Image array with imported images
  const images = [Acc1, Acc2, Acc3];

  return (
    <div style={{ padding: "20px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%", // Occupy 100% of the container's width
                height: "500px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
