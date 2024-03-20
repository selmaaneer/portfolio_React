import React from 'react';
import styles from './Services.module.css'

function Services() {
  // Sample service data
  const services = [
    {
      name: "Web Development",
      description: "Creating responsive and user-friendly websites using the latest web technologies.",
    },
    {
      name: "Mobile App Development",
      description: "Building native and cross-platform mobile applications for iOS and Android platforms.",
    },
    {
      name: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces for digital products.",
    }
    // Add more services as needed
  ];

  return (
    <section className={styles.services}>
    <h2 className={styles.sectionTitle}>Services</h2>
    <div className="serviceList">
      {services.map((service, index) => (
        <div key={index} className={styles.service}>
          <h3 className={styles.serviceTitle}>{service.name}</h3>
          <p className={styles.serviceDescription}>{service.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Services;
