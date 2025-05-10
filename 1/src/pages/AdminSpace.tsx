import React, { useState } from 'react';
import { Settings, Users, CreditCard, Bell, Shield, Database, Save, RefreshCw } from 'lucide-react';

const AdminSpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('settings');
  
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Console d'administration</h1>
          <p className="max-w-2xl text-indigo-100">
            Gérez les paramètres de la plateforme, les utilisateurs et surveillez l'activité du site.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-wrap border-b">
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'settings' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <div className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Paramètres
              </div>
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'users' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('users')}
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Utilisateurs
              </div>
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'payments' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('payments')}
            >
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Paiements
              </div>
            </button>
            <button 
              className={`px-6 py-4 font-medium text-center focus:outline-none ${
                activeTab === 'notifications' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </div>
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'settings' && <SettingsTab />}
            {activeTab === 'users' && <UsersTab />}
            {activeTab === 'payments' && <PaymentsTab />}
            {activeTab === 'notifications' && <NotificationsTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsTab: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'tatienounou.fr',
    siteDescription: 'Plateforme de mise en relation parents et professionnels de la petite enfance',
    emailContact: 'contact@tatienounou.fr',
    emailSupport: 'support@tatienounou.fr',
    maxProfilePhotos: 5,
    maxMessageLength: 1000,
    requireEmailVerification: true,
    enableNotifications: true,
    maintenanceMode: false,
    registrationOpen: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Paramètres généraux</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du site
            </label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              name="siteDescription"
              value={settings.siteDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email de contact
            </label>
            <input
              type="email"
              name="emailContact"
              value={settings.emailContact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email support
            </label>
            <input
              type="email"
              name="emailSupport"
              value={settings.emailSupport}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Limites et restrictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre maximum de photos par profil
            </label>
            <input
              type="number"
              name="maxProfilePhotos"
              value={settings.maxProfilePhotos}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Longueur maximale des messages
            </label>
            <input
              type="number"
              name="maxMessageLength"
              value={settings.maxMessageLength}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Configuration système</h2>
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="requireEmailVerification"
              checked={settings.requireEmailVerification}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Exiger la vérification des emails</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              name="enableNotifications"
              checked={settings.enableNotifications}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Activer les notifications</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              name="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Mode maintenance</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              name="registrationOpen"
              checked={settings.registrationOpen}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Inscriptions ouvertes</span>
          </label>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
          Annuler
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center">
          <Save className="w-4 h-4 mr-2" />
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
};

const UsersTab: React.FC = () => {
  const [users] = useState([
    {
      id: 1,
      name: 'Sophie Martin',
      email: 'sophie.martin@email.com',
      type: 'parent',
      status: 'active',
      registeredAt: '2023-04-15'
    },
    {
      id: 2,
      name: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      type: 'pro',
      status: 'pending',
      registeredAt: '2023-04-16'
    },
    {
      id: 3,
      name: 'Thomas Bernard',
      email: 'thomas.bernard@email.com',
      type: 'parent',
      status: 'inactive',
      registeredAt: '2023-04-14'
    }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gestion des utilisateurs</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Exporter
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Ajouter
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Utilisateur
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date d'inscription
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.type === 'parent' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-pink-100 text-pink-800'
                  }`}>
                    {user.type === 'parent' ? 'Parent' : 'Professionnel'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : user.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.registeredAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    Éditer
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PaymentsTab: React.FC = () => {
  const [transactions] = useState([
    {
      id: 'TRX-001',
      user: 'Marie Dubois',
      amount: 29.99,
      status: 'completed',
      date: '2023-04-16',
      type: 'subscription'
    },
    {
      id: 'TRX-002',
      user: 'Thomas Bernard',
      amount: 49.99,
      status: 'pending',
      date: '2023-04-15',
      type: 'subscription'
    },
    {
      id: 'TRX-003',
      user: 'Sophie Martin',
      amount: 29.99,
      status: 'failed',
      date: '2023-04-14',
      type: 'subscription'
    }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Transactions</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Exporter
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Nouvelle transaction
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Utilisateur
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{transaction.id}</div>
                  <div className="text-sm text-gray-500">{transaction.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{transaction.user}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{transaction.amount}€</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === 'completed' 
                      ? 'bg-green-100 text-green-800'
                      : transaction.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    Détails
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Annuler
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenus du mois</h3>
          <p className="text-3xl font-bold text-gray-900">2,459.97€</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <span className="text-green-500 mr-1">↑</span>
            12.5% par rapport au mois dernier
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Transactions en attente</h3>
          <p className="text-3xl font-bold text-gray-900">3</p>
          <p className="text-sm text-gray-500 mt-2">
            Valeur totale: 149.97€
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Taux de conversion</h3>
          <p className="text-3xl font-bold text-gray-900">89.2%</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <span className="text-green-500 mr-1">↑</span>
            3.2% par rapport au mois dernier
          </p>
        </div>
      </div>
    </div>
  );
};

const NotificationsTab: React.FC = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: 'Nouvelle inscription',
      message: 'Marie Dubois s\'est inscrite en tant que professionnelle',
      type: 'info',
      date: '2023-04-16 14:30'
    },
    {
      id: 2,
      title: 'Paiement échoué',
      message: 'Le paiement de l\'abonnement de Thomas Bernard a échoué',
      type: 'error',
      date: '2023-04-15 09:15'
    },
    {
      id: 3,
      title: 'Mise en relation réussie',
      message: 'Sophie Martin a trouvé une nounou via la plateforme',
      type: 'success',
      date: '2023-04-14 16:45'
    }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Centre de notifications</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualiser
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Notifications système</h3>
            <Shield className="w-6 h-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">24</p>
          <p className="text-sm text-gray-500 mt-2">
            Dernières 24 heures
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Alertes utilisateurs</h3>
            <Bell className="w-6 h-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500 mt-2">
            À traiter
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Erreurs système</h3>
            <Database className="w-6 h-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">2</p>
          <p className="text-sm text-red-600 mt-2">
            Attention requise
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium text-gray-900">Journal des notifications</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.type === 'info' 
                    ? 'bg-blue-100' 
                    : notification.type === 'error'
                    ? 'bg-red-100'
                    : 'bg-green-100'
                }`}>
                  <Bell className={`w-4 h-4 ${
                    notification.type === 'info' 
                      ? 'text-blue-600' 
                      : notification.type === 'error'
                      ? 'text-red-600'
                      : 'text-green-600'
                  }`} />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {notification.date}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
          Voir toutes les notifications →
        </button>
      </div>
    </div>
  );
};

export default AdminSpace;