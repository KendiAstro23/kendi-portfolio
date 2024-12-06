import React from "react";
import "./Portfolio.css";

const PortfolioSection = () => {
  const technologies = [
    { id: "react", name: "React", description: "Building dynamic UI components.", icon: "/image2vector.svg" },
    { id: "javascript", name: "JavaScript", description: "Core logic and interactivity.", icon: "/image2vector (1).svg" },
    { id: "html", name: "HTML5", description: "Structuring content for the web.", icon: "/image2vector (2).svg" },
    { id: "css", name: "CSS3", description: "Styling websites beautifully.", icon: "/image2vector (3).svg" },
    { id: "nodejs", name: "Node.js", description: "Backend JavaScript runtime.", icon: "/image2vector (4).svg" },
    { id: "git", name: "Git", description: "Version control and collaboration.", icon: "/image2vector (5).svg" },
  ];

  return (
    <section id="services">
    <div className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {technologies.map((tech) => (
          <div className="portfolio-item" key={tech.id}>
            <img src={tech.icon} alt={`${tech.name} logo`} className="portfolio-icon" />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PortfolioSection;
