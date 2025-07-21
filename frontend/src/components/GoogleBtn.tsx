import React from 'react';

type GoogleBtnProps = {
  onClick?: () => void;
  className?: string;
};

const GoogleBtn: React.FC<GoogleBtnProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 py-2 rounded hover:bg-gray-100 transition ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 533.5 544.3">
        <path
          fill="#4285f4"
          d="M533.5 278.4c0-17.6-1.6-35.2-5-52.2H272v98.7h146.9c-6.4 34.6-25.7 63.8-54.8 83.3v68h88.4c51.7-47.7 80-118 80-197.8z"
        />
        <path
          fill="#34a853"
          d="M272 544.3c73.6 0 135.4-24.4 180.5-66.5l-88.4-68c-24.5 16.4-55.6 25.9-92.1 25.9-70.9 0-131-47.8-152.4-112.2h-90v70.6C74.5 477.3 165.7 544.3 272 544.3z"
        />
        <path
          fill="#fbbc04"
          d="M119.6 323.5c-10.5-31.6-10.5-65.7 0-97.3v-70.6h-90c-38 75.8-38 162.7 0 238.5l90-70.6z"
        />
        <path
          fill="#ea4335"
          d="M272 107.7c39.9 0 75.7 13.7 103.8 40.4l77.8-77.8C407.4 24.4 345.6 0 272 0 165.7 0 74.5 67 29.6 165.6l90 70.6c21.4-64.5 81.5-112.3 152.4-112.3z"
        />
      </svg>
      <span className="text-sm font-medium">Continue with Google</span>
    </button>
  );
};

export default GoogleBtn;
