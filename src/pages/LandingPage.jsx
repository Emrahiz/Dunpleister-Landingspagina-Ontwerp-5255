import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
import Comparison from '../components/Comparison';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Process />
        <Benefits />
        <Comparison />
        <CTA />
        <Footer />
      </div>
    </motion.div>
  );
};

export default LandingPage;