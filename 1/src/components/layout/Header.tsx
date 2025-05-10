import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <div className="relative mr-2">
              <Star className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-teal-700'}`} fill="currentColor" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-teal-600' : 'text-teal-700'}`}>
              tatienounou<span className="text-pink-500">.fr</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks isScrolled={isScrolled} />
            
            <div className="flex items-center space-x-3">
              <Link 
                to="/login" 
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  isScrolled 
                    ? 'text-teal-600 hover:text-teal-800' 
                    : 'text-teal-700 hover:text-teal-900'
                }`}
              >
                Connexion
              </Link>
              <Link 
                to="/register" 
                className="px-5 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors shadow-sm"
              >
                Inscription
              </Link>
            </div>
          </nav>
          
          <button 
            className="md:hidden text-teal-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 pt-4 pb-6 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <MobileNavLinks />
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link 
                to="/login" 
                className="px-4 py-2 text-center text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                Connexion
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 text-center bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Inscription
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const textColor = isScrolled ? 'text-gray-700' : 'text-gray-800';
  const hoverColor = isScrolled ? 'hover:text-teal-600' : 'hover:text-teal-700';
  
  return (
    <>
      <Link to="/" className={`${textColor} ${hoverColor} transition-colors`}>
        Accueil
      </Link>
      <Link to="/parent" className={`${textColor} ${hoverColor} transition-colors`}>
        Espace Parents
      </Link>
      <Link to="/pro" className={`${textColor} ${hoverColor} transition-colors`}>
        Espace Professionnels
      </Link>
      <div className="relative group">
        <button className={`flex items-center ${textColor} ${hoverColor} transition-colors`}>
          Informations
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 w-48 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="py-1">
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">À propos</Link>
            <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">FAQ</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileNavLinks: React.FC = () => {
  return (
    <>
      <Link to="/" className="py-2 text-gray-800 hover:text-teal-600 transition-colors">
        Accueil
      </Link>
      <Link to="/parent" className="py-2 text-gray-800 hover:text-teal-600 transition-colors">
        Espace Parents
      </Link>
      <Link to="/pro" className="py-2 text-gray-800 hover:text-teal-600 transition-colors">
        Espace Professionnels
      </Link>
      <Link to="/about" className="py-2 text-gray-800 hover:text-teal-600 transition-colors">
        À propos
      </Link>
      <Link to="/faq" className="py-2 text-gray-800 hover:text-teal-600 transition-colors">
        FAQ
      </Link>
      <Link to="/contact" className="py-2 text-gray-800 hover:text-teal-600 transition-colors">
        Contact
      </Link>
    </>
  );
};

export default Header;