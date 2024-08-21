import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from '../../public/images/myntra_logo.webp';
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bag =useSelector((store)=>store.bag)
  console.log(bag)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md shadow-zinc-200">
      {/* Navbar */}
      <nav className="bg-[#FFFFFF] p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-black font-semibold text-lg mr-4">
            <img src={logo} alt="" className="w-[70px]"/>
          </NavLink>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex items-center md:flex ${
            menuOpen ? "flex-col md:flex-row" : "hidden md:flex"
          }`}
        >
          <li className="mr-6 mb-4 md:mb-0">
            <NavLink to="/" className="text-[#282C3F] text-md font-bold">
              MEN
            </NavLink>
          </li>
          <li className="mr-6 mb-4 md:mb-0">
            <NavLink to="/about" className="text-[#282C3F] text-md font-bold" disabled>
              WOMEN
            </NavLink>
          </li>
          <li className="mr-6 mb-4 md:mb-0">
            <NavLink to="/contact" className="text-[#282C3F] text-md font-bold">
              KIDS
            </NavLink>
          </li>
          <li className="mr-6 mb-4 md:mb-0">
            <NavLink to="/contact" className="text-[#282C3F] text-md font-bold">
              HOME & LEAVING
            </NavLink>
          </li>
          <li className="mr-6 mb-4 md:mb-0">
            <NavLink to="/contact" className="text-[#282C3F] text-md font-bold">
              BEAUTY
            </NavLink>
          </li>
          <li className="mr-6 mb-4 md:mb-0">
            <NavLink
              to="/contact"
              className="text-[#282C3F] text-md font-bold relative"
            >
              STUDIO
              <div className="badge text-sm text-[#FF91AB] ">
                New
              </div>
            </NavLink>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="bg-[#F5F5F6] text-[#282C3F] px-3 py-3 rounded-md w-full md:w-[400px] focus:outline-none hidden md:block"
          />
          <button className="ml-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l5-5m0 0l-5-5m5 5h-5m5 5V5m-5 14H4a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v10a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4  mr-4 ">
          <div className="text-md flex flex-col justify-center items-center font-semibold">
            <FaRegCircleUser className="text-md"/>
            Profile
          </div>
          <div className="text-md flex flex-col justify-center items-center font-semibold">
          <BsBell />
          WishList
          </div>
          <NavLink to='/bag' className="text-md flex flex-col justify-center items-center font-semibold relative">
          <BsBag />
          Bag
          <span className="absolute -top-3 right-0 text-xl text-pink-800">{bag.length}</span>
          </NavLink>
        </div>
      </nav>
      <hr className="shadow-lg shadow-gray-800"/>
    </div>
  );
};

export default Header;
