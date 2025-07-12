import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiStar, FiTrendingUp, FiShield } = FiIcons;

const NieuwbouwWhy = () => {
  const reasons = [
    {
      icon: FiStar,
      title: 'Esthetische Meerwaarde',
      description: 'Een gladde afwerking draagt bij aan een moderne en strakke uitstraling, perfect passend bij nieuwbouwarchitectuur.'
    },
    {
      icon: FiShield,
      title: 'Duurzame Basis',
      description: 'Stucwerk zorgt voor een duurzame basis voor verdere afwerkingen zoals schilderen of behangen.'
    },
    {
      icon: FiTrendingUp,
      title: 'Verhoogde Woningwaarde',
      description: 'Een investering die de kwaliteit en belevingswaarde van je nieuwe thuis aanzienlijk verhoogt.'
    },
    {
      icon: FiHome,
      title: 'Perfect voor Nieuwbouw',
      description: 'Speciaal afgestemd op de specifieke behoeften en mogelijkheden van nieuwbouwwoningen.'
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
            Waarom Kiezen voor Nieuwbouw Stucen?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Het stucen van een nieuwbouwwoning biedt diverse voordelen die verder gaan dan alleen esthetiek. 
            Een gladde afwerking draagt bij aan een moderne en strakke uitstraling, die perfect past bij de 
            architectuur van de meeste nieuwbouwwoningen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <SafeIcon icon={reason.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
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
              Esthetische Voordelen van Glad Stucwerk
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              De esthetische impact van glad stucwerk in een nieuwbouwhuis is enorm. Waar veel nieuwbouwwoningen 
              standaard worden opgeleverd met behangklare wanden, zorgt een professionele stukadoor ervoor dat de 
              muren en plafonds spiegelglad worden.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">Rustige en luxe uitstraling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">Ruimte lijkt groter en lichter</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">Perfecte basis voor elke kleur</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">Tijdloos en modern interieur</span>
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
              Invloed op de Waarde van een Nieuwbouwhuis
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Naast de directe voordelen voor woongenot, heeft het stucwerk ook een positieve invloed op de waarde 
              van je nieuwbouwhuis. Een perfect afgewerkte wandafwerking met kwaliteitsstucwerk straalt luxe en zorg uit.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Voor Potentiële Kopers</h4>
                <p className="text-gray-600 text-sm">
                  Geen eigen investering nodig in stucwerk, direct instapklaar
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Verkoopprijs</h4>
                <p className="text-gray-600 text-sm">
                  Significante positieve invloed op de uiteindelijke verkoopprijs
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Marktpositie</h4>
                <p className="text-gray-600 text-sm">
                  Aantrekkelijker maken van je woning op de huizenmarkt
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NieuwbouwWhy;