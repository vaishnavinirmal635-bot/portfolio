import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-10 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Vaishnavi Nirmal</h3>
          <p className="text-slate-400">MBA Student | Business Analytics Enthusiast</p>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">Let's build data-driven analytics and business solutions together.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:vaishnavinirmal635@gmail.com" className="hover:text-yellow-400 transition duration-300">
            <span className="text-2xl">📧</span>
          </a>
          <a href="https://linkedin.com/in/vaishnavi-nirmal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <span className="text-2xl">💼</span>
          </a>
          <a href="https://github.com/vaishnavi" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <span className="text-2xl">🐙</span>
          </a>
        </div>
        <div className="pt-4 border-t border-gray-700">
          <p>&copy; 2026 Vaishnavi Nirmal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;