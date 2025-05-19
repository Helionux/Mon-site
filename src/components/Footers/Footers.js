import React from 'react';
import { Link } from 'react-router-dom';
import './Footers.css';

const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            Développeur Web Fullstack & UI/UX Designer passionné par la création
            d'expériences web exceptionnelles.
          </p>
        </div>

        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <div className="footer-links">
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: deouleallahh@gmail.com</p>
          <p>Téléphone: (+235) 62 13 83 52</p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='fab-foot'>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className='fab-foot'>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='fab-foot'>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HelioDev. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footers;