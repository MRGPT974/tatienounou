import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Eye, EyeOff, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'parent' | 'pro'>('parent');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    acceptTerms: false
  });
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type === 'parent' || type === 'pro') {
      setUserType(type);
    }
  }, [location]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ userType, ...formData });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center bg-blue-50">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center items-center mb-4">
            <Star className="h-10 w-10 text-teal-600" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold text-teal-700">
            Inscription
          </h1>
          <p className="text-gray-600 mt-2">
            Rejoignez notre communauté tatienounou.fr
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex mb-8">
            <button
              type="button"
              className={`flex-1 py-3 rounded-l-lg font-medium transition-colors text-center ${
                userType === 'parent'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setUserType('parent')}
            >
              Je suis parent
            </button>
            <button
              type="button"
              className={`flex-1 py-3 rounded-r-lg font-medium transition-colors text-center ${
                userType === 'pro'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setUserType('pro')}
            >
              Je suis professionnel
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Prénom"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Nom"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                placeholder="06 xx xx xx xx"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Le mot de passe doit contenir au moins 8 caractères.
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="acceptTerms" className="text-gray-700">
                    J'accepte les{' '}
                    <Link to="/cgu" className="text-teal-600 hover:text-teal-800">
                      conditions générales d'utilisation
                    </Link>{' '}
                    et la{' '}
                    <Link to="/confidentialite" className="text-teal-600 hover:text-teal-800">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium text-white shadow-sm ${
                userType === 'parent' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-pink-600 hover:bg-pink-700'
              } transition-colors`}
            >
              {userType === 'parent' ? "S'inscrire comme parent" : "S'inscrire comme professionnel"}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Déjà inscrit ?{' '}
              <Link to="/login" className="text-teal-600 hover:text-teal-800 font-medium">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-teal-600 hover:text-teal-800 font-medium">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;