"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SpiritSection = () => {
  // Couleurs définies directement dans le composant (cohérence avec Hero)
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    white: '#FFFFFF',
    black: '#111111',
  };

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Partie vidéo verticale (1/3 de l'écran sur desktop, pleine largeur en dessous sur mobile) */}
        <div className="relative w-full md:w-1/3 h-[400px] md:h-auto">
          <video 
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/club-spirit.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          
          {/* Overlay léger */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Contenu */}
        <div className="relative w-full md:w-2/3 bg-black">
          <div className="px-6 py-16 md:py-0 md:px-12 h-full flex items-center">
            <div className="max-w-2xl mx-auto text-white">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                L'ESPRIT <span style={{ color: colors.primary }}>SPORT CLUB</span>
              </motion.h2>
              
              <motion.p 
                className="text-base md:text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Une seule règle : bienveillance & respect ! Quel que soit votre niveau ou votre expérience sportive, quels que soient vos objectifs & motivation… notre club est ouvert à tous.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-start gap-8 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold mb-1" style={{ color: colors.primary }}>6</span>
                  <span className="text-base md:text-lg">Activités</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold mb-1" style={{ color: colors.primary }}>100%</span>
                  <span className="text-base md:text-lg">Inclusif</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold mb-1" style={{ color: colors.primary }}>1</span>
                  <span className="text-base md:text-lg">Bilan offert</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link 
                  href="/tarifs"
                  className="px-6 py-3 rounded-full text-base md:text-lg font-medium transition-transform hover:scale-105 inline-block"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                >
                  Découvrir nos formules
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritSection;
