import React from "react";

function Navbar() {
  return (
    <div>
      <h1 className="text-xl font-bold mr-8 ">Textutills</h1>

      <nav className="bg-purple-400 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center w-full">
          <div className="flex space-x-8">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">About Us</p>
          </div>

          <div className="flex ml-auto">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition cursor-pointer">
              Search
            </button>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                dark:border-gray-600 peer-checked:bg-blue-600 mx-2"
              ></div>

              <span className="ml-3 text-sm font-medium text-white">
                Toggle Theme
              </span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
