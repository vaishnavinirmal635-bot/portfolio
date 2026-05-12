import React, { useState } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black dark:bg-gray-900 border-b border-slate-200/70 dark:border-slate-800/70 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <button type="button" onClick={() => { scrollToSection('home'); closeMenu(); }} className="text-xl font-bold tracking-tight text-white dark:text-slate-100">
          Vaishnavi Nirmal
        </button>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium transition duration-200 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onToggleTheme}
            className="rounded-full p-2 text-xl text-gray-300 transition duration-200 hover:text-yellow-400 dark:text-slate-100 dark:hover:text-yellow-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleTheme}
            className="rounded-full p-2 text-xl text-slate-700 transition duration-200 hover:text-yellow-500 dark:text-slate-100 dark:hover:text-yellow-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl text-slate-900 dark:text-slate-100"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200/70 dark:border-slate-800/70 bg-black dark:bg-gray-900 px-4 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => { scrollToSection(item.id); closeMenu(); }}
                  className="block rounded-lg px-3 py-2 text-base font-medium transition duration-200 text-gray-300 hover:bg-gray-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;