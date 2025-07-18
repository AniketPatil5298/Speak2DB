import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import AuthLayout from '../components/AuthLayout';

const Register = () => {
  const { theme } = useTheme();

  return (
    <AuthLayout>
      <div className={`p-8 rounded-lg shadow-lg w-full max-w-md ${theme === 'dark' ? 'bg-black-900 text-white border border-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4">
          <div className="flex space-x-2">
            <input type="text" placeholder="First Name" className={`w-1/2 px-4 py-2 border rounded ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
            <input type="text" placeholder="Last Name" className={`w-1/2 px-4 py-2 border rounded ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
          </div>
          <input type="email" placeholder="Email" className={`w-full px-4 py-2 border rounded ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
          <input type="password" placeholder="Password" className={`w-full px-4 py-2 border rounded ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
          <input type="password" placeholder="Confirm Password" className={`w-full px-4 py-2 border rounded ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''}`} />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
        </form>
        <div className="my-4 text-center text-gray-500">or</div>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          {/* SVG Icon */}
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#FFC107" d="..."/><path fill="#FF3D00" d="..."/><path fill="#4CAF50" d="..."/><path fill="#1976D2" d="..."/></g></svg>
          Continue with Google
        </button>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
