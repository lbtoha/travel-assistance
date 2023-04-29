import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="container mx-auto text-white flex">
      <img className="w-16" src={logo} alt="" />
      <input type="text" />
      <Link>News</Link>
      <button></button>
    </nav>
  );
};

export default Header;
