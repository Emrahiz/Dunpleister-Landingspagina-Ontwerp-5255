import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiSettings, FiLayers, FiStar } = FiIcons;

const Process = () => {
  const steps = [
    {
      icon: FiCheckCircle,
      title: 'Voorbereiding Ondergrond',
      description: 'Grondige reiniging en verwijdering van alle oneffenheden, stof en loszittende delen.',
      details: ['Stof en vuil verwijderen', 'Loszittende delen behandelen', 'Ondergrond controleren']
    },
    {
      icon: FiSettings,
      title: 'Primer Aanbrengen',
      description: 'Toepassing van geschikte primer voor optimale hechting van de dunpleister.',
      details: ['Juiste primer selectie', 'Gelijkmatige verdeling', 'Optimale hechting']
    },
    {
      icon: FiLayers,
      title: 'Eerste Laag Dunpleister',
      description: 'Machinale toepassing van eerste laag voor egalisatie en kleine imperfecties.',
      details: ['Spuitapparatuur toepassing', 'Egalisatie ondergrond', 'Imperfecties wegwerken']
    },
    {
      icon: FiStar,
      title: 'Tweede Laag & Afwerking',
      description: 'Tweede laag voor perfect strakke en gladde afwerking, klaar voor latex spuiten.',
      details: ['Spiegelgladde finish', 'Strakke afwerking', 'Klaar voor verdere afwerking']
    }
  ];

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
            Ons Werkproces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Het aanbrengen van dunpleister is een nauwkeurige procedure die begint met 
            grondige voorbereiding en eindigt met een perfecte afwerking.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 relative z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={step.icon} className="text-blue-600 text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Dunpleister Spuiten vs Traditioneel
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-600">Aspect</th>
                    <th className="text-left py-2 text-blue-600">Dunpleister Spuiten</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-700">Afwerking</td>
                    <td className="py-2 font-semibold text-slate-900">Snel en zeer egaal</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-700">Doorlooptijd</td>
                    <td className="py-2 font-semibold text-slate-900">Aanzienlijk korter</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Resultaat</td>
                    <td className="py-2 font-semibold text-slate-900">Strakker en gladder</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Waarom Professionele Stukadoors?
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Het aanbrengen van dunpleister vereist expertise. Onze professionals van 
              dunpleisterspecialist.nl hebben de kennis en het materieel voor perfecte resultaten.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300" />
                <span className="text-blue-100">Juiste voorbereiding ondergrond</span>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300" />
                <span className="text-blue-100">Optimale primer selectie</span>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300" />
                <span className="text-blue-100">Perfecte laagdikte en consistentie</span>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300" />
                <span className="text-blue-100">Duurzaam en esthetisch resultaat</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;