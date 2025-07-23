import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Note Taking App',
    desc: 'Built a Note-Taking App in Flutter with Firebase Authentication. MVVM architecture, real-time sync, secure auth.',
    demo: '#',
    image: '/project1.jpg',
  },
  {
    title: 'Lost and Found System',
    desc: 'MERN Stack: Platform to report, search, and recover lost items. User-friendly interface, search filters, item tracking.',
    demo: '#',
    image: '/project2.jpg',
  },
  {
    title: 'Mental Health Tracker',
    desc: 'Next.js frontend, Node.js backend. Magic link auth, daily mood logging, personalized suggestions.',
    demo: '#',
    image: '/project3.jpg',
  },
  {
    title: 'Smart Blog Summarizer',
    desc: 'AI-powered app that transforms long blog posts into concise summaries with instant Urdu translations.',
    demo: '#',
    image: '/project4.jpg',
  },
  {
    title: 'E-Commerce Website',
    desc: 'Responsive, accessible website for a Walmart store. Focused on user experience (WCAG compliant).',
    demo: '#',
    image: '/project5.jpg',
  },
  {
    title: 'Verse Shop',
    desc: 'Database schema for a virtual shop app using C#, DBMS principles, data integrity, normalization, optimized queries.',
    demo: '#',
    image: '/project6.jpg',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>PROJECTS</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.image} style={{backgroundImage: `url(${project.image})`}}></div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.demo} className={styles.demoBtn} target="_blank" rel="noopener noreferrer">check demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 