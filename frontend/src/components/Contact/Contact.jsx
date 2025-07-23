import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const contacts = [
  {
    label: 'Email',
    value: 'wajahatcru@gmail.com',
    href: 'mailto:wajahatcru@gmail.com',
    icon: <FaEnvelope color="#f5c242" />,
  },
  {
    label: 'Phone',
    value: '03136381657',
    href: 'tel:03136381657',
    icon: <FaPhoneAlt color="#61dafb" />,
  },
  {
    label: 'Location',
    value: 'Islamabad, Pakistan',
    href: null,
    icon: <FaMapMarkerAlt color="#ee4c2c" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/wajahat7777',
    href: 'https://linkedin.com/in/wajahat7777',
    icon: <FaLinkedin color="#0a66c2" />,
  },
  {
    label: 'GitHub',
    value: 'github.com/wajahat7777',
    href: 'https://github.com/wajahat7777',
    icon: <FaGithub color="#fff" />,
  },
];

const Contact = () => {
  return (
    <section className={`${styles.contact} ${styles.sectionCard}`} id="contact" data-aos="fade-up" data-aos-duration="900">
      <h2 className={styles.heading}>CONTACT</h2>
      <div className={styles.infoGrid}>
        {contacts.map((item, idx) => (
          <div className={styles.infoItem} key={idx}>
            <span className={styles.contactIcon}>{item.icon}</span>
            <span className={styles.label}>{item.label}:</span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">{item.value}</a>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact; 