import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-pink-100 pt-20 pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 md:right-32 w-32 h-32 md:w-48 md:h-48 opacity-10">
          <svg viewBox="0 0 100 100" className="text-blue-800 w-full h-full">
            <path d="M50 0 L62 38 L100 38 L69 62 L81 100 L50 76 L19 100 L31 62 L0 38 L38 38 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-24 left-16 md:left-32 w-24 h-24 md:w-40 md:h-40 opacity-10">
          <svg viewBox="0 0 100 100" className="text-pink-800 w-full h-full">
            <path d="M50 0 L62 38 L100 38 L69 62 L81 100 L50 76 L19 100 L31 62 L0 38 L38 38 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-10 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 mb-6 leading-tight">
              Trouvez la nounou <br className="hidden md:block" />
              idéale pour vos <br className="hidden md:block" />
              enfants
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              tatienounou.fr, la plateforme qui met en relation parents et 
              professionnels de la petite enfance partout en France
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link 
                to="/register?type=parent" 
                className="py-3 px-6 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Espace Parents
              </Link>
              <Link 
                to="/register?type=pro" 
                className="py-3 px-6 bg-pink-600 text-white rounded-full font-medium shadow-md hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              >
                Espace Professionnels
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-center mb-4 text-teal-700">
                Recherche rapide
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-sm font-medium">
                    Département
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Sélectionnez un département</option>
                    <option value="75">Paris (75)</option>
                    <option value="69">Rhône (69)</option>
                    <option value="33">Gironde (33)</option>
                    <option value="13">Bouches-du-Rhône (13)</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-sm font-medium">
                    Type de garde
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Sélectionnez un type</option>
                    <option value="temps_plein">Temps plein</option>
                    <option value="temps_partiel">Temps partiel</option>
                    <option value="periscolaire">Périscolaire</option>
                    <option value="occasionnel">Occasionnel</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 text-sm font-medium">
                    Âge de l'enfant
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Sélectionnez une tranche d'âge</option>
                    <option value="0-1">0 - 1 an</option>
                    <option value="1-3">1 - 3 ans</option>
                    <option value="3-6">3 - 6 ans</option>
                    <option value="6+">6 ans et plus</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg font-medium shadow-md hover:bg-teal-700 transition-colors flex items-center justify-center"
                >
                  <SearchIcon className="w-5 h-5 mr-2" />
                  Rechercher
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;