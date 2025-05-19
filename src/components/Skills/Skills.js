import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 65 },
      ],
    },
    {
      category: "Outils",
      items: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Cursor", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Photoshop", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 