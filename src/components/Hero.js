import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import img1 from "./assests/Shiva.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./hero.css"; // Import your CSS file for animations
import { Link } from "react-router-dom";

function Hero() {
  const buttonStyle = {
    fontSize: "10px",
    backgroundColor: "#ecf0f1",
    border: "1px solid ",
    transition: "background-color 0.3s, border-color 0.3s",
    borderColor: "white",
    color: "black",
  };
  return (
    <div>
    
    <div className="hero-container d-flex juistify-content-center align-items-center">
      <Container>
      <div className="d-flex justify-content-center align-items-center">
          <Image
            src={img1}
            alt="Hero Image"
            fluid
            style={{
              borderRadius: "50%",
              maxHeight: "5rem",
              marginRight: "2rem",
            }}
            className="hero-image"
          />

          <div className="hero-text">
            <h1>Shiva Maharjan</h1>
              <p>Front-End Developer</p>
          </div>
        </div>
        <div className="hero-buttons d-flex justify-content-center align-items-center hero-buttons">
        <Button style={buttonStyle}
        className="social-icon"
          >
            Download Resume
          </Button>
          <div className="hero-social-icons d-flex ms-4">
            <Link to="/" className="nav-link"><FaLinkedin className="social-icon" /></Link>
            <Link to="/" className="nav-link"><AiFillInstagram className="social-icon" /></Link>
            <Link to="/" className="nav-link"><MdEmail className="social-icon" /></Link>
            
          </div>
        </div>

      </Container>

    </div>
    </div>
    
  );
}

export default Hero;
