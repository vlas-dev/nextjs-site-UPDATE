"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; 
import logoImage from "../assets/synrg.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState("EN");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-100 p-3 z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link href="/" passHref>
            <Image src={logoImage} alt="Logo" width={150} />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Regular Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/" passHref>
              <button
                className={`hover:text-gray-800 ${pathname === "/" ? "border-b-2 border-blue-950" : ""}`}
              >
                Home
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button
                className={`hover:text-gray-800 ${pathname === "/contact" ? "border-b-2 border-blue-950" : ""}`}
              >
                Contact
              </button>
            </Link>
            <Link href="/signin" passHref>
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold">
                Sign in
              </button>
            </Link>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-gray-800 bg-gray-200 p-2 rounded-lg flex items-center space-x-1"
            >
              {language === "EN" ? "EN" : "ES"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform transform ${
                  showDropdown ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute top-11 left-0 bg-gray-100 border rounded-lg">
                <button
                  onClick={() =>
                    handleLanguageChange(language === "EN" ? "ES" : "EN")
                  }
                  className="block px-4 py-2"
                >
                  {language === "EN" ? "Español" : "English"}
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-gray-800  bg-gray-200 rounded-lg p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-16 right-0 bg-white w-48 border rounded-lg text-center">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" passHref>
                  <button
                    className={`hover:text-gray-800 ${pathname === "/" ? "border-b-2 border-blue-950" : ""}`}
                  >
                    Home
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button
                    className={`hover:text-gray-800 ${pathname === "/contact" ? "border-b-2 border-blue-950" : ""}`}
                  >
                    Contact
                  </button>
                </Link>
                <Link href="/signin" passHref>
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
