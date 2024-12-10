import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import sliderImage from "../Assets/Software.webp";
import anotherImage from "../Assets/sof.jpg";
import printer from "../Assets/typewriting.webp";
import Slider from "../Slider/Slider.js";
import sliderImage1 from "../Assets/tuiti.jpg";
import Abslider from '../Abslider/Abslider';


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
            <h1>Subject</h1>
            <hr className="section-divider"/>
            
            <p>
              1. Networking - CCNA
              <br/>
              2. Networking - CCNP
              <br />
              3. Linux - RHCSA,RHCE
              <br/>
              4. Microsoft - MCSA, MCSE
              <br/>
              5. System Admin
              <br/>
              6. Cloud Service(Azure, AWS, DevOps)
              <br/>
              7. MS Office(Computer Basics)
            </p>
          </div>
        </div>
      </section>

      {/* Laptop Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Software</h1>
            <hr className="section-divider" />
            <p>
              1. C
              <br />
              2. C++
              <br />
              3. C#
              <br />
              4. VB / .NET
              <br/>
              5. Python
              <br/>
              6. Perl
              <br />
              7. Java
              <br/>
              8. HTML / CSS / Java Script
              <br/>
              9. Full Stack Developer
              <br/>
              10. Backend (RDBMS, PHP,Django)
              <br/>
              11. UI / UX Designer
              <br/>
              12. Automated Testing
              <br/>
              13. App Development
              <br/>
              14. Laravel
              <br/>
              15. Flutter
              <br/>
              16. Angular
              <br/>
              17. ReactJS
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
      <Abslider/>
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
            <h1>Job Orient</h1>
            <hr className="section-divider" />
            <p>
1. CCTV Technician              <br />
2. Fiber Optic Splicing
<br/>
3. Photoshop,Illustrator
<br/>
4. CorelDRAW
<br/>
5. AutoCAD
<br/>
6. Home Automation
<br/>
7. Tally PRIME
<br/>
8. Animation, Video Editing
<br />
9. Type Writing

            </p>
          </div>
        </div>
      </section>
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Tution</h1>
      <hr className="section-divider"/>
                  
            <p>
              1. Maths Tution(9th to Engineering)
              <br/>
              2. Tamil - Spoken & Written
              <br />
              3. English - Spoken & Written
              <br/>
              4. Maths - Spoken & Written
              <br/>
              5. TNPSC
              <br/></p>
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
                src={sliderImage1}
                className="img-fluid rounded shadow"
                alt="Laptop"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}

export default App;
