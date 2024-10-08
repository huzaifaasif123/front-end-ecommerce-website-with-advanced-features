import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuItemsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger button */}
      <button 
        className="absolute top-4 right-6 z-50 md:hidden focus:outline-none" 
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" className="text-palette9" />
      </button>

      
      <div 
        className={`menu fixed top-16 right-0 w-full h-[90vh] flex flex-col items-center justify-evenly bg-palette9 rounded-l-3xl shadow-lg transition-transform duration-300 ease-in-out transform overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:flex md:items-center md:flex-row md:w-1/3 md:justify-around md:text-palette1 md:relative md:top-0 md:bg-palette3 md:transform-none z-40 overflow-hidden`}
      >
        <NavLink
          className="p-2 w-full h-full   text-palette1 bg-palette9 shadow-inner shadow-palette1 hover:text-palette9 hover:bg-palette1 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 md:w-11/12 md:h-12  md:rounded-3xl "
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          className="p-2 w-full h-full   text-palette1 bg-palette9 shadow-inner shadow-palette1 hover:text-palette9 hover:bg-palette1 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 md:w-11/12 md:h-12  md:rounded-3xl"
          to="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          className="p-2 w-full h-full   text-palette1 bg-palette9 shadow-inner shadow-palette1 hover:text-palette9 hover:bg-palette1 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 md:w-11/12 md:h-12  md:rounded-3xl"
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default MenuItemsHeader;
