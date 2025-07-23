import React from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About', icon: '👤' },
  { href: '#skills', label: 'Skills', icon: '🛠️' },
  { href: '#services', label: 'Services', icon: '💼' },
  { href: '#projects', label: 'Projects', icon: '📁' },
  { href: '#contact', label: 'Contacts', icon: '✉️' },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        {navLinks.map((link, idx) => (
          <li key={idx} className={styles.iconBox}>
            <a href={link.href} title={link.label}>
              <span className={styles.icon}>{link.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 