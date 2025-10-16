import React from "react";
//import { Link, Navigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
// import Testimonials from "../components/Testimonials/Testimonials";
import Stats from "../components/Stats/Stats";
import About from "../components/Abouts/About";
import "./styles/Accueil.css";

function Accueil() {
  return (
    <div>
      <Banner />
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
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
    </div>
  );
}

export default Accueil;
