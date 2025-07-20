// src/components/ProjectsSection.js
// import React from "react";
// import "../styles/ProjectsSection.css";

// const projects = [
//   {
//     image: "/images/svk.png", // make sure the images exist in public/images/
//     title: "SVK Landmark",
//     category: "Development",
//   },
//   {
//     image: "/images/videshi.png",
//     title: "Videshi jodi",
//     category: "Development",
//   },
//   {
//     image: "/images/kalaclap.png",
//     title: "Kala Clap",
//     category: "Development",
//   },
//   {
//     image: "/images/arun.png",
//     title: "Arun Naturals",
//     category: "Development",
//   },
//   {
//     image: "/images/amrutvam.png",
//     title: "Amrutvam Chai",
//     category: "Development",
//   },
//   {
//     image: "/images/agricos.png",
//     title: "Agricos Foods",
//     category: "Development",
//   },
// ];


// src/components/ProjectsSection.js
import React from "react";
import "../styles/ProjectsSection.css";

const projects = [
  {
    image: "/images/svk.png",
    title: "SVK Landmark",
    category: "Development",
    zipLink: "/templates/tire/index.html"
  },
  {
    image: "/images/videshi.png",
    title: "Videshi Jodi",
    category: "Development",
    zipLink: "/templates/Car/index.html" 
  },
  {
    image: "/images/kalaclap.png",
    title: "Kala Clap",
    category: "Development",
    zipLink: "/templates /online_courses/src/App.js"

  },
  {
    image: "/images/arun.png",
    title: "Arun Naturals",
    category: "Development",
    zipLink: "/templates/svk/index.html"

  },
  {
    image: "/images/amrutvam.png",
    title: "Amrutvam Chai",
    category: "Development",
    zipLink: "/templates/FoodMart-1.0.0/index.html"
  },
  {
    image: "/images/agricos.png",
    title: "Agricos Foods",
    category: "Development",
    zipLink: "/templates/ecom/frontend/index.html"

  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">
        Our projects <span className="highlight">make us proud</span>
      </h2>

      <div className="project-categories">
        <span className="active">All</span>
        <span>Design</span>
        <span>Development</span>
        <span>Marketing</span>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            className="project-card"
            href={project.zipLink}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <img src={project.image} alt={project.title} />
            <p className="category">{project.category}</p>
            <h4>{project.title}</h4>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
