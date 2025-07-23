import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Front-end Development',
    desc: 'Focus on client-side development, creating interactive and responsive user interfaces.'
  },
  {
    title: 'React Development',
    desc: 'Specialize in building reusable UI components and managing state changes with React.'
  },
  {
    title: 'Flutter & Mobile Apps',
    desc: 'Develop iOS, Android, and cross-platform mobile apps using Flutter, Dart, and Firebase.'
  },
  {
    title: 'UI/UX Design',
    desc: 'Design user interfaces and experiences using Figma and Adobe tools.'
  },
  {
    title: 'Database & Backend',
    desc: 'Design and manage SQL/MongoDB databases, build RESTful APIs, and handle authentication.'
  },
  {
    title: 'AI/ML Solutions',
    desc: 'Build AI/ML models and automation using PyTorch, TensorFlow, and Python.'
  },
];

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.heading}>SERVICES</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 