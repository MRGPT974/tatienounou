import React from 'react';
import { HeartIcon, ShieldCheckIcon, ClockIcon, ThumbsUpIcon } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-12">
          Pourquoi choisir tatienounou.fr ?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-500 mb-4">
              <HeartIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal-700">Service Personnalisé</h3>
            <p className="text-gray-600">
              Nous prenons en compte tous vos critères pour vous proposer des profils adaptés à vos besoins.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
              <ShieldCheckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal-700">Sécurité</h3>
            <p className="text-gray-600">
              Tous les profils sont vérifiés et les échanges sont sécurisés via notre plateforme.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
              <ClockIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal-700">Gain de Temps</h3>
            <p className="text-gray-600">
              Fini les recherches interminables, trouvez rapidement le professionnel qui vous convient.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
              <ThumbsUpIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal-700">Satisfaction</h3>
            <p className="text-gray-600">
              98% de nos utilisateurs trouvent la solution de garde idéale en moins de 2 semaines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;