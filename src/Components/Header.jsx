import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blogify</h1>
            <p className="text-sm text-gray-500">Thoughts on tech & design</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
              alt="Suraj"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Suraj Gautam</p>
            <p className="text-xs text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
