import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { useUserStore } from '../store/useUserStore';
import { UserCircle } from 'lucide-react'; // or use HeroIcons
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUserStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-black shadow-md">
      <h1 className="text-xl font-bold text-black dark:text-white">AI Query Generator</h1>

      <div className="flex items-center space-x-4 relative">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`relative w-12 h-6 sm:w-14 sm:h-8 flex items-center rounded-full p-1 
          ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} transition-colors duration-300`}
        >
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md transform 
            ${theme === 'dark' ? 'translate-x-6 sm:translate-x-6' : 'translate-x-0'} transition-transform duration-300`}
          />
        </button>

        <span className="text-sm font-medium text-black dark:text-white">
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </span>

        {/* User Icon + Dropdown */}
        {user && (
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              <UserCircle className="w-8 h-8" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-50">
                <div className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-white">
                  {user.firstName} {user.lastName}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
