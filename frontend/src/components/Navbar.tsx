import React from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`flex items-center justify-between px-8 py-4 shadow ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex-1"></div>
      <div className="flex-1 text-center">
        <span className="font-extrabold text-3xl tracking-wide font-mono text-blue-600 drop-shadow-lg">
          Speak2DB
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded transition ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;