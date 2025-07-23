import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>ABOUT ME</h2>
      <div className={styles.underline}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.text}>
          <p>
            Hello! My name is Wajahat Ullah Khan, a passionate and goal-driven student of Bachelor of Computer Science (BSCS), currently enrolled from 08/2022 to 06/2026 at the National University of Computer and Emerging Sciences, Islamabad, Pakistan. I specialize in software and web development, with experience in Flutter, Dart, Firebase, React, HTML, CSS, JavaScript, SQL, MongoDB, and more. I have a strong foundation in OOP, data structures, algorithms, and AI/ML (PyTorch, TensorFlow). I am driven by a love for technology and innovation, aiming to deliver exceptional results for clients and teams.
          </p>
        </div>
        <div className={styles.image}></div>
      </div>
    </section>
  );
};

export default About; 