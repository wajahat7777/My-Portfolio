import React from 'react';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython, FaJava, FaDatabase, FaFigma, FaLinkedin, FaTerminal, FaCode } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiFirebase, SiDart, SiCplusplus, SiTypescript, SiTailwindcss, SiBootstrap, SiAdobe, SiPytorch, SiTensorflow, SiVercel, SiNetlify } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e44d26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572b6" /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Redux', icon: <SiRedux color="#764abc" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
  { name: 'Express', icon: <FaNodeJs color="#444" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
  { name: 'SQL', icon: <FaDatabase color="#00758f" /> },
  { name: 'Firebase', icon: <SiFirebase color="#ffca28" /> },
  { name: 'Flutter', icon: <SiDart color="#0175c2" /> },
  { name: 'Dart', icon: <SiDart color="#0175c2" /> },
  { name: 'Python', icon: <FaPython color="#3776ab" /> },
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599c" /> },
  { name: 'C#', icon: <FaCode color="#239120" /> },
  { name: 'Bash', icon: <FaTerminal color="#4eaa25" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
  { name: 'UI/UX', icon: <FaFigma color="#a259ff" /> },
  { name: 'Figma', icon: <FaFigma color="#a259ff" /> },
  { name: 'Adobe', icon: <SiAdobe color="#ff0000" /> },
  { name: 'GitHub', icon: <FaGithub color="#fff" /> },
  { name: 'Vercel', icon: <SiVercel color="#fff" /> },
  { name: 'Netlify', icon: <SiNetlify color="#00c7b7" /> },
  { name: 'PyTorch', icon: <SiPytorch color="#ee4c2c" /> },
  { name: 'TensorFlow', icon: <SiTensorflow color="#ff6f00" /> },
  { name: 'LinkedIn', icon: <FaLinkedin color="#0a66c2" /> },
];

const Skills = () => {
  return (
    <section className={`${styles.skills} ${styles.sectionCard}`} id="skills" data-aos="fade-up" data-aos-duration="900">
      <h2 className={styles.heading}>SKILLS</h2>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <div className={styles.card} key={idx}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 