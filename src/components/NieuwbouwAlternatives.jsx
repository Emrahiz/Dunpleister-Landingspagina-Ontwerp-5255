import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLayers, FiHome, FiCheck, FiX, FiInfo } = FiIcons;

const NieuwbouwAlternatives = () => {
  const behangVoordelen = [
    'Sneller dan stucwerk',
    'Vaak voordeliger alternatief',
    'Minder gevoelig voor scheurvorming bij zetting'
  ];

  const behangNadelen = [
    'Voorbereiding ondergrond nog steeds nodig',
    'V-naden en oneffenheden blijven zichtbaar',
    'Minder strak eindresultaat'
  ];

  const renovliesData = [
    {
      type: 'Voordelen',
      items: [
        'Camoufleert kleine scheurtjes',
        'Duurzame optie',
        'Geschikt bij zetting nieuwbouw'
      ],
      positive: true
    },
    {
      type: 'Nadelen',
      items: [
        'Nooit zo naadloos als professioneel stucwerk',
        'Aanbrengen kan tijdrovend zijn',
        'Zichtbare naden bij onvakkundig werk'
      ],
      positive: false
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
            Alternatieven voor Stucwerk
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Naast stucwerk zijn er diverse andere opties voor wandafwerking in een nieuwbouwwoning. 
            We vergelijken de alternatieven zodat je een weloverwogen keuze kunt maken.
          </p>
        </motion.div>

        {/* Behangen als Alternatief */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <SafeIcon icon={FiLayers} className="text-blue-600 text-3xl" />
              <h3 className="text-2xl font-bold text-slate-900">
                Behangen als Wandafwerking
              </h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Behangen kan een sneller en vaak voordeliger alternatief zijn voor het laten stucen van de muren. 
              Vooral in een nieuwbouwhuis waar nog enige zetting van de fundering kan plaatsvinden, kan behang 
              minder gevoelig zijn voor scheurvorming dan stucwerk.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                  <SafeIcon icon={FiCheck} />
                  Voordelen Behang
                </h4>
                <ul className="space-y-3">
                  {behangVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-amber-700 mb-4 flex items-center gap-2">
                  <SafeIcon icon={FiInfo} />
                  Aandachtspunten
                </h4>
                <ul className="space-y-3">
                  {behangNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Renovlies Voor- en Nadelen */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Voordelen en Nadelen van Renovlies
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Renovlies is een populaire keuze als wandafwerking, met name in nieuwbouwwoningen. 
              Het is relatief sterk en kan kleine scheurtjes door zetting goed camoufleren.
            </p>
            
            <div className="space-y-6">
              {renovliesData.map((section, index) => (
                <div key={index} className={`p-4 rounded-lg ${section.positive ? 'bg-green-50' : 'bg-red-50'}`}>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${section.positive ? 'text-green-700' : 'text-red-700'}`}>
                    <SafeIcon icon={section.positive ? FiCheck : FiX} />
                    {section.type} Renovlies
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${section.positive ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
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
            <div className="flex items-center gap-4 mb-6">
              <SafeIcon icon={FiHome} className="text-blue-300 text-3xl" />
              <h3 className="text-2xl font-bold">
                Wanneer Kiezen voor Plafond Stucen?
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Het plafond stucen in een nieuwbouwwoning is een beslissing die weloverwogen moet worden. 
              Hoewel de muren vaak de meeste aandacht krijgen, draagt een strak plafond aanzienlijk bij 
              aan de algehele uitstraling.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Voordelen Plafond Stucen</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-blue-100 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    Naadloze en egale oppervlakte
                  </li>
                  <li className="flex items-center gap-2 text-blue-100 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    Ruimte lijkt optisch groter
                  </li>
                  <li className="flex items-center gap-2 text-blue-100 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    Gevoel van luxe en moderniteit
                  </li>
                  <li className="flex items-center gap-2 text-blue-100 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    Efficiënter samen met muren
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Overwegingen</h4>
                <p className="text-blue-100 text-sm">
                  Vooral wenselijk in moderne nieuwbouwwoningen met hoge plafonds. Het stucwerk kan 
                  tegelijkertijd met de muren worden uitgevoerd voor een betere prijs per m².
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conclusie Alternatieven */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Conclusie: Stucwerk vs Alternatieven
          </h3>
          <p className="text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Hoewel er alternatieven zijn zoals behang en renovlies, biedt professioneel stucwerk nog steeds 
            de beste combinatie van esthetiek, duurzaamheid en waardebehoud voor je nieuwbouwwoning. 
            Voor een perfecte, strakke afwerking is het laten stucen van een nieuwbouwwoning door een 
            ervaren stukadoor nog steeds de superieure optie.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-blue-400">Stucwerk</h4>
              <p className="text-gray-300 text-sm">Perfect, duurzaam, waardeverhogend</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-yellow-400">Behang</h4>
              <p className="text-gray-300 text-sm">Sneller, voordeliger, maar minder perfect</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-orange-400">Renovlies</h4>
              <p className="text-gray-300 text-sm">Camouflage oplossing, maar nooit naadloos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NieuwbouwAlternatives;