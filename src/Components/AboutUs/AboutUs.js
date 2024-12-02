import React from 'react';
import './AboutUs.css';
import aboutImage from '../Assets/Ab1.jpg'; // Adjust path as needed
import Abo from '../Abo/Abo.js';

function AboutUs() {
  return (
    <>
    <div>
      {/* Image section */}
      <div className="image-container">
        <img 
          src={aboutImage} 
          alt="About Us" 
          
          style={{width:"100%", height:"30%", display: 'flex', justifyContent: "center", marginTop:'20px'}}
           

        />
      </div>
    </div>
 <Abo/>
    </>
  );
}

export default AboutUs;
