"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  // Définition des couleurs directement dans le composant
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    secondary: '#FFA5A5', // Rouge pastel plus clair
    accent: '#FF8787', // Rouge pastel intermédiaire
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.4)'
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: colors.white }}>
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Placeholder for video - replace with actual video */}
          <div className="absolute inset-0 z-10" style={{ backgroundColor: colors.overlay }} /> {/* Overlay */}
          <Image 
            src="/hero-background.jpg" 
            alt="Sport Club Orléans" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8" style={{ color: colors.white }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            SPORT CLUB ORLÉANS
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Découvrez une expérience fitness unique dans un cadre moderne et bienveillant
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-medium text-lg transition-all"
              style={{ backgroundColor: colors.primary, color: colors.white }}
            >
              Réserver un bilan
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent rounded-full font-medium text-lg transition-all"
              style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: colors.white, color: colors.white }}
            >
              Découvrir nos activités
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke={colors.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
