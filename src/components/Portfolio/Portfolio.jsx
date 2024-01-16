import React from "react";
import "./portfolio.css";

const projects = [
  {
    title: "Lyrx",
    image: "/Lyrx.png",
    deployLink: "https://lyrx-8c8792a2e8e6.herokuapp.com/",
    githubLink: "https://github.com/gstroup11/Lyrx",
  },
  {
    title: "Write.",
    image: "/Write.png",
    deployLink: "https://write-1k8g.onrender.com/",
    githubLink: "https://github.com/gstroup11/Write",
  },
  {
    title: "The Mattress Shop",
    image: "/MattressShop.png",
    deployLink: "https://gstroup11.github.io/The-Mattress-Shop/",
    githubLink: "https://github.com/gstroup11/The-Mattress-Shop",
  },
  {
    title: "Ecommerce Backend",
    image: "/Ecommerce.png",
    deployLink: "https://github.com/gstroup11/Ecommerce-Backend",
    githubLink: "https://github.com/gstroup11/Ecommerce-Backend",
  },
  {
    title: "Password Generator",
    image: "/Pass.png",
    deployLink: "https://gstroup11.github.io/Implementing-Strong-Password/",
    githubLink: "https://github.com/gstroup11/Implementing-Strong-Password",
  },
  {
    title: "Social Network API",
    image: "/Social.png",
    deployLink: "https://github.com/gstroup11/Social-Network-Api",
    githubLink: "https://github.com/gstroup11/Social-Network-Api",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h1 id="portfolio" className="section-heading">
        Portfolio
      </h1>
      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3 className="portfolio-title">{project.title}</h3>
            <div className="portfolio-links">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
