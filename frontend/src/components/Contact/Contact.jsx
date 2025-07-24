import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState } from 'react';

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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs.send(
      'service_jl1wyhm',
      'template_ux0xu2s',
      {
        name: form.name, 
        email: form.email, 
        message: form.message,
      },
      'iRSNHjE5zved43Wqq'
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

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
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Send Message</button>
        {status && <div className={styles.statusMsg}>{status}</div>}
      </form>
    </section>
  );
};

export default Contact; 