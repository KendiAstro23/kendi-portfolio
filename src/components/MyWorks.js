import React from "react";
import "./MyWorks.css"; // Create a CSS file for styling

const MyWorks = () => {
  // Array to hold project details
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of Project One.",
      image: "work1.jpg", // Example image path
      link: "https://project-one-link.com",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of Project Two.",
      image: "work2.jpg",
      link: "https://project-two-link.com",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of Project Three.",
      image: "work3.jpg",
      link: "https://project-three-link.com",
    },
    // Add more projects as needed
  ];

  return (
    <section id="works">
    <div className="my-works">
      <h2>My Works</h2>
      <p>Here are some of the projects I've worked on to showcase my skills:</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default MyWorks;

