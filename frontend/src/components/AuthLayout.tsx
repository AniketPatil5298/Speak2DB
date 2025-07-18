import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Left side (60%) */}
      <div className="w-3/5 flex flex-col justify-center items-center px-16 bg-white dark:bg-black text-black dark:text-white transition-colors">
        <h1 className="text-4xl font-bold mb-6 text-center">
          An AI-powered SQL and MongoDB Query Generator
        </h1>
        <p className="text-lg leading-7 text-center max-w-2xl">
          This intelligent tool helps users — especially those without deep technical knowledge — to generate SQL and MongoDB queries by simply describing their needs in natural language.
          <br /><br />
          Features include history tracking, multiple database support, user authentication, and more — all presented through a clean and intuitive UI.
        </p>
      </div>

      {/* Right side (40%) */}
     <div className="w-2/5 flex justify-center items-center bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {children}
    </div>
    </div>
  );
};


export default AuthLayout;
