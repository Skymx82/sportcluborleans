"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Couleurs définies directement dans le composant (cohérence avec les autres sections)
  const colors = {
    primary: '#FF6B6B', // Rouge pastel
    white: '#FFFFFF',
    black: '#111111',
  };

  // État du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    activity: 'general',
  });

  // État de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par un vrai appel API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        activity: 'general',
      });
      
      // Réinitialiser le message de succès après quelques secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: colors.primary }}>CONTACTEZ</span>-NOUS
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Une question ? Besoin d'informations ? Notre équipe est à votre écoute.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Informations de contact */}
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Horaires d'ouverture</h3>
                <p className="mb-1">Lundi - Vendredi: 7h - 22h</p>
                <p className="mb-1">Samedi: 9h - 20h</p>
                <p>Dimanche: 9h - 18h</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p className="mb-1">Sport Club Orléans</p>
                <p className="mb-1">6 Rue Lucien Bois</p>
                <p>45140 Saint-Jean-de-la-Ruelle</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="mb-1">Téléphone: 07 44 53 00 16</p>
                <p>Email: sportcluborleans@gmail.com</p>
              </div>
            </motion.div>
            
            {/* Formulaire de contact */}
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {isSubmitted ? (
                <div 
                  className="bg-green-600 text-white p-6 rounded-lg text-center"
                >
                  <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                  <p>Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="activity" className="block text-sm font-medium mb-1">Activité</label>
                      <select
                        id="activity"
                        name="activity"
                        value={formData.activity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="general">Information générale</option>
                        <option value="squash">SCO Squash</option>
                        <option value="fitness">SCO Fitness & Bike</option>
                        <option value="flex">SCO Flex & Bien-être</option>
                        <option value="cross">SCO Cross & Boxing</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="text-center md:text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full text-white text-lg font-medium transition-transform hover:scale-105 disabled:opacity-70"
                      style={{ backgroundColor: colors.primary }}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
