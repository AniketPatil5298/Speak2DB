import React from 'react';
import { Settings, History } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-black text-black dark:text-white transition-colors overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 sm:w-64 md:w-72 flex flex-col justify-between border-r border-gray-200 dark:border-white bg-white dark:bg-black transition-colors overflow-y-auto">
        <div className="p-4">
          <button className="w-full py-2 mb-4 bg-blue-100 text-blue-800 font-semibold rounded-md text-sm dark:bg-blue-900 dark:text-blue-200 hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-600">
            New Chat
          </button>

          <button className="flex items-center gap-2 w-full px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm font-medium">
            <History className="w-4 h-4" />
            History
          </button>
        </div>

        <div className="p-4 mt-auto">
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-600">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 flex flex-col items-center justify-start p-6 sm:p-8 md:p-10 overflow-y-auto m-auto">
        <div className="w-full max-w-3xl">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full p-4 rounded-md bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex flex-wrap gap-x-2">
            Examples:
            <span className="hover:underline cursor-pointer">
              Show me all users who signed up in the last 30 days
            </span>
            |
            <span className="hover:underline cursor-pointer">
              List all products with more than 100 sales
            </span>
            |
            <span className="hover:underline cursor-pointer">
              Find orders placed in the last week
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
