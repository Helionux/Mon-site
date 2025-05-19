import React from "react";
import "./Banner.css";
import image from "../../assets/images/IMG-20241225-WA0041.jpg";

function Banner() {
  return (
    <div className="banner-container">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <img src={image} alt="HelioNux" className="profile-image"/>
          </div>
          <div className="hero-right">
            <h1 className="hero-text">
              HelioNux
            </h1>
            <h2 className="hero-subtitle">Développeur Web Fullstack & UI/UX Designer</h2>
            <p className="hero-description">
              Création de solutions web innovantes et performantes
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">Me Contacter</a>
              <a href="#projects" className="btn btn-secondary">Voir mes Projets</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
