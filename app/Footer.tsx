import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white py-8 w-full">
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Assistance</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Help Center</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">AirCover</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Anti-Discrimination Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Accessibility</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Cancellation Options</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">I Have a Neighbourhood Concern</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Traveling</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Host Your Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">AirCover for Hosts</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Host Resources</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Community Forum</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Responsible Hosting</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Take a Free Host Course</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Airbnb</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Newsroom</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">New Features</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Investors</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Gift Cards</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Airbnb.org Emergency Stays</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-bold mb-2 text-black">Information</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Privacy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Terms</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Site Map</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">How the Site Works</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Company Info</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">English (US)</a></li>
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
