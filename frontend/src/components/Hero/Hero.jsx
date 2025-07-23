import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const animatedTexts = [
  'Turning ideas into code...',
  'Building modern web & mobile experiences.',
  'Let\'s create something amazing together!'
];

const Hero = () => {
  const [animatedIdx, setAnimatedIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedIdx((prev) => (prev + 1) % animatedTexts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroAccent}></div>
      <div className={styles.left}>
        <h1 className={styles.title}>I'm Wajahat Ullah Khan</h1>
        <div className={styles.role}>(Software Developer)</div>
        <div className={styles.tagline}>Turning ideas into code. Building modern web & mobile experiences.</div>
        <div className={styles.animatedText}>{animatedTexts[animatedIdx]}</div>
        <p className={styles.desc}>Creating Modern and Responsive Web Applications<br/>Transforming Ideas Into Interactive Masterpieces</p>
        <div className={styles.ctaBtns}>
          <a href="/Wajahat-Ullah-Khan-Resume.pdf" download className={styles.cvBtn}>Download CV</a>
          <a href="#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/wajahat7777" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn}><FaGithub /></a>
          <a href="https://linkedin.com/in/wajahat7777" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn}><FaLinkedin /></a>
          <a href="mailto:wajahatcru@gmail.com" className={styles.socialIconBtn}><FaEnvelope /></a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.profileImg}></div>
      </div>
    </section>
  );
};

export default Hero; 