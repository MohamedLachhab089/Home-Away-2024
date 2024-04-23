import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white py-8 w-full">
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Assistance</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Centre d'aide</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">AirCover</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Lutte contre la discrimination</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Assistance handicap</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Options d'annulation</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">J'ai un problème de voisinage</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Accueil de voyageurs</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Mettez votre logement sur Airbnb</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">AirCover pour les hôtes</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Ressources pour les hôtes</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Forum de la communauté</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Hébergement responsable</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Participez à un cours gratuit sur l'accueil de voyageurs</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Airbnb</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Newsroom</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Nouvelles fonctionnalités</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Carrières</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Investisseurs</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Cartes cadeaux</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Séjours d'urgence Airbnb.org</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Informations</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Confidentialité</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Conditions générales</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Plan du site</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Fonctionnement du site</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Infos sur l'entreprise</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Français (FR)</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">€ EUR</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-400">©2024 Airbnb</p>
      </div>
    </footer>
  );
};

export default Footer;
