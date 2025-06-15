"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Types pour les liens de navigation
type SubMenuItem = {
  name: string;
  href: string;
};

type NavLink = {
  name: string;
  shortName: string;
  href: string;
  submenu?: SubMenuItem[];
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{[key: string]: boolean}>({});
  
  // Fonction pour basculer l'état d'expansion d'un sous-menu
  const toggleSubmenu = (name: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Couleurs définies directement dans le composant
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    secondary: '#FFA5A5', // Rouge pastel plus clair
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'rgba(255, 255, 255, 0)',
    semiTransparent: 'rgba(255, 255, 255, 0.9)'
  };

  // Détecter le scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Variantes pour les animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * i, duration: 0.5 }
    })
  };

  const navLinks = [
    { name: "Accueil", shortName: "Accueil", href: "/" },
    { name: "SCO Squash", shortName: "Squash", href: "/squash", 
      submenu: [
        { name: "Terrains", href: "/squash/terrains" },
        { name: "Réservations", href: "/squash/reservations" },
        { name: "Cours & Coaching", href: "/squash/cours" },
      ] 
    },
    { name: "SCO Fitness & Bike", shortName: "Fitness", href: "/fitness", 
      submenu: [
        { name: "Cours LesMills", href: "/fitness/lesmills" },
        { name: "Biking", href: "/fitness/biking" },
        { name: "Zumba & Renfo", href: "/fitness/zumba" },
      ] 
    },
    { name: "SCO Flex & Bien-être", shortName: "Bien-être", href: "/bien-etre", 
      submenu: [
        { name: "Studio Flex", href: "/bien-etre/studio" },
        { name: "Sauna", href: "/bien-etre/sauna" },
        { name: "Massages", href: "/bien-etre/massages" },
      ] 
    },
    { name: "SCO Cross & Boxing", shortName: "Cross", href: "/cross", 
      submenu: [
        { name: "Cross Training", href: "/cross/training" },
        { name: "Boxing", href: "/cross/boxing" },
      ] 
    },
    { name: "Tarifs & Abonnements", shortName: "Tarifs", href: "/tarifs" },
    { name: "Contact", shortName: "Contact", href: "/contact" }
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
      style={{
        backgroundColor: scrolled ? colors.semiTransparent : colors.transparent,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s'
      }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <div className="flex items-center">
            {/* Remplacer par votre logo */}
            <div className="font-bold text-2xl" style={{ color: scrolled ? colors.primary : colors.white }}>
              SPORT CLUB ORLÉANS
            </div>
          </div>
        </Link>

        {/* Menu pour desktop */}
        <div className="hidden md:flex items-center">
          <div className="flex">
            {navLinks.map((link, i) => (
              <div 
                key={link.name} 
                className="relative font-medium text-lg group px-4 flex flex-col items-center"
              >
                <Link 
                  href={link.href}
                  className="flex flex-col items-center"
                >
                  <span 
                    className="block py-2" 
                    style={{ color: scrolled ? colors.black : colors.white }}
                  >
                    {link.shortName}
                  </span>
                  <span 
                    className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 group-hover:w-1/2 transition-all duration-300" 
                    style={{ backgroundColor: colors.primary }}
                  ></span>
                </Link>
                
                {/* Tooltip pour le nom complet */}
                <div 
                  className="absolute top-full mt-2 px-3 py-1 rounded-md text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10"
                  style={{ 
                    backgroundColor: scrolled ? colors.white : colors.primary,
                    color: scrolled ? colors.black : colors.white,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {link.name}
                </div>
                
                {/* Sous-menu */}
                {link.submenu && (
                  <div 
                    className="absolute top-full left-0 mt-8 py-3 px-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] z-20"
                    style={{ 
                      backgroundColor: scrolled ? colors.white : colors.primary,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 rotate-45" 
                      style={{ backgroundColor: scrolled ? colors.white : colors.primary }}></div>
                    {link.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm hover:bg-black/10 transition-colors"
                        style={{ color: scrolled ? colors.black : colors.white }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-6 px-6 py-2 rounded-full font-medium"
            style={{ 
              backgroundColor: colors.primary, 
              color: colors.white 
            }}
          >
            Réserver
          </motion.button>
        </div>

        {/* Bouton menu hamburger pour mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-50 p-2"
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className="w-full h-0.5 block" 
              style={{ backgroundColor: isOpen || !scrolled ? colors.white : colors.black }}
            ></motion.span>
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-full h-0.5 block" 
              style={{ backgroundColor: isOpen || !scrolled ? colors.white : colors.black }}
            ></motion.span>
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              className="w-full h-0.5 block" 
              style={{ backgroundColor: isOpen || !scrolled ? colors.white : colors.black }}
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 flex flex-col pt-24 px-8 md:hidden"
            style={{ backgroundColor: colors.primary }}
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  className="w-full"
                >
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <Link 
                        href={link.href}
                        className="text-2xl font-medium py-2 flex-grow"
                        style={{ color: colors.white }}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-bold">{link.shortName}</span>
                        {link.name !== link.shortName && (
                          <span className="text-base block mt-1 opacity-80">{link.name}</span>
                        )}
                      </Link>
                      
                      {link.submenu && (
                        <button 
                          onClick={() => toggleSubmenu(link.name)}
                          className="p-2"
                          aria-label="Toggle submenu"
                        >
                          <motion.div
                            animate={{ rotate: expandedMenus[link.name] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.div>
                        </button>
                      )}
                    </div>
                    
                    {/* Sous-menu mobile */}
                    {link.submenu && (
                      <AnimatePresence>
                        {expandedMenus[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden ml-4 mt-2 border-l-2 pl-4"
                            style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                          >
                            {link.submenu.map((subItem) => (
                              <Link 
                                key={subItem.name} 
                                href={subItem.href}
                                className="block py-2 text-lg opacity-90 hover:opacity-100"
                                style={{ color: colors.white }}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}
              <motion.button
                custom={navLinks.length}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 rounded-full font-medium self-start"
                style={{ 
                  backgroundColor: colors.white, 
                  color: colors.primary 
                }}
              >
                Réserver
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
