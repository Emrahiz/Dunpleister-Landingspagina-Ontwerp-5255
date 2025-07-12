import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiInfo } = FiIcons;

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'Droogtijd',
      dunpleister: 'Aanzienlijk sneller',
      traditional: 'Meerdere dagen',
      dunpleisterBetter: true
    },
    {
      feature: 'Laagdikte',
      dunpleister: 'Enkele millimeters',
      traditional: 'Enkele centimeters',
      dunpleisterBetter: true
    },
    {
      feature: 'Materiaalverbruik',
      dunpleister: 'Minimaal verbruik',
      traditional: 'Meer materiaal nodig',
      dunpleisterBetter: true
    },
    {
      feature: 'Arbeidsintensiteit',
      dunpleister: 'Machinaal spuiten',
      traditional: 'Handmatig aanbrengen',
      dunpleisterBetter: true
    },
    {
      feature: 'Eindresultaat',
      dunpleister: 'Perfect glad en strak',
      traditional: 'Vaak nabewerking nodig',
      dunpleisterBetter: true
    },
    {
      feature: 'Geschikt voor',
      dunpleister: 'Nieuwbouw wanden',
      traditional: 'Alle ondergronden',
      dunpleisterBetter: false
    }
  ];

  const costFactors = [
    {
      title: 'Voorbereiding Ondergrond',
      description: 'Kwaliteit van de nieuwbouw wanden beïnvloedt de voorbereidingstijd'
    },
    {
      title: 'Complexiteit Project',
      description: 'Omvang en specificaties van de nieuwbouwwoning'
    },
    {
      title: 'Ervaring Stukadoor',
      description: 'Professionele stukadoors zorgen voor efficiëntie en kwaliteit'
    },
    {
      title: 'Materiaalskwaliteit',
      description: 'Knauf dunpleister garandeert duurzaam en strak resultaat'
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
            Dunpleister vs Traditioneel Stucwerk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek het verschil tussen dunpleister en traditioneel stucwerk. 
            Zie waarom dunpleister de voorkeur heeft voor nieuwbouwprojecten.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Vergelijkingstabel
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Kenmerk</th>
                    <th className="text-left py-4 px-4 font-semibold text-blue-600">Dunpleister</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-600">Traditioneel Stuc</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 font-medium text-gray-900">{item.feature}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.dunpleisterBetter && <SafeIcon icon={FiCheck} className="text-green-500" />}
                          <span className={item.dunpleisterBetter ? 'text-green-700 font-medium' : 'text-gray-700'}>
                            {item.dunpleister}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.dunpleisterBetter && <SafeIcon icon={FiX} className="text-red-500" />}
                          <span className="text-gray-700">{item.traditional}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Kostenfactoren bij Dunpleister
            </h3>
            <p className="text-gray-600 mb-6">
              Bij het evalueren van dunpleister kosten is het essentieel om verder te kijken 
              dan alleen de prijs per m². Verschillende factoren beïnvloeden de totale investering.
            </p>
            <div className="space-y-4">
              {costFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiInfo} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{factor.title}</h4>
                    <p className="text-gray-600 text-sm">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">
              Waarom Investeren in Kwaliteit?
            </h3>
            <p className="text-blue-100 mb-6">
              Door te kiezen voor professionele dunpleister van dunpleisterspecialist.nl 
              bent u verzekerd van transparante kosten en ongeëvenaarde kwaliteit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiCheck} className="text-blue-300" />
                <span className="text-blue-100">Transparante prijsafspraken</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiCheck} className="text-blue-300" />
                <span className="text-blue-100">Professionele uitvoering</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiCheck} className="text-blue-300" />
                <span className="text-blue-100">Duurzame materialen (Knauf)</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiCheck} className="text-blue-300" />
                <span className="text-blue-100">Garantie op het werk</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-blue-100 text-sm">
                <strong>Tip:</strong> Investeer in een ervaren stukadoor voor optimale efficiency, 
                minimale verspilling en kortere doorlooptijd.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;