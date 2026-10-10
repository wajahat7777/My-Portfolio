import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`${styles.about} ${styles.sectionCard}`} id="about" data-aos="fade-up" data-aos-duration="900">
      <h2 className={styles.heading}>ABOUT ME</h2>
      <div className={styles.underline}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.text}>
          <p>
          Hello! I'm Wajahat Ullah Khan, a Computer Science graduate from the National University of Computer and Emerging Sciences (FAST NUCES), Islamabad, Pakistan. I specialize in AI/ML, Generative AI, LLMs, AI agents, and AI automation, with hands on experience building intelligent applications using Python, TensorFlow, LangChain, RAG, and AI APIs. I also have experience in full stack development using Next.js, React, Node.js, REST APIs, SQL, MongoDB, and Firebase. My projects include AI powered applications, automation workflows, and intelligent systems that solve real world problems. I'm passionate about building practical AI products, exploring emerging technologies, and turning innovative ideas into impactful solutions.          </p>
        </div>
        <div className={styles.image}></div>
      </div>
    </section>
  );
};

export default About; 