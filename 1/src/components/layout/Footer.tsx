import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Star, PhoneCall, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Star className="h-8 w-8 text-yellow-400 mr-2" fill="currentColor" />
              <span className="text-xl font-bold">
                tatienounou<span className="text-pink-300">.fr</span>
              </span>
            </div>
            <p className="text-teal-100 mb-6">
              La plateforme de référence pour trouver la solution de garde idéale partout en France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-600 pb-2">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-teal-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/parent" className="text-teal-100 hover:text-white transition-colors">
                  Espace Parents
                </Link>
              </li>
              <li>
                <Link to="/pro" className="text-teal-100 hover:text-white transition-colors">
                  Espace Professionnels
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-teal-100 hover:text-white transition-colors">
                  Inscription
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-teal-100 hover:text-white transition-colors">
                  Connexion
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-600 pb-2">
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-teal-100 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-teal-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/cgu" className="text-teal-100 hover:text-white transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-teal-100 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-teal-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-600 pb-2">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-teal-200" />
                <span className="text-teal-100">123 Avenue des Enfants, 75001 Paris</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-3 text-teal-200" />
                <span className="text-teal-100">01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-teal-200" />
                <span className="text-teal-100">contact@tatienounou.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-600 pt-8 text-center">
          <p className="text-teal-200 text-sm">
            &copy; {new Date().getFullYear()} tatienounou.fr - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;