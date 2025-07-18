import React from 'react';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-black shadow-md">
      <h1 className="text-xl font-bold text-black dark:text-white">AI Query Generator</h1>

      {/* Toggle with Label */}
      <div className="flex items-center space-x-2">
        {/* Toggle Switch */}
        <button
          onClick={toggleTheme}
          className={`relative w-14 h-8 flex items-center rounded-full p-1 
            ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} transition-colors duration-300`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform 
              ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}
          />
        </button>

        {/* Theme Text */}
        <span className="text-sm font-medium text-black dark:text-white">
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
