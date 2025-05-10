import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center bg-blue-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center items-center mb-4">
            <Star className="h-10 w-10 text-teal-600" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold text-teal-700">
            Connexion
          </h1>
          <p className="text-gray-600 mt-2">
            Accédez à votre espace tatienounou.fr
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Link to="/forgot-password" className="text-sm text-teal-600 hover:text-teal-800">
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-sm"
            >
              Se connecter
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Pas encore inscrit ?{' '}
              <Link to="/register" className="text-teal-600 hover:text-teal-800 font-medium">
                Créer un compte
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

export default Login;