import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiLayers, FiZap, FiShield } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Nieuwbouw Afwerking',
      description: 'Specialistische dunpleister toepassing voor nieuwbouwwoningen met perfecte afwerking.',
      features: ['Betonwanden', 'Prefab materialen', 'Vlakke ondergronden']
    },
    {
      icon: FiLayers,
      title: 'Twee-Laags Systeem',
      description: 'Professionele toepassing in twee lagen voor optimaal resultaat.',
      features: ['Eerste laag egalisatie', 'Tweede laag afwerking', 'Spiegelgladde finish']
    },
    {
      icon: FiZap,
      title: 'Snelle Uitvoering',
      description: 'Efficiënte werkwijze met minimale droogtijd en snelle oplevering.',
      features: ['Korte doorlooptijd', 'Snelle droging', 'Minimale overlast']
    },
    {
      icon: FiShield,
      title: 'Duurzame Kwaliteit',
      description: 'Hoogwaardige materialen en vakmanschap voor jarenlange duurzaamheid.',
      features: ['Knauf dunpleister', 'Professionele garantie', 'Lange levensduur']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Onze Dunpleister Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionele dunpleister services voor alle nieuwbouwprojecten. 
            Van voorbereiding tot perfecte afwerking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <SafeIcon icon={service.icon} className="text-white text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Dunpleister vs Renovlies
          </h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            De keuze tussen dunpleister en renovlies is belangrijk. Dunpleister biedt een naadloze, 
            strakke en gladde afwerking, superieur aan renovlies dat soms naden laat zien.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Dunpleister Voordelen</h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Naadloze afwerking</li>
                <li>• Superieure gladheid</li>
                <li>• Duurzame oplossing</li>
                <li>• Perfecte basis voor latex</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Renovlies Nadelen</h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Zichtbare naden</li>
                <li>• Minder duurzaam</li>
                <li>• Beperkte gladheid</li>
                <li>• Camouflage oplossing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;