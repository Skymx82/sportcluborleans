"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Couleurs définies directement dans le composant
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    secondary: '#FFA5A5', // Rouge pastel plus clair
    white: '#FFFFFF',
    black: '#000000',
    darkGray: '#333333',
    lightGray: '#F5F5F5',
    footerBg: '#1A1A1A'
  };

  // Variantes pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Liens du footer
  const footerLinks = {
    activities: [
      { name: "Fitness & Bike", href: "/fitness" },
      { name: "Squash", href: "/squash" },
      { name: "Flex & Bien-être", href: "/bien-etre" },
      { name: "Cross & Boxing", href: "/cross" }
    ],
    info: [
      { name: "À propos", href: "/about" },
      { name: "Tarifs", href: "/tarifs" },
      { name: "Planning", href: "/planning" },
      { name: "FAQ", href: "/faq" }
    ],
    legal: [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Politique de confidentialité", href: "/confidentialite" },
      { name: "CGV", href: "/cgv" }
    ]
  };

  // Réseaux sociaux
  const socialLinks = [
    { name: "Facebook", icon: "/images/facebook.svg", href: "https://www.facebook.com/sportcluborleans" },
    { name: "Instagram", icon: "/images/instagram.svg", href: "https://www.instagram.com/sportclub_orleans_nord/" }
  ];

  return (
    <footer style={{ backgroundColor: colors.footerBg, color: colors.white }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Logo et informations de contact */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>SPORT CLUB ORLÉANS</h3>
              <p className="text-sm opacity-80 mb-4">Votre salle de sport à Orléans</p>
            </div>
            <div className="space-y-2">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>6 Rue Lucien Bois, 45140 Saint-Jean-de-la-Ruelle</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0744530016">07 44 53 00 16</a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sportcluborleans@gmail.com">sportcluborleans@gmail.com</a>
              </p>
            </div>
          </motion.div>

          {/* Activités */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Nos activités</h3>
            <ul className="space-y-2">
              {footerLinks.activities.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Informations */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Informations</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Restez informé</h3>
            <p className="mb-4 opacity-80">Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres spéciales.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ color: colors.white }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-md font-medium"
                style={{ backgroundColor: colors.primary, color: colors.white }}
              >
                S'inscrire
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-0">
            <p className="text-sm opacity-70">© {new Date().getFullYear()} Sport Club Orléans. Tous droits réservés.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label={social.name}
              >
                {/* Placeholder pour les icônes de réseaux sociaux */}
                <span className="text-sm">{social.name.charAt(0)}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-xs opacity-70">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
