import React from 'react';
import styles from './Projects.module.css'

function Projects() {
  // Sample project data
  const projects = [
    {
      name: "Portfolio Website",
      description: "A digital portfolio created using React.js.",
      technologies: "React.js, CSS, JavaScript",
      githubLink: "https://github.com/yourusername/portfolio",
      demoLink: "https://yourportfolio.com"
    },
    {
      name: "Todo App",
      description: "A simple todo list application.",
      technologies: "React.js, Redux, CSS",
      githubLink: "https://github.com/yourusername/todo-app",
      demoLink: "https://todoapp.com"
    }
    // Add more projects as needed
  ];

  return (
    <section className={styles.projects}>
    <h2 className={styles.sectionTitle}>Projects</h2>
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <h3 className={styles.projectName}>{project.name}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <p className={styles.projectTechnologies}><strong>Technologies:</strong> {project.technologies}</p>
          <div className={styles.projectLinks}>
            <a className={styles.projectLink} href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className={styles.projectLink} href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Projects;
