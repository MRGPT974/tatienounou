import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';
import { StarIcon } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Comment fonctionne tatienounou.fr ?
            </h2>
            <div className="flex justify-center">
              <StarIcon className="text-yellow-400 h-8 w-8 mx-1" />
              <StarIcon className="text-yellow-400 h-8 w-8 mx-1" />
              <StarIcon className="text-yellow-400 h-8 w-8 mx-1" />
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Une plateforme simple et efficace pour mettre en relation parents et 
              professionnels de la petite enfance partout en France.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-700">
                Inscription
              </h3>
              <p className="text-gray-600 text-center">
                Parents et professionnels s'inscrivent gratuitement et complètent leur profil.
              </p>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-pink-700">
                Mise en relation
              </h3>
              <p className="text-gray-600 text-center">
                Notre algorithme trouve les profils compatibles selon vos critères et disponibilités.
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-yellow-700">
                Contact sécurisé
              </h3>
              <p className="text-gray-600 text-center">
                Échangez via notre plateforme et convenez d'un rendez-vous en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;