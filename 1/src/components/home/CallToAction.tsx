import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à trouver la solution de garde idéale ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Rejoignez notre communauté de parents et professionnels de la petite enfance dès aujourd'hui
            et trouvez la solution qui correspond à vos besoins.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link 
              to="/register?type=parent" 
              className="py-3 px-6 bg-white text-teal-600 rounded-full font-medium shadow-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Je suis parent
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/register?type=pro" 
              className="py-3 px-6 bg-pink-600 text-white rounded-full font-medium shadow-md hover:bg-pink-700 transition-colors inline-flex items-center justify-center"
            >
              Je suis professionnel
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            Déjà inscrit ? <Link to="/login" className="underline hover:text-white">Connectez-vous</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;