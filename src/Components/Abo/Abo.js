import React from "react";
import "./Abo.css";
import aboutImage from "../Assets/Ab1.jpg"; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>Welcome to Our Academy</h1>
        <p>Your gateway to quality education and a brighter future.</p>
      </div>
      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          To empower students with world-class education and help them achieve
          their dreams through innovation, dedication, and knowledge.
        </p>
      </section>
      <section className="about-us-section">
        <h2>Our Vision</h2>
        <p>
          We strive to be the leaders in the education sector, fostering a
          culture of excellence and holistic development for every student.
        </p>
      </section>
      <section className="about-us-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Excellence</h3>
            <p>We aim for the highest standards in everything we do.</p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We believe in honesty, ethics, and fairness in all our actions.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We encourage creativity and new ideas to drive progress.</p>
          </div>
          <div className="value-item">
            <h3>Collaboration</h3>       
            <p>We thrive on teamwork and mutual respect.</p>
          </div>
        </div>
      </section>
      {/* <section className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-member-image"
            />
            <h3>John Doe</h3>
            <p>Founder & Principal</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-member-image"
            />
            <h3>Jane Smith</h3>
            <p>Director of Academics</p>
          </div>
        </div>
      </section> */}
      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>Email: contact@academy.com</p>
        <p>Phone: 8754309295</p>
        <p>Address: 34/15, Balavinayagar Kovil Street, Tuticorin - 628002</p>
      </section>
    </div>
  );
};
export default AboutUs;








