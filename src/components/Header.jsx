import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navListClass = ({ isActive }) =>
    `relative text-[14px] font-normal leading-[24px] pb-[2px] block py-2 md:py-0
    before:absolute before:w-0 before:h-[1px] before:bg-[#F45E0C] before:bottom-0 before:left-0
    hover:text-[#F45E0C] hover:before:w-full transition-all duration-300
    ${isActive ? "text-[#F45E0C] before:w-full" : "text-black"}`;

  return (
    <div className="max-w-[1224px] mx-auto px-4">
      <header className="flex items-center justify-between p-[18px] relative border-b-2 border-b-teal-500">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-[48px]">
          <NavLink to="/" className={navListClass}>
            Home
          </NavLink>
          <NavLink to="/product" className={navListClass}>
            Products
          </NavLink>
          <NavLink to="/blog" className={navListClass}>
            Blog
          </NavLink>
          <NavLink to="/faq" className={navListClass}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={navListClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-[10px]">
          <a href="#" className="text-xl">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a href="#" className="flex items-center gap-[10px] text-xl">
            <i className="fa-solid fa-basket-shopping"></i>
            <i className="fa-regular fa-user"></i>
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <i
            className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>
        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
            <ul className="flex flex-col px-4 py-4 gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#F45E0C] font-medium" : "text-black"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "text-[#F45E0C] font-medium" : "text-black"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-[#F45E0C] font-medium" : "text-black"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? "text-[#F45E0C] font-medium" : "text-black"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#F45E0C] font-medium" : "text-black"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="flex gap-6 pt-4 border-t border-gray-200">
                <a href="#" className="text-xl">
                  <i className="fa-regular fa-heart"></i>
                </a>
                <a href="#" className="text-xl flex items-center gap-4">
                  <i className="fa-solid fa-basket-shopping"></i>
                  <i className="fa-regular fa-user"></i>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
