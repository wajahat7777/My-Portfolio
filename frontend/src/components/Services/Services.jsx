import React from 'react';
import styles from './Services.module.css';
import { FaCode, FaMobileAlt, FaPaintBrush, FaDatabase, FaRobot, FaReact, FaRocket } from 'react-icons/fa';
import { SiFlutter, SiRedux, SiMongodb, SiFirebase, SiFigma, SiAdobe, SiNodedotjs } from 'react-icons/si';

const services = [
  {
    title: 'Full Stack Development',
    desc: 'Focus on client-side and server-side development, creating interactive and responsive user interfaces and robust backends.',
    icon: <FaCode color="#f5c242" />,
  },
  {
    title: 'React Development',
    desc: 'Specialize in building reusable UI components and managing state changes with React.',
    icon: <FaReact color="#61dafb" />,
  },
  {
    title: 'Flutter & Mobile Apps',
    desc: 'Develop iOS, Android, and cross-platform mobile apps using Flutter, Dart, and Firebase.',
    icon: <SiFlutter color="#0175c2" />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Design user interfaces and experiences using Figma and Adobe tools.',
    icon: <FaPaintBrush color="#a259ff" />,
  },
  {
    title: 'Database & Backend',
    desc: 'Design and manage SQL/MongoDB databases, build RESTful APIs, and handle authentication.',
    icon: <FaDatabase color="#f5c242" />,
  },
  {
    title: 'AI/ML Solutions',
    desc: 'Build AI/ML models and automation using PyTorch, TensorFlow, and Python.',
    icon: <FaRobot color="#ee4c2c" />,
  },
  {
    title: 'Launch & Deployment',
    desc: 'Deploy and optimize web apps for performance and scalability.',
    icon: <FaRocket color="#fff" />,
  },
];

const Services = () => {
  return (
    <section className={`${styles.services} ${styles.sectionCard}`} id="services" data-aos="fade-up" data-aos-duration="900">
      <h2 className={styles.heading}>SERVICES</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 