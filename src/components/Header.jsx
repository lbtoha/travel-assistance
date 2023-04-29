import React from "react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C6.485 1 2 5.485 2 11s4.485 10 10 10 10-4.485 10-10S17.515 1 12 1zm0 18c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded  border-blue-400 hover:text-white hover:border-white">
          <FaSearch className="mr-2" />
          <span>Search</span>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            News
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Blog
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
            Content
          </a>
        </div>
        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
