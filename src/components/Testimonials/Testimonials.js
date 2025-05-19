import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Directeur Marketing",
      company: "Tech Solutions",
      content: "Un excellent développeur qui a su répondre à tous nos besoins. Son travail est de grande qualité et il est très professionnel.",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Marie Martin",
      role: "Fondatrice",
      company: "StartUp Innov",
      content: "Grâce à son expertise, notre projet a pu voir le jour dans les délais impartis. Je recommande vivement ses services.",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      name: "Pierre Durand",
      role: "CEO",
      company: "Digital Agency",
      content: "Un partenaire de confiance qui comprend parfaitement les besoins des clients et sait les traduire en solutions concrètes.",
      image: "https://via.placeholder.com/100"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Témoignages</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 