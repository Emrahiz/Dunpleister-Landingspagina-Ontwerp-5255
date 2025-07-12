import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiTool, FiShield, FiInfo } = FiIcons;

const NieuwbouwProblems = () => {
  const commonProblems = [
    {
      title: 'Zetting van de Nieuwbouwwoning',
      description: 'Nieuwbouwwoningen ondergaan een natuurlijk zettingsproces waarbij de fundering en constructie zich aanpassen aan de ondergrond.',
      impact: 'Kan leiden tot kleine scheurtjes in muren en plafonds',
      solution: 'Wachten met stucen of flexibele stucmaterialen gebruiken'
    },
    {
      title: 'V-naden in Nieuwbouw',
      description: 'V-naden ontstaan op de plek waar prefab betonelementen samenkomen en zijn vaak zichtbaar als kleine inkepingen.',
      impact: 'Blijven zichtbaar onder stucwerk als ze niet goed worden weggewerkt',
      solution: 'Zorgvuldige voorbereiding en opvullen door professionele stukadoor'
    },
    {
      title: 'Scheurvorming in Stucwerk',
      description: 'Door zetting en natuurlijke bewegingen kunnen er scheuren ontstaan in het aangebrachte stucwerk.',
      impact: 'Aantast de esthetische uitstraling en kan verdere schade veroorzaken',
      solution: 'Professioneel herstel met speciale vulmiddelen en heraanbrengen'
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
            Veelvoorkomende Problemen en Oplossingen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bij het stucen van nieuwbouwwoningen kunnen er specifieke uitdagingen ontstaan. 
            Hier bespreken we de meest voorkomende problemen en hoe deze professioneel worden opgelost.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {commonProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="bg-red-100 p-4 rounded-xl">
                  <SafeIcon icon={FiAlertTriangle} className="text-red-600 text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <SafeIcon icon={FiInfo} />
                        Impact
                      </h4>
                      <p className="text-gray-700 text-sm">{problem.impact}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <SafeIcon icon={FiTool} />
                        Oplossing
                      </h4>
                      <p className="text-gray-700 text-sm">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Problem Solutions */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <SafeIcon icon={FiAlertTriangle} className="text-orange-600 text-3xl" />
              <h3 className="text-2xl font-bold text-slate-900">
                Ontstaan van Scheuren in het Stucwerk
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Een veelvoorkomende zorg bij het stucen van een nieuwbouwwoning is de kans op scheuren in het stucwerk. 
              Nieuwbouwwoningen ondergaan namelijk een zettingsproces, waarbij de fundering en constructie zich 
              aanpassen aan de ondergrond.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Preventie</h4>
                <p className="text-gray-600 text-sm">
                  Ervaren stukadoors houden rekening met zetting en passen technieken toe om scheurvorming te minimaliseren.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Timing</h4>
                <p className="text-gray-600 text-sm">
                  Wachten na oplevering of gebruik van flexibele stucmaterialen kan de duurzaamheid waarborgen.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Advies</h4>
                <p className="text-gray-600 text-sm">
                  Dunpleisterspecialist.nl adviseert over het optimale moment en de beste materialen voor uw situatie.
                </p>
              </div>
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
              <SafeIcon icon={FiShield} className="text-blue-300 text-3xl" />
              <h3 className="text-2xl font-bold">
                Oplossingen voor Scheurtjes en Scheuren
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Hoewel het ontstaan van scheurtjes in het stucwerk van een nieuwbouwwoning nooit volledig is uit te sluiten, 
              zijn er effectieve oplossingen om deze te herstellen en de strakke afwerking te behouden.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Kleine Scheurtjes</h4>
                <p className="text-blue-100 text-sm mb-3">
                  Kunnen vaak worden opgevuld met speciale vulmiddelen en vervolgens opnieuw worden afgewerkt.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Vrijwel onzichtbaar resultaat</span>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Grotere Scheuren</h4>
                <p className="text-blue-100 text-sm mb-3">
                  Kan het nodig zijn om een deel van het stucwerk te verwijderen en opnieuw aan te brengen.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Professionele beoordeling nodig</span>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Garantie & Nazorg</h4>
                <p className="text-blue-100 text-sm">
                  Een ervaren stukadoor beoordeelt de oorzaak en adviseert de meest geschikte herstelmethode 
                  voor langdurige duurzaamheid.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* V-naden Detailed Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            V-naden en Hun Impact op de Afwerking
          </h3>
          <p className="text-gray-300 mb-8 max-w-4xl mx-auto text-center leading-relaxed">
            V-naden zijn een ander veelvoorkomend probleem in nieuwbouwwoningen en kunnen een aanzienlijke impact 
            hebben op de uiteindelijke wandafwerking. Deze naden ontstaan op de plek waar prefab betonelementen samenkomen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <SafeIcon icon={FiInfo} className="text-yellow-400 text-3xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Wat zijn V-naden?</h4>
              <p className="text-gray-300 text-sm">
                Kleine inkepingen waar prefab betonelementen samenkomen, vaak zichtbaar in nieuwbouwwanden.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <SafeIcon icon={FiAlertTriangle} className="text-red-400 text-3xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Het Probleem</h4>
              <p className="text-gray-300 text-sm">
                Blijven zichtbaar onder stucwerk als ze niet goed worden weggewerkt, wat de esthetiek aantast.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <SafeIcon icon={FiTool} className="text-green-400 text-3xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">De Oplossing</h4>
              <p className="text-gray-300 text-sm">
                Professionele stukadoors bereiden v-naden zorgvuldig voor en vullen ze op voor een naadloze wand.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NieuwbouwProblems;