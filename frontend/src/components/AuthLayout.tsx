import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side (Text / Info) */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-12 bg-white dark:bg-black text-black dark:text-white transition-colors text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          An AI-powered SQL and MongoDB Query Generator
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
          This intelligent tool helps users — especially those without deep technical knowledge —
          generate SQL and MongoDB queries by simply describing their needs in natural language.
          <br />
          <br />
          Features include history tracking, multiple database support, user authentication, and
          more — all presented through a clean and intuitive UI.
        </p>
      </div>

      {/* Right side (Form) */}
      <div className="w-full lg:w-2/5 flex justify-center items-center bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 px-4 sm:px-8 py-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
