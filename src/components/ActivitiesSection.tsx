"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ActivitiesSection = () => {
  // Couleurs définies directement dans le composant (cohérence avec Hero et SpiritSection)
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    white: '#FFFFFF',
    black: '#111111',
  };

  // Données des activités
  const activities = [
    {
      id: 'squash',
      title: 'SCO Squash',
      icon: '/icons/squash.svg', // À remplacer par les vraies icônes
      description: 'Squash haut de gamme avec parquet clair, vestiaires, douches individuelles et sauna.',
      features: ['Séances à l\'unité', 'Cartes séances', 'Location de matériel', 'Cours particuliers'],
      image: '/images/squash.jpg', // À remplacer par les vraies images
      color: '#FF6B6B',
    },
    {
      id: 'fitness',
      title: 'SCO Fitness & Bike',
      icon: '/icons/fitness.svg',
      description: 'Salles climatisées avec matériel haut de gamme et ambiances lumineuses et sonores de qualité.',
      features: ['Cours LesMills', 'Biking', 'Zumba & Renfo', 'Studios spécialisés'],
      image: '/images/fitness.jpg',
      color: '#FF6B6B',
    },
    {
      id: 'flex',
      title: 'SCO Flex & Bien-être',
      icon: '/icons/wellness.svg',
      description: 'Studio lumineux et climatisé avec sauna infrarouge et espace massages dans un cadre propice à la détente.',
      features: ['Cours en petits groupes', 'Accès libre', 'Sauna', 'Massages'],
      image: '/images/wellness.jpg',
      color: '#FF6B6B',
    },
    {
      id: 'cross',
      title: 'SCO Cross & Boxing',
      icon: '/icons/boxing.svg',
      description: 'Espace dédié et spacieux avec matériel professionnel, idéal pour se dépasser rapidement.',
      features: ['Cours variés', 'Petits groupes', 'Coaching personnalisé', 'Accès libre'],
      image: '/images/cross.jpg',
      color: '#FF6B6B',
    }
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            NOS <span style={{ color: colors.primary }}>ACTIVITÉS</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Découvrez une large gamme d'activités à Sport Club Orléans : fitness, biking, cross, flex, squash & bien-être.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div 
                  className="absolute inset-0 z-0" 
                  style={{ 
                    backgroundImage: `url(${activity.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} 
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{activity.description}</p>
                
                <ul className="mb-6">
                  {activity.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <span 
                        className="w-5 h-5 rounded-full mr-3 flex items-center justify-center flex-shrink-0" 
                        style={{ backgroundColor: colors.primary }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/activites/${activity.id}`} 
                  className="inline-block px-6 py-2 rounded-full text-white text-sm font-medium transition-transform hover:scale-105"
                  style={{ backgroundColor: colors.primary }}
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            href="/tarifs" 
            className="inline-block px-8 py-3 rounded-full text-white text-lg font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: colors.primary }}
          >
            Découvrir nos formules
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
