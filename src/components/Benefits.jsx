import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiDollarSign, FiTrendingUp, FiShield, FiZap, FiStar } = FiIcons;

const Benefits = () => {
  const benefits = [
    {
      icon: FiClock,
      title: 'Snellere Uitvoering',
      description: 'Aanzienlijk sneller dan traditioneel stucwerk door kortere droogtijd en efficiënte toepassing.',
      highlight: '50% sneller'
    },
    {
      icon: FiDollarSign,
      title: 'Kosteneffectief',
      description: 'Lagere arbeidskosten en snellere oplevering resulteren in aantrekkelijke totaalkosten.',
      highlight: 'Betere prijs/kwaliteit'
    },
    {
      icon: FiTrendingUp,
      title: 'Superieure Kwaliteit',
      description: 'Perfect glad en strak resultaat dat superieur is aan traditionele methoden.',
      highlight: 'Perfecte gladheid'
    },
    {
      icon: FiShield,
      title: 'Duurzame Investering',
      description: 'Hoogwaardige materialen en vakmanschap zorgen voor jarenlange duurzaamheid.',
      highlight: 'Lange levensduur'
    },
    {
      icon: FiZap,
      title: 'Minimale Overlast',
      description: 'Snelle droging en efficiënte werkwijze minimaliseren overlast tijdens het bouwproces.',
      highlight: 'Minder overlast'
    },
    {
      icon: FiStar,
      title: 'Perfecte Basis',
      description: 'Ideale ondergrond voor latex spuiten en andere moderne afwerkingsmethoden.',
      highlight: 'Latex-ready'
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
            Voordelen van Dunpleister
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom steeds meer nieuwbouwprojecten kiezen voor dunpleister. 
            Van efficiëntie tot superieure afwerking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {benefit.highlight}
              </div>
              
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <SafeIcon icon={benefit.icon} className="text-white text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">
              Esthetische Voordelen
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                <p className="text-blue-100">Perfect strak en glad resultaat als standaard</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                <p className="text-blue-100">Naadloze en strakke afwerking voor moderne uitstraling</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                <p className="text-blue-100">Ideale basis voor latex spuiten en streepvrij resultaat</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                <p className="text-blue-100">Luxueuze uitstraling en minimalistische esthetiek</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Waarom Kiezen voor Dunpleister?
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Efficiëntie</h4>
                <p className="text-gray-600">Snellere uitvoering dan traditioneel stucwerk resulteert in kortere doorlooptijd en lagere kosten.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Superieure Afwerking</h4>
                <p className="text-gray-600">Ongekende gladheid en strakheid die traditioneel stucwerk overtreft.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Kosteneffectiviteit</h4>
                <p className="text-gray-600">Aantrekkelijke prijs per m² met superieure kwaliteit en snellere oplevering.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;