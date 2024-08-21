import React from "react";
import { NavLink } from 'react-router-dom';
const Header2 = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-white font-semibold text-lg mr-4">
              Logo
            </NavLink>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden md:flex items-center">
            <li className="mr-6">
              <NavLink
                to="/"
                activeClassName="text-blue-500"
                className="text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/about"
                activeClassName="text-blue-500"
                className="text-white"
              >
                About
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/contact"
                activeClassName="text-blue-500"
                className="text-white"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Responsive Navigation Links */}
          <div className="md:hidden absolute top-0 left-0 bg-gray-800 w-full h-full flex justify-center items-center">
            <ul className="flex flex-col items-center">
              <li className="mb-3">
                <NavLink
                  to="/"
                  activeClassName="text-blue-500"
                  className="text-white"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  to="/about"
                  activeClassName="text-blue-500"
                  className="text-white"
                >
                  About
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink
                  to="/contact"
                  activeClassName="text-blue-500"
                  className="text-white"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-3 py-1 rounded-full focus:outline-none hidden md:block"
            />
            <button className="ml-2 text-white hidden md:block">
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
          <div className="flex items-center">
            <img
              src="profile.jpg"
              alt="profile"
              className="w-8 h-8 rounded-full mr-2 hidden md:block"
            />
            <span className="text-white hidden md:block">John Doe</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
