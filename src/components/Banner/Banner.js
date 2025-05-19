import React from "react";
import "./Banner.css";
import image from "../../assets/images/IMG-20241225-WA0041.jpg";

function Banner() {
  return (
    <div className="banner-container">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <img src={image} alt="Profile" className="profile-image"/>
          </div>
          <div className="hero-right">
            <h1 className="hero-text">
              Helio<span>Nux</span>
            </h1>
            <p className="hero-description">
              Bonjour, je suis Deoule-Allah Madjitoloum Heliodore, Développeur
              Web Fullstack & UI/UX Designer en formation. Basé à N'Djamena,
              Tchad.
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
