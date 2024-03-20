import React from 'react';
import styles from './Skills.module.css'

function Skills() {
  // Sample skill data
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    // Add more skills as needed
  ];

  return (
    <>
    <header>
      <h1 className={styles.heading}>
        Selma's Resume
      </h1>
    </header>
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <h3>{skill.name}</h3>
            <p>Proficiency Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Skills;
