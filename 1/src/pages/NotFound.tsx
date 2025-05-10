import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, Star } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-blue-50">
      <div className="text-center max-w-lg">
        <div className="mb-6 relative">
          <Star className="h-32 w-32 text-teal-300 opacity-50 mx-auto" fill="currentColor" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-teal-700">
            404
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page non trouvée
        </h1>
        
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Retournez à l'accueil pour continuer votre navigation.
        </p>
        
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;