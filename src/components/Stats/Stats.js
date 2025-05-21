import React, { useState, useEffect } from "react";
import "./Stats.css";

function Stats() {
  const [stats, setStats] = useState([
    { id: 1, number: 0, label: "Projets Réalisés", icon: "fas fa-project-diagram" },
    { id: 4, number: 0, label: "Technologies Maîtrisées", icon: "fas fa-code" }
  ]);

  useEffect(() => {
    const targetNumbers = [3, 5];
    const duration = 20000; // 2 milliseconds
    const steps = 50;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map((stat, index) => {
          const target = targetNumbers[index];
          const current = stat.number;
          const increment = Math.ceil(target / steps);
          
          if (current < target) {
            return {
              ...stat,
              number: Math.min(current + increment, target)
            };
          }
          return stat;
        })
      );
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
        <h2>Stats</h2>
      <div className="container">
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-number">{stat.number}+</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats; 