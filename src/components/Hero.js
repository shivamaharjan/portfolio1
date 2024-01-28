import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import img1 from "./assests/Shiva.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./hero.css"; // Import your CSS file for animations

function Hero() {
  return (
    <div className="hero-container">
      <Container>
        <div className="hero-content">
          <Image
            src={img1}
            alt="Hero Image"
            fluid
            className="hero-image"
          />
          <div className="hero-text">
            <h1>Shiva Maharjan</h1>
            <p>Front-End Developer</p>
          </div>
        </div>
        <div className="hero-buttons">
          <Button className="hero-button">Download Resume</Button>
          <div className="hero-social-icons">
            <FaLinkedin className="social-icon" />
            <AiFillInstagram className="social-icon" />
            <MdEmail className="social-icon" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
