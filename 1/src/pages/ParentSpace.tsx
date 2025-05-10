import React, { useState } from 'react';
import { SearchIcon, FilterIcon, MapPinIcon, ClockIcon, CalendarIcon, UserIcon } from 'lucide-react';

const ParentSpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('search');
  
  return (
    <div className="min-h-screen pt-20 bg-blue-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Espace Parents</h1>
          <p className="max-w-2xl text-blue-100">
            Trouvez la nounou idéale pour votre enfant en quelques clics. Nos professionnels
            sont sélectionnés et vérifiés pour vous offrir le meilleur service de garde.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-wrap border-b">
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'search' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('search')}
            >
              Recherche
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'profile' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Mon profil
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'matches' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('matches')}
            >
              Mes matchs
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'messages' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('messages')}
            >
              Messages
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'search' && <SearchTab />}
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'matches' && <MatchesTab />}
            {activeTab === 'messages' && <MessagesTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchTab: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Rechercher une nounou
        </h2>
        <p className="text-gray-600 mb-6">
          Affinez votre recherche en utilisant les filtres ci-dessous pour trouver le professionnel idéal pour vos enfants.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Département
            </label>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none">
                <option value="">Sélectionnez un département</option>
                <option value="75">Paris (75)</option>
                <option value="69">Rhône (69)</option>
                <option value="33">Gironde (33)</option>
                <option value="13">Bouches-du-Rhône (13)</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de garde
            </label>
            <div className="relative">
              <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none">
                <option value="">Sélectionnez un type</option>
                <option value="temps_plein">Temps plein</option>
                <option value="temps_partiel">Temps partiel</option>
                <option value="periscolaire">Périscolaire</option>
                <option value="occasionnel">Occasionnel</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Âge de l'enfant
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none">
                <option value="">Sélectionnez une tranche d'âge</option>
                <option value="0-1">0 - 1 an</option>
                <option value="1-3">1 - 3 ans</option>
                <option value="3-6">3 - 6 ans</option>
                <option value="6+">6 ans et plus</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            <FilterIcon className="w-4 h-4 mr-2" />
            Plus de filtres
          </button>
          
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center">
            <SearchIcon className="w-5 h-5 mr-2" />
            Rechercher
          </button>
        </div>
      </div>
      
      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Résultats de recherche
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={`https://images.pexels.com/photos/17328${item}/pexels-photo-17328${item}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                  alt="Professional" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {["Nounou", "Assistante maternelle", "Baby-sitter"][item % 3]}
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Marie D.</h4>
                <p className="text-gray-500 text-sm mb-2 flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  Paris {75000 + item}, à {1 + item}km
                </p>
                <p className="text-gray-500 text-sm mb-3 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  Disponible: {["Temps plein", "Temps partiel", "Périscolaire"][item % 3]}
                </p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item % 2 === 0 
                    ? "Plus de 7 ans d'expérience. Diplômée CAP Petite Enfance. Dynamique et créative."
                    : "Douce et patiente, j'aime proposer des activités éducatives adaptées à chaque âge."
                  }
                </p>
                <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Voir le profil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Mon profil parent
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center">
                <UserIcon className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center mb-2">Famille Martin</h3>
            <p className="text-gray-500 text-center mb-4">
              <MapPinIcon className="h-4 w-4 inline mr-1" />
              Paris 16e
            </p>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Profil complété:</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <UserIcon className="mr-2 h-5 w-5 text-blue-600" />
              Informations personnelles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Sophie" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Martin" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="sophie.martin@email.com" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="06 12 34 56 78" 
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <UserIcon className="mr-2 h-5 w-5 text-blue-600" />
              Informations sur les enfants
            </h3>
            
            <div className="mb-4 p-4 border rounded-md bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Enfant 1: Léa</h4>
                <button className="text-blue-600 text-sm hover:underline">Modifier</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Âge:</span>
                  <span className="ml-2">3 ans</span>
                </div>
                <div>
                  <span className="text-gray-600">Scolarisé:</span>
                  <span className="ml-2">Oui - Maternelle</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4 p-4 border rounded-md bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Enfant 2: Tom</h4>
                <button className="text-blue-600 text-sm hover:underline">Modifier</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Âge:</span>
                  <span className="ml-2">6 mois</span>
                </div>
                <div>
                  <span className="text-gray-600">Scolarisé:</span>
                  <span className="ml-2">Non</span>
                </div>
              </div>
            </div>
            
            <button className="mt-2 flex items-center text-blue-600 hover:underline">
              <span className="mr-1">+</span> Ajouter un enfant
            </button>
          </div>
          
          <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
};

const MatchesTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Mes matchs
      </h2>
      
      <div className="bg-blue-50 rounded-lg p-4 mb-8 flex items-center">
        <div className="bg-blue-100 rounded-full p-2 mr-4">
          <SearchIcon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <p className="font-medium text-blue-700">
            Voici les professionnels qui correspondent à vos critères
          </p>
          <p className="text-sm text-blue-600">
            Consultez leur profil et contactez-les directement depuis la plateforme
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="md:w-1/4">
              <img 
                src={`https://images.pexels.com/photos/17458${item}/pexels-photo-17458${item}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                alt="Professional" 
                className="w-full h-48 md:h-full object-cover" 
              />
            </div>
            
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">Marie D.</h3>
                  <p className="text-gray-500 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                      {["Nounou", "Assistante maternelle", "Baby-sitter"][item % 3]}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center inline-flex">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      Paris, 16e
                    </span>
                  </p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Disponible
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {item % 2 === 0 
                  ? "Plus de 7 ans d'expérience. Diplômée CAP Petite Enfance. Je propose des activités ludiques et éducatives adaptées à chaque enfant. Mon objectif est d'accompagner vos enfants dans leur développement."
                  : "Douce et patiente, j'aime proposer des activités éducatives adaptées à chaque âge. J'ai de l'expérience avec les enfants de tous âges et je peux m'adapter à vos besoins spécifiques."
                }
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-xs text-gray-500">Expérience</span>
                  <p className="font-medium">{3 + item} ans</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-xs text-gray-500">Tarif horaire</span>
                  <p className="font-medium">{10 + item}€/h</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-xs text-gray-500">Dispo. début</span>
                  <p className="font-medium">Immédiate</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-xs text-gray-500">Type de garde</span>
                  <p className="font-medium">{["Temps plein", "Temps partiel", "Périscolaire"][item % 3]}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-end gap-3">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                  Plus d'infos
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Contacter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MessagesTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Mes messages
      </h2>
      
      <div className="bg-blue-50 rounded-lg p-4 mb-8">
        <p className="text-blue-700 text-center">
          Aucun message pour le moment.
        </p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Commencez à échanger avec des professionnels pour voir apparaître vos conversations ici.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm inline-flex items-center">
          <SearchIcon className="w-5 h-5 mr-2" />
          Rechercher des professionnels
        </button>
      </div>
    </div>
  );
};

export default ParentSpace;