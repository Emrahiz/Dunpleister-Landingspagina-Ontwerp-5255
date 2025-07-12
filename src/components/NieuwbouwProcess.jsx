import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiTool, FiLayers, FiCheckCircle, FiUser, FiFileText } = FiIcons;

const NieuwbouwProcess = () => {
  const processSteps = [
    {
      icon: FiSearch,
      title: 'Inspectie & Voorbereiding',
      description: 'Grondige inspectie van wanden en plafonds op oneffenheden of v-naden na oplevering.',
      details: ['Ondergrond schoon en stofvrij maken', 'Oneffenheden identificeren', 'V-naden beoordelen']
    },
    {
      icon: FiTool,
      title: 'Primer Aanbrengen',
      description: 'Toepassing van geschikte primer voor optimale hechting van het stucwerk.',
      details: ['Juiste primer selectie', 'Gelijkmatige verdeling', 'Optimale hechting garanderen']
    },
    {
      icon: FiLayers,
      title: 'Stucwerk Aanbrengen',
      description: 'Professionele toepassing van pleisterlaag voor gladde en strakke afwerking.',
      details: ['Dunpleister of traditioneel stuc', 'Egale verdeling', 'Perfecte gladheid']
    },
    {
      icon: FiCheckCircle,
      title: 'Afwerking & Controle',
      description: 'Finale afwerking en kwaliteitscontrole voor het gewenste eindresultaat.',
      details: ['Eindcontrole kwaliteit', 'Klaar voor schilderen/behangen', 'Garantie op het werk']
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
            Het Proces van Stucen van een Nieuwbouwwoning
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Het proces van het laten stucen van een nieuwbouwwoning omvat verschillende zorgvuldige stappen 
            om een perfect resultaat te garanderen. Elke stap is cruciaal voor de uiteindelijke kwaliteit.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Process Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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

        {/* Stukadoor Selection & Quote Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <SafeIcon icon={FiUser} className="text-blue-600 text-3xl" />
              <h3 className="text-2xl font-bold text-slate-900">
                Keuze van de Juiste Stukadoor
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              De keuze van de juiste stukadoor is van essentieel belang voor een succesvolle afwerking van 
              uw nieuwbouwwoning. Een ervaren stukadoor begrijpt de specifieke uitdagingen van nieuwbouw stucen.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-700 font-semibold">Waar op Letten</th>
                    <th className="text-left py-3 text-gray-700 font-semibold">Reden</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900">Vakmanschap</td>
                    <td className="py-3 text-gray-600">Voor een succesvolle afwerking</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900">Referenties</td>
                    <td className="py-3 text-gray-600">Geeft inzicht in eerdere projecten</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-900">Nieuwbouw Ervaring</td>
                    <td className="py-3 text-gray-600">Specifieke uitdagingen zoals zettingen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <SafeIcon icon={FiFileText} className="text-blue-300 text-3xl" />
              <h3 className="text-2xl font-bold">
                Offerte Aanvragen en Prijs per m²
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Het aanvragen van een offerte is een cruciale stap in het proces van het laten stucen van een 
              nieuwbouwwoning. Transparantie en duidelijkheid zijn essentieel.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Gedetailleerde Specificaties</h4>
                  <p className="text-blue-100 text-sm">Vermeld duidelijk uw wensen en aantal m²</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Transparante Prijzen</h4>
                  <p className="text-blue-100 text-sm">Prijs per m² inclusief eventuele bijkomende kosten</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SafeIcon icon={FiCheckCircle} className="text-blue-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Vrijblijvende Offerte</h4>
                  <p className="text-blue-100 text-sm">Geen verplichtingen, alleen duidelijkheid</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-blue-100 text-sm">
                <strong>Tip:</strong> Vraag meerdere offertes aan en vergelijk niet alleen op prijs, 
                maar ook op ervaring en kwaliteit van het werk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NieuwbouwProcess;