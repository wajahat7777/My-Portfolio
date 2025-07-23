import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>CONTACT</h2>
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Email:</span>
          <a href="mailto:wajahatcru@gmail.com">wajahatcru@gmail.com</a>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Phone:</span>
          <a href="tel:03136381657">03136381657</a>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Location:</span>
          Islamabad, Pakistan
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>LinkedIn:</span>
          <a href="https://linkedin.com/in/wajahat7777" target="_blank" rel="noopener noreferrer">linkedin.com/in/wajahat7777</a>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>GitHub:</span>
          <a href="https://github.com/wajahat7777" target="_blank" rel="noopener noreferrer">github.com/wajahat7777</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 