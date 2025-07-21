import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import AuthLayout from '../components/AuthLayout';
import { useLoginStore } from '../store/useLoginStore';
import { loginSchema } from '../validation/loginSchema';
import GoogleBtn from '../components/GoogleBtn';
import axios, { AxiosError } from 'axios';
import { ZodError } from 'zod';

const Login = () => {
  const { theme } = useTheme();
  const { fields, errors, setField, setErrors, reset } = useLoginStore();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(fields);

    if (!result.success) {
      const zodError = result.error as ZodError;
      const fieldErrors: Partial<Record<keyof typeof fields, string>> = {};

      zodError.issues.forEach((err) => {
        const field = err.path[0] as keyof typeof fields;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    try {
      //  const response = await axios.post(
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH}/auth/signin`,
        fields,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Logged in successfully!');
      reset();
      localStorage.setItem('token', response.data.token);
      navigate('/home');
      // Optionally store token or user data
      // localStorage.setItem('token', response.data.token);
      // navigate('/dashboard'); // If using React Router
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message?: string }>;
      alert(axiosError.response?.data?.message || 'Login failed');
    }
  };

  return (
    <AuthLayout>
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-md ${
          theme === 'dark'
            ? 'bg-black-900 text-white border border-white'
            : 'bg-white text-gray-900'
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={fields.email}
              onChange={(e) => setField('email', e.target.value)}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={fields.password}
              onChange={(e) => setField('password', e.target.value)}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="my-4 text-center text-gray-500">or</div>
        <GoogleBtn />
        <p className="mt-4 text-center">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
