import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import sliderImage from "../Assets/Software.webp";
import anotherImage from "../Assets/tuiti.jpg";
import printer from "../Assets/typewriting.webp";
import Slider from "../Slider/Slider.js";


import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Slider Section */}
 <Slider />

      {/* CCTV Camera Section */}
      <section className="container my-5">
        <div className="row">
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
          >
            <div data-aos="fade-right">
              <img
                src={sliderImage}
                className="img-fluid rounded shadow"
                alt="CCTV Camera"
              />
            </div>
          </motion.div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>CCTV Camera</h1>
            <hr className="section-divider"/>
            <p className="lead">Starting from ₹18,000</p>
            <p>
              High-Quality Surveillance Camera
              <br/>
              Keep your premises secure with advanced CCTV technology.
              <br />
              Reliable, clear footage for round-the-clock protection.
            </p>
          </div>
        </div>
      </section>

      {/* Laptop Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Laptop</h1>
            <hr className="section-divider" />
            <p className="lead">Starting from ₹20,999</p>
            <p>
              High-Performance Laptops for Every Need
              <br />
              Discover cutting-edge laptops designed for work, gaming, and
              creativity.
              <br />
              Power, style, and speed in one sleek package.
            </p>
          </div>
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
          >
            <div data-aos="fade-left">
              <img
                src={anotherImage}
                className="img-fluid rounded shadow"
                alt="Laptop"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Printer Section */}
      <section className="container my-5">
        <div className="row">
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
          >
            <div data-aos="fade-right">
              <img
                src={printer}
                className="img-fluid rounded shadow"
                alt="Printer"
              />
            </div>
          </motion.div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Printer</h1>
            <hr className="section-divider" />
            <p className="lead">Starting from ₹5,666</p>
            <p>
              High-Resolution Color Printer
              <br />
              Effortlessly print vibrant photos and professional documents.
              <br />
              Precision, quality, and efficiency in every print.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
