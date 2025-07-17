import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Login = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className={`p-8 rounded-lg shadow-lg w-full max-w-md ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
          <input type="password" placeholder="Password" className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
        </form>
        <div className="my-4 text-center text-gray-500">or</div>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#FFC107" d="M43.6 20.5h-1.9v-.1H24v7.1h11.2c-1.5 4-5.2 6.9-9.2 6.9-5.5 0-10-4.5-10-10s4.5-10 10-10c2.4 0 4.6.9 6.3 2.3l5.1-5.1C33.3 8.1 28.9 6 24 6 13.5 6 5 14.5 5 25s8.5 19 19 19c10.5 0 19-8.5 19-19 0-1.3-.1-2.7-.4-4z"/><path fill="#FF3D00" d="M6.3 14.7l5.9 4.3C14.2 16.1 18.8 13 24 13c2.4 0 4.6.9 6.3 2.3l5.1-5.1C33.3 8.1 28.9 6 24 6c-7.1 0-13.1 4.1-16.1 10.7z"/><path fill="#4CAF50" d="M24 44c5.5 0 10.2-1.8 13.9-4.9l-6.4-5.2c-2 1.4-4.5 2.2-7.5 2.2-4 0-7.7-2.9-9.2-6.9l-6.4 5C10.9 41.1 17 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5h-1.9v-.1H24v7.1h11.2c-.6 1.6-1.6 3.1-2.8 4.3l6.4 5.2c1.8-1.7 3.2-4.1 3.8-6.7.3-1.3.4-2.7.4-4 0-.7-.1-1.4-.2-2z"/></g></svg>
          Continue with Google
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;