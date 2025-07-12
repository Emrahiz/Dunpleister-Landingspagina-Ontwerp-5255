import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiTool, FiStar } = FiIcons;

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Wat is Dunpleister?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dunpleister is een geavanceerd type pleisterwerk dat wordt gebruikt voor het efficiënt 
            en vakkundig egaliseren en afwerken van diverse oppervlakken, met name in nieuwbouw.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Kenmerken van Dunpleister
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <SafeIcon icon={FiHome} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Minimale Laagdikte</h4>
                    <p className="text-gray-600">Slechts enkele millimeters dik, veel dunner dan traditioneel stucwerk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <SafeIcon icon={FiTool} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Specialistische Toepassing</h4>
                    <p className="text-gray-600">Wordt aangebracht met gespecialiseerde spuitapparatuur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <SafeIcon icon={FiStar} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Perfect Resultaat</h4>
                    <p className="text-gray-600">Buitengewoon gladde en strakke afwerking</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ideaal voor Nieuwbouw</h3>
              <p className="text-blue-100 leading-relaxed">
                Dunpleister is de perfecte oplossing voor betonwanden of andere vlakke ondergronden 
                die een perfecte basis vereisen voor verdere afwerking zoals latex spuiten.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Versus Traditioneel Stucwerk</h3>
              <p className="text-gray-600 leading-relaxed">
                In tegenstelling tot traditioneel stucen, waarbij vaak dikkere lagen nodig zijn om 
                oneffenheden weg te werken, kenmerkt dunpleister zich door efficiëntie en snelheid.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;