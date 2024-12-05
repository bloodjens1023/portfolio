import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

function App() {
  const fadeInVariants = {
    hidden: { opacity: 0 }, // L'élément est invisible au départ
    visible: {
      opacity: 1, // L'élément devient complètement visible
      transition: {
        duration: 1, // Durée de l'animation (en secondes)
        ease: "easeOut", // Type de courbe de transition
      },
    },
  };
  return (
    <motion.div className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;