import React, { useState } from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const mainProjects = [
  {
    title: 'Lost and Found System',
    desc: 'MERN Stack: A platform to help users report, search, and recover lost items efficiently. Built with React, it features a user-friendly interface, search filters, and item tracking.',
    image: '/LostAndFound.png',
    links: [
      { url: 'https://github.com/wajahat7777/Lost-and-Found-System/tree/main', icon: <FaGithub />, label: 'GitHub' },
    ],
  },
  {
    title: 'Mental Health Tracker',
    desc: 'A comprehensive mental health tracking application built with Next.js frontend and Node.js backend, featuring magic link authentication, daily mood logging, and personalized suggestions.',
    image: '/mentalhealthtracker.png',
    links: [
      { url: 'https://github.com/wajahat7777/Nexium_Wajahat_Project', icon: <FaGithub />, label: 'GitHub' },
      { url: 'https://mental-health-project-delta.vercel.app', icon: <FaExternalLinkAlt />, label: 'Vercel' },
    ],
  },
  {
    title: 'Smart Blog Summarizer',
    desc: 'A powerful AI-powered web application that transforms long blog posts into concise, intelligent summaries with instant Urdu translations.',
    image: '/blogsummariser.png',
    links: [
      { url: 'https://github.com/wajahat7777/Nexium_Wajahat_Assignment2', icon: <FaGithub />, label: 'GitHub' },
      { url: 'https://nexium-wajahat-assignment2.vercel.app/', icon: <FaExternalLinkAlt />, label: 'Vercel' },
    ],
  },
  {
    title: 'Quote Generator Web App',
    desc: 'A web application that generates inspirational quotes based on user-selected topics. Features animated UI, social sharing, and modern design.',
    image: '/QuoteGenerator.png',
    links: [
      { url: 'https://github.com/wajahat7777/Nexium_Wajahat_Assignment1?tab=readme-ov-file', icon: <FaGithub />, label: 'GitHub' },
      { url: 'https://nexium-wajahat-assignment1-gwpl.vercel.app/', icon: <FaExternalLinkAlt />, label: 'Vercel' },
    ],
  },
];

const casualProjects = [
  { title: 'E-Commerce Website', desc: 'Responsive and accessible website for a Walmart store, focusing on user experience (WCAG compliant).', url: 'https://github.com/wajahat7777/Grocery_store_website_html_css', icon: <FaGithub /> },
  { title: 'Verse Shop', desc: 'Database schema for a virtual shop application using C#, DBMS principles, focusing on data integrity and performance.', url: 'https://github.com/wajahat7777/Shop-Verse', icon: <FaGithub /> },
  { title: 'Car Rental and Management System', desc: 'Java Project for car rental and management.', url: 'https://github.com/wajahat7777/-Car-Rental-Management-System-CRMS-in-JAVA-', icon: <FaGithub /> },
  { title: 'Leaf Link', desc: 'Java Plant Management System using OOP, GRASP, and SQL.', url: 'https://github.com/wajahat7777/Leaf-Link', icon: <FaGithub /> },
  { title: "Dodge E'm Game", desc: 'C++ & SFML Graphics: Interactive game leveraging OOP and real-time collision detection.', url: 'https://github.com/wajahat7777/Dodge-EM-game-SFML-', icon: <FaGithub /> },
  { title: 'Labyrinth Explorer', desc: 'C++: Maze-solving game using advanced data structures and SFML graphics.', url: 'https://github.com/wajahat7777/labyrinth-Explorer-SFML-', icon: <FaGithub /> },
  { title: 'Tetris Game', desc: 'C++ & SFML Graphics: Fully functional Tetris game with deep game logic and OOP.', url: 'https://github.com/wajahat7777/Tetris-game-SFML-C-', icon: <FaGithub /> },
  { title: 'FotoPass app', desc: 'Modern and accessible prototypes for social/photo-sharing apps, delivering polished UI/UX designs.', url: 'https://www.figma.com/design/Y6eP6xZxlHPwdU6S1SiJgR/FotoPass-(Final-Design)?node-id=0-1&p=f&t=y4JB6sekMjHNJ9Od-0', icon: <SiFigma color="#a259ff" /> },
  { title: 'Pac Man Game', desc: 'Pac-Man clone using low-level assembly programming, efficient memory usage and game state management.', url: 'https://github.com/wajahat7777/Pac-Man-Game-Assembly-Masm-x86-', icon: <FaGithub /> },
];

const Projects = () => {
  const [mainIdx, setMainIdx] = useState(0);
  const prevMain = () => setMainIdx((mainIdx - 1 + mainProjects.length) % mainProjects.length);
  const nextMain = () => setMainIdx((mainIdx + 1) % mainProjects.length);
  const main = mainProjects[mainIdx];

  return (
    <section className={`${styles.projects} ${styles.sectionCard}`} id="projects" data-aos="fade-up" data-aos-duration="900">
      <h2 className={styles.heading}>PROJECTS</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselBtn} onClick={prevMain} aria-label="Previous Project"><FaChevronLeft /></button>
        <div className={styles.mainCard}>
          <div className={styles.mainImage} style={{backgroundImage: `url('${main.image}')`}}></div>
          <div className={styles.mainInfo}>
            <h3 className={styles.mainTitle}>{main.title}</h3>
            <p className={styles.mainDesc}>{main.desc}</p>
            <div className={styles.projectLinks}>
              {main.links.map((link, lidx) => (
                <a href={link.url} key={lidx} target="_blank" rel="noopener noreferrer" className={styles.projectLinkBtn} title={link.label}>
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <button className={styles.carouselBtn} onClick={nextMain} aria-label="Next Project"><FaChevronRight /></button>
      </div>
      <div className={styles.casualProjectsGrid}>
        {casualProjects.map((project, idx) => (
          <div className={styles.casualCard} key={idx}>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.casualLinkBtn}>{project.icon} Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 