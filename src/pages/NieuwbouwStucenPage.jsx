import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import NieuwbouwHero from '../components/NieuwbouwHero';
import NieuwbouwWhy from '../components/NieuwbouwWhy';
import NieuwbouwProcess from '../components/NieuwbouwProcess';
import NieuwbouwAlternatives from '../components/NieuwbouwAlternatives';
import NieuwbouwProblems from '../components/NieuwbouwProblems';
import NieuwbouwConclusion from '../components/NieuwbouwConclusion';
import Footer from '../components/Footer';

const NieuwbouwStucenPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      <div className="pt-16">
        <NieuwbouwHero />
        <NieuwbouwWhy />
        <NieuwbouwProcess />
        <NieuwbouwAlternatives />
        <NieuwbouwProblems />
        <NieuwbouwConclusion />
        <Footer />
      </div>
    </motion.div>
  );
};

export default NieuwbouwStucenPage;