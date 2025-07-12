import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiHeart, FiTrendingUp, FiStar, FiPhone, FiMail } = FiIcons;

const NieuwbouwConclusion = () => {
  const advantages = [
    'Esthetische meerwaarde van strakke wandafwerking',
    'Moderne en luxueuze uitstraling',
    'Duurzame ondergrond voor verdere afwerkingen',
    'Minimaliseert zichtbaarheid van v-naden',
    'Verhoogd woongenot en marktwaarde',
    'Langetermijninvestering in comfort'
  ];

  const finalTips = [
    {
      icon: FiCheckCircle,
      title: 'Wees Geduldig',
      description: 'Het is soms verstandig om het huis eerst goed te laten "zetten" voordat u begint met de afwerking.'
    },
    {
      icon: FiStar,
      title: 'Kies Ervaring',
      description: 'Kies altijd voor een ervaren stukadoor met bewezen expertise in nieuwbouw stucwerk.'
    },
    {
      icon: FiTrendingUp,
      title: 'Vergelijk Offertes',
      description: 'Vraag om een vrijblijvende offerte en vergelijk de prijs per m² voor transparantie.'
    },
    {
      icon: FiHeart,
      title: 'Denk Integraal',
      description: 'Overweeg het plafond stucen mee te nemen voor een consistente afwerking door het hele huis.'
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
            Conclusie: Laten Stucen of Niet?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Na het doorlopen van alle aspecten, voor- en nadelen, en alternatieven, 
            kunnen we een weloverwogen advies geven over het stucen van uw nieuwbouwwoning.
          </p>
        </motion.div>

        {/* Samenvatting Voordelen */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Samenvatting van de Voordelen
            </h3>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              Het laten stucen van een nieuwbouwwoning door een ervaren stukadoor biedt een scala aan 
              onmiskenbare voordelen die de investering meer dan waard maken.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-lg flex items-start gap-3"
                >
                  <SafeIcon icon={FiCheckCircle} className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Persoonlijke Overwegingen */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Persoonlijke Voorkeuren en Overwegingen
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              De beslissing om uw nieuwbouwwoning te laten stucen is uiteindelijk afhankelijk van 
              persoonlijke voorkeuren, budget en de gewenste afwerking.
            </p>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Kies voor Stucwerk als:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">U de voorkeur geeft aan strakke, moderne uitstraling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">U bereid bent te investeren in duurzame oplossing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">Perfectie en naadloze afwerking belangrijk is</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Overweeg Alternatieven als:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">Budget beperkt is en snelle oplossing gewenst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">Tijdelijke afwerking voldoende is</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">Huis nog veel zetting kan ondergaan</span>
                  </li>
                </ul>
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
            <h3 className="text-2xl font-bold mb-6">
              Laatste Tips voor het Stucen van een Nieuwbouwwoning
            </h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Als u besluit uw nieuwbouwwoning te laten stucen, zijn er enkele belangrijke tips om het proces 
              soepel te laten verlopen en een optimaal resultaat te garanderen.
            </p>
            
            <div className="space-y-6">
              {finalTips.map((tip, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <SafeIcon icon={tip.icon} className="text-blue-300 text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">{tip.title}</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-blue-100 text-sm">
                <strong>Met deze aanpak bent u verzekerd van een prachtig en duurzaam resultaat in uw nieuwe thuis.</strong>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Klaar om Uw Nieuwbouwwoning te Laten Stucen?
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dunpleisterspecialist.nl staat klaar om u te adviseren over de beste oplossing voor uw nieuwbouwwoning. 
            Met onze ervaring in nieuwbouw stucwerk zorgen we voor een perfect resultaat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0612345678"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <SafeIcon icon={FiPhone} />
              <span>Bel Direct: 06 12 34 56 78</span>
            </a>
            <a 
              href="mailto:info@dunpleisterspecialist.nl"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <SafeIcon icon={FiMail} />
              <span>E-mail voor Advies</span>
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-blue-600 rounded-lg max-w-2xl mx-auto">
            <h4 className="font-semibold mb-2">Gratis Adviesgesprek</h4>
            <p className="text-blue-100 text-sm">
              Twijfelt u nog? Plan een gratis adviesgesprek in waarbij we uw specifieke situatie bespreken 
              en u voorzien van een transparant advies op maat.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NieuwbouwConclusion;