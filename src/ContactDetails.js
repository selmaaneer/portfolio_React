import React from 'react';
import styles from './ContactDetails.module.css'


function ContactDetails() {
  return (
    <section className={styles.contactDetails}>
      <h2>Contact Details</h2>
      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> selmalavi@gmail.com</p>
        <p><strong>Phone:</strong> +91 9946369771</p>
        <p><strong>Address:</strong> Malappuram, Kerala, India</p>
        <p><strong>Social Media:</strong></p>
        <ul className={styles.socialIcons}>
          <li>
            <a href="https://www.linkedin.com/in/selma-aneer" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
          <li>
            <a href="https://github.com/selmaaneer" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
          {/* Add more social media icons as needed */}
        </ul>
      </div>
      
    </section>
  );
}

export default ContactDetails;
