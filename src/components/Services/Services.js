import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      icon: "fas fa-code",
      title: "Développement Web",
      description: "Création de sites web et applications web modernes et responsives avec les dernières technologies.",
      features: [
        "Sites web vitrines",
        "Applications web",
        "E-commerce",
        "Portails web"
      ]
    },
    {
      id: 2,
      icon: "fas fa-mobile-alt",
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives et cross-platform pour iOS et Android.",
      features: [
        "Applications natives",
        "Applications hybrides",
        "PWA",
        "Maintenance"
      ]
    },
    {
      id: 3,
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur modernes et expériences utilisateur optimales.",
      features: [
        "Design d'interface",
        "Prototypage",
        "Wireframing",
        "Tests utilisateurs"
      ]
    },
    {
      id: 4,
      icon: "fas fa-server",
      title: "Backend & API",
      description: "Développement de solutions backend robustes et sécurisées avec des API RESTful.",
      features: [
        "API REST",
        "Bases de données",
        "Authentification",
        "Sécurité"
      ]
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Mes Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-link">
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 