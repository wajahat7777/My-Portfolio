import React from 'react';
import styles from './Skills.module.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Flutter', 'Dart', 'Firebase', 'SQL', 'MongoDB',
  'UI/UX', 'Figma', 'Adobe', 'JAVA', 'C++', 'C', 'C#', 'Bash', 'Python', 'OOP', 'Data Structures', 'Algorithms', 'PyTorch', 'TensorFlow'
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>SKILLS</h2>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <div className={styles.card} key={idx}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 