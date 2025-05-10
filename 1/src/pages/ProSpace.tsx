import React, { useState } from 'react';
import { UserIcon, MapPinIcon, ClockIcon, CalendarIcon, BriefcaseIcon, PlusIcon, StarIcon } from 'lucide-react';

const ProSpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen pt-20 bg-pink-50">
      <div className="bg-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Espace Professionnel</h1>
          <p className="max-w-2xl text-pink-100">
            Gérez votre profil, vos disponibilités et entrez en contact avec des parents
            à la recherche de professionnels comme vous.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-wrap border-b">
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'dashboard' 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Tableau de bord
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'profile' 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Mon profil
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'availability' 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              onClick={() => setActiveTab('availability')}
            >
              Disponibilités
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'requests' 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              onClick={() => setActiveTab('requests')}
            >
              Demandes
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'messages' 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              onClick={() => setActiveTab('messages')}
            >
              Messages
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'dashboard' && <DashboardTab />}
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'availability' && <AvailabilityTab />}
            {activeTab === 'requests' && <RequestsTab />}
            {activeTab === 'messages' && <MessagesTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardTab: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Statut du profil
              </h3>
              <p className="text-gray-600 text-sm">
                Votre profil est visible par les parents
              </p>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Actif
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Complétude du profil</span>
              <span className="font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Abonnement
              </h3>
              <p className="text-gray-600 text-sm">
                Offre Essentielle
              </p>
            </div>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Actif
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Expire dans</span>
              <span className="font-medium">23 jours</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-sm text-white rounded hover:bg-blue-700 transition-colors">
              Gérer mon abonnement
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Statistiques
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm mb-1">Visites sur le profil</p>
            <p className="text-3xl font-semibold">27</p>
            <p className="text-xs text-green-600">+12% cette semaine</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm mb-1">Demandes reçues</p>
            <p className="text-3xl font-semibold">5</p>
            <p className="text-xs text-green-600">+2 nouvelles</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm mb-1">Messages non lus</p>
            <p className="text-3xl font-semibold">3</p>
            <p className="text-xs text-blue-600">Voir les messages</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm mb-1">Note moyenne</p>
            <div className="flex items-center">
              <p className="text-3xl font-semibold mr-2">4.8</p>
              <div className="flex">
                <StarIcon className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <StarIcon className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <StarIcon className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <StarIcon className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <StarIcon className="h-4 w-4 text-yellow-400" fill="currentColor" />
              </div>
            </div>
            <p className="text-xs text-gray-600">12 avis</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Activité récente
        </h3>
        <div className="bg-white border rounded-lg">
          <div className="p-4 border-b">
            <div className="flex items-start">
              <div className="bg-pink-100 p-2 rounded-full mr-4">
                <UserIcon className="h-5 w-5 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">Nouvelle visite sur votre profil</p>
                <p className="text-sm text-gray-600">Famille Dupont a consulté votre profil</p>
                <p className="text-xs text-gray-500 mt-1">Il y a 2 heures</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <CalendarIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Mise à jour des disponibilités</p>
                <p className="text-sm text-gray-600">Vous avez modifié vos disponibilités</p>
                <p className="text-xs text-gray-500 mt-1">Hier</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <UserIcon className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Nouvelle demande de garde</p>
                <p className="text-sm text-gray-600">Famille Martin recherche une nounou pour 2 enfants</p>
                <p className="text-xs text-gray-500 mt-1">Il y a 2 jours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Actions rapides
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
            <div className="bg-pink-100 p-2 rounded-full mr-4">
              <UserIcon className="h-5 w-5 text-pink-600" />
            </div>
            <span>Compléter mon profil</span>
          </button>
          <button className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <CalendarIcon className="h-5 w-5 text-blue-600" />
            </div>
            <span>Mettre à jour mes disponibilités</span>
          </button>
          <button className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <MapPinIcon className="h-5 w-5 text-green-600" />
            </div>
            <span>Modifier ma zone d'intervention</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Mon profil professionnel
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <button className="absolute -right-2 -bottom-2 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center mb-2">Marie Dupont</h3>
            <p className="text-gray-500 text-center mb-4">
              <MapPinIcon className="h-4 w-4 inline mr-1" />
              Paris 16e
            </p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Profil complété:</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-pink-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="border-t border-pink-100 pt-4 mt-4">
              <p className="text-sm text-gray-600 mb-2">
                Statut: <span className="font-medium text-green-600">Visible</span>
              </p>
              <button className="w-full py-2 px-4 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors text-sm">
                Masquer mon profil
              </button>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <UserIcon className="mr-2 h-5 w-5 text-pink-600" />
              Informations personnelles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  defaultValue="Marie" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  defaultValue="Dupont" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  defaultValue="06 12 34 56 78" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  defaultValue="marie.dupont@email.com" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 mb-2"
                placeholder="Adresse" 
                defaultValue="123 rue de Paris"
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Ville" 
                    defaultValue="Paris"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Code postal" 
                    defaultValue="75016"
                  />
                </div>
                <div>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
                    <option value="fr" selected>France</option>
                    <option value="be">Belgique</option>
                    <option value="ch">Suisse</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BriefcaseIcon className="mr-2 h-5 w-5 text-pink-600" />
              Informations professionnelles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de profession
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
                  <option value="nounou" selected>Nounou</option>
                  <option value="assistante_maternelle">Assistante Maternelle</option>
                  <option value="baby_sitter">Baby-sitter</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Années d'expérience
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
                  <option value="0-1">Moins d'1 an</option>
                  <option value="1-3">1 à 3 ans</option>
                  <option value="3-5" selected>3 à 5 ans</option>
                  <option value="5-10">5 à 10 ans</option>
                  <option value="10+">Plus de 10 ans</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tarif horaire (brut)
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 pl-8"
                    defaultValue="12"
                    min="0"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">€</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Types de garde proposés
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
                  <option value="tous" selected>Tous types de garde</option>
                  <option value="regulier">Régulier uniquement</option>
                  <option value="occasionnel">Occasionnel uniquement</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                rows={4}
                defaultValue="Nounou expérimentée et dynamique avec plus de 5 ans d'expérience. Je suis diplômée du CAP Petite Enfance et j'aime proposer des activités ludiques et éducatives adaptées à chaque enfant. Mon objectif est d'accompagner vos enfants dans leur développement tout en veillant à leur bien-être et à leur sécurité."
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                Minimum 100 caractères, maximum 1000 caractères.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Compétences et qualifications
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  CAP Petite Enfance
                </div>
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Premiers secours
                </div>
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Activités éducatives
                </div>
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  Anglais
                </div>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Ajouter une compétence"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-600">
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <button className="w-full py-3 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-sm">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
};

const AvailabilityTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Gestion des disponibilités
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg border p-4 mb-4">
            <h3 className="font-medium mb-3 text-gray-800">Type de disponibilité</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="availability_type" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">Disponible maintenant</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="availability_type" className="text-pink-600" />
                <span className="ml-2 text-gray-700">Disponible à partir d'une date</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="availability_type" className="text-pink-600" />
                <span className="ml-2 text-gray-700">Non disponible</span>
              </label>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border p-4 mb-4">
            <h3 className="font-medium mb-3 text-gray-800">Types de garde</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">Temps plein</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">Temps partiel</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">Périscolaire</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" />
                <span className="ml-2 text-gray-700">Occasionnel / Ponctuel</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" />
                <span className="ml-2 text-gray-700">Weekend</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" />
                <span className="ml-2 text-gray-700">Nuit</span>
              </label>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-medium mb-3 text-gray-800">Ages des enfants</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">0 - 1 an</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">1 - 3 ans</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" defaultChecked />
                <span className="ml-2 text-gray-700">3 - 6 ans</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" />
                <span className="ml-2 text-gray-700">6 - 10 ans</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="text-pink-600" />
                <span className="ml-2 text-gray-700">Plus de 10 ans</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-pink-600" />
              Planning hebdomadaire
            </h3>
            
            <p className="text-sm text-gray-600 mb-4">
              Sélectionnez vos disponibilités pour chaque jour de la semaine.
            </p>
            
            <div className="space-y-4">
              {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"].map((day, index) => (
                <div key={day} className="border-b pb-3 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="text-pink-600" 
                        defaultChecked={index < 5} 
                      />
                      <span className="ml-2 font-medium">{day}</span>
                    </label>
                    <div className="text-sm text-gray-500">
                      {index < 5 ? "Disponible" : "Non disponible"}
                    </div>
                  </div>
                  
                  {index < 5 && (
                    <div className="ml-6 grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">De</label>
                        <select className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm">
                          <option value="8:00">8:00</option>
                          <option value="8:30">8:30</option>
                          <option value="9:00" selected>9:00</option>
                          <option value="9:30">9:30</option>
                          <option value="10:00">10:00</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">À</label>
                        <select className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm">
                          <option value="17:00">17:00</option>
                          <option value="17:30">17:30</option>
                          <option value="18:00" selected>18:00</option>
                          <option value="18:30">18:30</option>
                          <option value="19:00">19:00</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5 text-pink-600" />
              Zone d'intervention
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Département(s)
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
                <option value="75" selected>Paris (75)</option>
                <option value="92">Hauts-de-Seine (92)</option>
                <option value="93">Seine-Saint-Denis (93)</option>
                <option value="94">Val-de-Marne (94)</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Villes / Codes postaux
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center">
                  <span>Paris 16e (75016)</span>
                  <button className="ml-2 text-pink-700 hover:text-pink-900">×</button>
                </div>
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center">
                  <span>Paris 15e (75015)</span>
                  <button className="ml-2 text-pink-700 hover:text-pink-900">×</button>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Ajouter une ville ou un code postal"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-600">
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance maximale de déplacement (km)
              </label>
              <input 
                type="range" 
                min="1" 
                max="30" 
                defaultValue="10" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 km</span>
                <span>10 km</span>
                <span>30 km</span>
              </div>
            </div>
          </div>
          
          <button className="w-full py-3 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-sm">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
};

const RequestsTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Demandes de garde
      </h2>
      
      <div className="bg-white rounded-lg border overflow-hidden mb-8">
        <div className="flex items-center border-b px-4 py-3">
          <div className="w-1/2 md:w-1/4 font-medium text-gray-700">Famille</div>
          <div className="hidden md:block w-1/4 font-medium text-gray-700">Type de garde</div>
          <div className="hidden md:block w-1/4 font-medium text-gray-700">Date</div>
          <div className="w-1/2 md:w-1/4 font-medium text-gray-700 text-right">Action</div>
        </div>
        
        <div className="divide-y">
          <div className="px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="font-medium">Famille Martin</div>
                <div className="text-sm text-gray-500">Paris 16e</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Temps plein</div>
                <div className="text-xs text-gray-500">2 enfants (2 et 4 ans)</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Reçue le</div>
                <div className="text-xs text-gray-500">25/04/2023</div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end gap-2">
                <button className="px-3 py-1 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 transition-colors">
                  Accepter
                </button>
                <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                  Voir détails
                </button>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="font-medium">Famille Dubois</div>
                <div className="text-sm text-gray-500">Paris 15e</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Périscolaire</div>
                <div className="text-xs text-gray-500">1 enfant (6 ans)</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Reçue le</div>
                <div className="text-xs text-gray-500">23/04/2023</div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end gap-2">
                <button className="px-3 py-1 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 transition-colors">
                  Accepter
                </button>
                <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                  Voir détails
                </button>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-4 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="font-medium">Famille Petit</div>
                <div className="text-sm text-gray-500">Paris 17e</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Temps partiel</div>
                <div className="text-xs text-gray-500">1 enfant (1 an)</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Reçue le</div>
                <div className="text-xs text-gray-500">20/04/2023</div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end">
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                  Répondu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Propositions envoyées
      </h3>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="flex items-center border-b px-4 py-3">
          <div className="w-1/2 md:w-1/4 font-medium text-gray-700">Famille</div>
          <div className="hidden md:block w-1/4 font-medium text-gray-700">Type de garde</div>
          <div className="hidden md:block w-1/4 font-medium text-gray-700">Date</div>
          <div className="w-1/2 md:w-1/4 font-medium text-gray-700 text-right">Statut</div>
        </div>
        
        <div className="divide-y">
          <div className="px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="font-medium">Famille Legrand</div>
                <div className="text-sm text-gray-500">Paris 16e</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Temps plein</div>
                <div className="text-xs text-gray-500">1 enfant (2 ans)</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Envoyée le</div>
                <div className="text-xs text-gray-500">22/04/2023</div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded">
                  En attente
                </span>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="font-medium">Famille Moreau</div>
                <div className="text-sm text-gray-500">Paris 15e</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Temps partiel</div>
                <div className="text-xs text-gray-500">2 enfants (3 et 5 ans)</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Envoyée le</div>
                <div className="text-xs text-gray-500">18/04/2023</div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded">
                  Acceptée
                </span>
              </div>
            </div>
          </div>
          
          <div className="px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="font-medium">Famille Simon</div>
                <div className="text-sm text-gray-500">Paris 17e</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Périscolaire</div>
                <div className="text-xs text-gray-500">1 enfant (8 ans)</div>
              </div>
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <div className="text-sm">Envoyée le</div>
                <div className="text-xs text-gray-500">15/04/2023</div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded">
                  Refusée
                </span>
              </div>
            </div>
          </div>
        </div>
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
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 h-[500px]">
          <div className="border-r">
            <div className="p-3 border-b">
              <input 
                type="text" 
                placeholder="Rechercher" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            
            <div className="overflow-y-auto h-[450px]">
              {[1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index} 
                  className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${index === 1 ? 'bg-pink-50' : ''}`}
                >
                  <div className="flex items-start">
                    <img 
                      src={`https://images.pexels.com/photos/17458${index}/pexels-photo-17458${index}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                      alt="Contact" 
                      className="w-10 h-10 rounded-full object-cover mr-3" 
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium truncate">{`Famille ${["Martin", "Dubois", "Petit", "Legrand", "Moreau"][index - 1]}`}</h4>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">10:23</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {index === 1 
                          ? "Bonjour, est-ce que vous êtes disponible pour un rendez-vous ?" 
                          : "Merci pour votre message. Nous restons en contact."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-span-3 flex flex-col">
            <div className="p-4 border-b">
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/174581/pexels-photo-174581.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Contact" 
                  className="w-10 h-10 rounded-full object-cover mr-3" 
                />
                <div>
                  <h4 className="font-medium">Famille Martin</h4>
                  <p className="text-xs text-green-600">En ligne</p>
                </div>
              </div>
            </div>
            
            <div className="flex-grow p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-pink-100 text-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Bonjour, je suis intéressée par votre profil. Êtes-vous disponible pour garder nos deux enfants (2 et 4 ans) à temps plein ?</p>
                    <p className="text-xs text-right mt-1 text-gray-500">10:15</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Bonjour ! Oui, je suis disponible à temps plein. Je serais ravie de garder vos enfants. Pourriez-vous me donner plus de détails sur vos besoins ?</p>
                    <p className="text-xs text-right mt-1 text-gray-500">10:18</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-pink-100 text-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Bien sûr ! Nous recherchons quelqu'un du lundi au vendredi, de 8h30 à 18h. Est-ce que cela vous conviendrait ?</p>
                    <p className="text-xs text-right mt-1 text-gray-500">10:20</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Oui, ces horaires me conviennent parfaitement. Souhaitez-vous organiser un rendez-vous pour discuter plus en détail et faire connaissance ?</p>
                    <p className="text-xs text-right mt-1 text-gray-500">10:22</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-pink-100 text-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Bonjour, est-ce que vous êtes disponible pour un rendez-vous demain à 15h ?</p>
                    <p className="text-xs text-right mt-1 text-gray-500">10:23</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-3 border-t">
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Tapez votre message..." 
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-full focus:ring-pink-500 focus:border-pink-500"
                />
                <button className="ml-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSpace;