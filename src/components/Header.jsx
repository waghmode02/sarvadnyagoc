import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/img1.png";
import { Link, useLocation } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      servicesDropdownRef.current &&
      !servicesDropdownRef.current.contains(event.target)
    ) {
      setIsServicesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center header-logo">
            <img
              src={img1}
              className="mr-3 h-3 sm:h-20"
              alt="Sarvadnya Goc Logo"
            />
            <span className="self-center text-sm font-semibold">
              Sarvadnya Group Of Construction, Nanded
            </span>
          </Link>
          <div className="flex items-center lg:order-2 phone-container">
            <a
              href="tel:+919595250999"
              className="text-black hover:bg-primary-700 bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              id="phone"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-1 bg-yellow-600 text-white p-1 rounded-full phone-icon"
              />
              <span className="ml-2 text-sm">+91 9595250999</span>
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 menu-button"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-black rounded lg:bg-transparent lg:text-black lg:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 flex items-center"
                >
                  Services{" "}
                  <RiArrowDropDownLine
                    size={20}
                    className="ml-1 text-primary-700"
                  />
                </button>
                <ServicesDropdown
                  isServicesDropdownOpen={isServicesDropdownOpen}
                />
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const ServicesDropdown = ({ isServicesDropdownOpen }) => {
  const servicesDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul
      ref={servicesDropdownRef}
      className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg lg:absolute lg:mt-0 lg:ml-0 lg:w-48 lg:top-full dropdown-menu ${
        isServicesDropdownOpen ? "block" : "hidden"
      }`}
    >
      <li key="ongoing-projects">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
          On Going Projects
        </a>
      </li>
      <li key="residential-construction">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
          Residential Construction
        </a>
      </li>
      <li key="commercial-construction">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
          Commercial Construction
        </a>
      </li>
      <li key="offices">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
          Offices
        </a>
      </li>
      <li key="land-surveyor">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
          Land Surveyor
        </a>
      </li>
      <li key="quality-check">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
          Quality Check
        </a>
      </li>
    </ul>
  );
};

export default Header;
