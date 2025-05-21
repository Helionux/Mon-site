import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Gestion des queux d'attentes",
      description: "Une plateforme e-commerce complète avec panier d'achat et paiement en ligne.",
      image: "https://via.placeholder.com/400x300",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      status: "En cours"
    },
    {
      id: 2,
      title: "Application de Gestion de Stock",
      description: "Application de gestion des Stock pour faciliter le contrôle sur les entrées et sorties des produits.",
      image: "https://via.placeholder.com/400x300",
      category: "web",
      technologies: ["React", "MongoDB"],
      link: "#",
      status: "Terminé"
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Site web portfolio responsive avec animations modernes.",
      image: "https://via.placeholder.com/400x300",
      category: "web",
      technologies: ["React", "CSS3", "JavaScript"],
      link: "#",
      status: "Terminé"
    },
    {
      id: 4,
      title: "Get-NDjam",
      description: "Une platforme de visite qui présente la ville de N'djamena-Tchad dans sa beautés et permet également de facilité une vie attirante pour le tourisme.",
      image: "https://via.placeholder.com/400x300",
      category: "web",
      technologies: ["React", "CSS3", "JavaScript"],
      link: "#",
      status: "En Cours"
    }
  ];

  const filters = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "app", label: "Applications" },
    { id: "design", label: "Design" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Voir le Projet
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-status">
                  <span className={`status-tag ${project.status === "Terminé" ? "status-completed" : "status-in-progress"}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 