import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router for client-side navigation
import { HiChevronDown } from 'react-icons/hi'; // Chevron Down Icon

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo/Brand */}
        <h1 className="text-xl font-bold">
          <Link to="/">
          <span className="text-blue-400">Orion </span>
          <span>Infotech</span>
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/about" className="hover:text-blue-400">About</Link>
            </li>
            {/* Dropdown Menu for Products */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none hover:text-blue-400"
              >
                Products
                <HiChevronDown
                  className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg w-48 opacity-90 transition-opacity duration-300 ease-in-out">
                  <li>
                    <Link
                      to="/products/labels"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Labels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/barcode-printers"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Barcode Printers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/barcode-scanners"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Barcode Scanners
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
