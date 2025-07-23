import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
