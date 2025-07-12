import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiStar } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Dunpleister Specialist
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dé specialist in professioneel dunpleisterwerk voor nieuwbouwwoningen. 
              Superieure kwaliteit, snelle uitvoering en jarenlange garantie.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="text-sm" />
              ))}
              <span className="text-gray-300 ml-2">5.0 sterren</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiPhone} className="text-blue-400" />
                <span className="text-gray-300">06 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiMail} className="text-blue-400" />
                <span className="text-gray-300">info@dunpleisterspecialist.nl</span>
              </div>
              <div className="flex items-start gap-3">
                <SafeIcon icon={FiMapPin} className="text-blue-400 mt-1" />
                <span className="text-gray-300">Heel Nederland</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiClock} className="text-blue-400" />
                <span className="text-gray-300">Ma-Vr: 08:00-18:00</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Dunpleister nieuwbouw</li>
              <li>• Spuitpleisterwerk</li>
              <li>• Latex spuiten</li>
              <li>• Wandafwerking</li>
              <li>• Stucadoorswerk</li>
              <li>• Gratis advies</li>
            </ul>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Samenvatting Voordelen</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Uitzonderlijk strak resultaat</li>
              <li>• Sneller dan traditioneel stuc</li>
              <li>• Duurzame investering</li>
              <li>• Perfecte basis voor latex</li>
              <li>• Kosteneffectieve oplossing</li>
              <li>• Professionele garantie</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2024 Dunpleister Specialist. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-500 text-sm">
            Professioneel dunpleisterwerk • Nieuwbouw specialisten • Heel Nederland
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;