import React from "react";
// import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import Stats from "../components/Stats/Stats";
import About from "../components/Abouts/About";
import "./styles/Accueil.css";

function Accueil() {
  return (
    <div>
      <Banner />
      <div className="navigation-links">
        <a href="#about" className="nav-link">À Propos</a>
        <a href="#skills" className="nav-link">Compétences</a>
        <a href="#stats" className="nav-link">Statistiques</a>
        <a href="#projects" className="nav-link">Projets</a>
        <a href="#testimonials" className="nav-link">Témoignages</a>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
}

export default Accueil;
