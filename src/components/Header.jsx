import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="container mx-auto text-white flex gap-8 justify-between relative z-30 py-5 items-center">
      <img className="w-16 w-40" src={logo} alt="" />
      <div className="flex gap-2 items-center bg-white bg-opacity-25 p-3 border border-spacing-2 border-white rounded-md">
        <FaSearch className="text-2xl"></FaSearch>
        <input className="bg-transparent placeholder:text-white outline-none pr-36 ps-2" type="text" placeholder="Search your Destination..." />
      </div>
      <Link>News</Link>
      <Link>Destination</Link>
      <Link>Blog</Link>
      <Link>Contact</Link>
      <button className="px-8 py-3 rounded-md bg-yellow-400 text-black font-medium ">Login</button>
    </nav>
  );
};

export default Header;
