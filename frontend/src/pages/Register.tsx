import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import AuthLayout from '../components/AuthLayout';
import { useRegisterStore } from '../store/useRegisterStore';
import { registerSchema } from '../validation/registerSchema';
import axios, { AxiosError } from 'axios';
import GoogleBtn from '../components/GoogleBtn';

const Register = () => {
  const { theme } = useTheme();
  const { firstName, lastName, email, password, confirmPassword, setField, reset } =
    useRegisterStore();

  const [isFormValid, setIsFormValid] = useState(false);
  console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_PATH);
  // Re-validate when fields change
  useEffect(() => {
    const result = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    setIsFormValid(result.success);
  }, [firstName, lastName, email, password, confirmPassword]);

  const inputClass = `px-4 py-2 border rounded w-full ${
    theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : ''
  }`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      const errors = result.error.format();
      console.error('Validation failed:', errors);
      alert('Please fill out all required fields correctly.');
      return;
    }

    const registerData = {
      firstName: firstName, // ensure keys match your backend schema
      lastName,
      email,
      password,
      isThirdPartyLogin: false, // default if user registers manually
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH}/auth/signup`,
        registerData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('✅ Registration successful:', response.data);
      alert('Registered successfully!');
      reset(); // Clear form after successful register
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message?: string }>;
      alert(axiosError.response?.data?.message || 'Register failed');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setField('firstName', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setField('lastName', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setField('email', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setField('password', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setField('confirmPassword', e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded transition ${
              isFormValid
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <GoogleBtn />

        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
