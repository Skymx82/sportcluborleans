"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialsSection = () => {
  // Couleurs définies directement dans le composant (cohérence avec les autres sections)
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    white: '#FFFFFF',
    black: '#111111',
    lightGray: '#F5F5F5',
  };

  // Données des témoignages
  const testimonials = [
    {
      id: 1,
      name: 'Sophie L.',
      activity: 'Fitness & Bike',
      avatar: '/images/testimonials/avatar1.jpg', // À remplacer par de vraies images
      quote: 'Après avoir essayé plusieurs salles, j\'ai enfin trouvé mon club idéal ! L\'ambiance est géniale et les coachs sont toujours disponibles pour nous aider à progresser.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Thomas M.',
      activity: 'Squash',
      avatar: '/images/testimonials/avatar2.jpg',
      quote: 'Les terrains de squash sont vraiment de qualité et l\'application de réservation est super pratique. Je recommande à tous les amateurs de squash !',
      rating: 5,
    },
    {
      id: 3,
      name: 'Julie D.',
      activity: 'Flex & Bien-être',
      avatar: '/images/testimonials/avatar3.jpg',
      quote: 'Les cours de yoga et le sauna ont transformé ma routine bien-être. L\'équipe est bienveillante et l\'ambiance est parfaite pour se ressourcer.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Maxime P.',
      activity: 'Cross & Boxing',
      avatar: '/images/testimonials/avatar4.jpg',
      quote: 'Les séances de cross training sont intenses mais tellement motivantes ! J\'ai vu des résultats en quelques semaines seulement. Merci à toute l\'équipe !',
      rating: 5,
    },
  ];

  // État pour le témoignage actif
  const [activeIndex, setActiveIndex] = useState(0);

  // Fonction pour afficher le témoignage suivant
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Fonction pour afficher le témoignage précédent
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Rendu des étoiles selon la note
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill={i < rating ? colors.primary : "#D1D5DB"} 
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block mr-1"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ));
  };

  return (
    <section className="py-20" style={{ backgroundColor: colors.lightGray }}>
      <div className="container mx-auto px-4 text-black">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            CE QUE <span style={{ color: colors.primary }}>DISENT</span> NOS MEMBRES
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Découvrez les expériences de nos membres qui ont transformé leur quotidien grâce à Sport Club Orléans.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Témoignage principal */}
          <motion.div
            key={testimonials[activeIndex].id}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <div 
                    className="absolute inset-0" 
                    style={{ 
                      backgroundImage: `url(${testimonials[activeIndex].avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} 
                  />
                </div>
              </div>
              
              {/* Contenu du témoignage */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                
                <p className="text-xl md:text-2xl italic mb-6 text-gray-700">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm" style={{ color: colors.primary }}>
                    Membre {testimonials[activeIndex].activity}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Boutons de navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: colors.primary }}
              aria-label="Témoignage précédent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: colors.primary }}
              aria-label="Témoignage suivant"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Indicateurs */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'w-6' : ''
                }`}
                style={{ 
                  backgroundColor: index === activeIndex ? colors.primary : '#D1D5DB',
                }}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
