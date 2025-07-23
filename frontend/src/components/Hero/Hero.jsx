import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <h1 className={styles.title}>I'm Wajahat Ullah Khan <span className={styles.role}>(Software Developer)</span></h1>
        <p className={styles.desc}>Creating Modern and Responsive Web Applications<br/>Transforming Ideas Into Interactive Masterpieces</p>
        <a href="/Wajahat-Ullah-Khan-Resume.pdf" download className={styles.cvBtn}>Download CV</a>
        <div className={styles.socials}>
          <a href="https://github.com/wajahat7777" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/wajahat7777" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:wajahatcru@gmail.com">Email</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.profileImg} style={{ backgroundImage: `url('/myimage.jpg')` }}></div>
      </div>
    </section>
  );
};

export default Hero; 