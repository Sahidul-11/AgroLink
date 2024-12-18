"use client";
import React, { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false); // To track if the component is mounted on the client
  const pathname = usePathname(); // Initialize the pathname hook

  useEffect(() => {
    setIsMounted(true); // Set to true after the component has mounted
  }, []);

  const handleLinkClick = (): void => setMenuOpen(false);

  const handleOutsideClick = (e: MouseEvent): void => {
    if (!(e.target as HTMLElement).closest("#mobile-menu")) setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  const navItems = (
    <>
      <Link href="/">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/" ? " text-amber-300 border-b-2 border-amber-400" : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/about" ? " text-amber-300 border-b-2 border-amber-400" : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          About Us
        </div>
      </Link>
      <Link href="/services">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/services" ? " text-amber-300 border-b-2 border-amber-400" : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Services
        </div>
      </Link>
      <Link href="/blog">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/blog" ? " text-amber-300 border-b-2 border-amber-400" : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Blog
        </div>
      </Link>
      <Link href="/contact">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/contact" ? " text-amber-300 border-b-2 border-amber-400" : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Contact Us
        </div>
      </Link>
      <Link href="/faq">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/faq" ? " text-amber-300 border-b-2 border-amber-400" : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          FAQ
        </div>
      </Link>
    </>
  );

  if (!isMounted) {
    return null; // Return null until the component is mounted on the client side
  }

  return (
    <nav className="bg-green-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="mx-2 md:mx-6 lg:mx-10 flex items-center justify-between py-3">
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-center gap-3">
          <div className="md:hidden">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl focus:outline-none"
              id="mobile-menu"
            >
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
            </div>
          </div>

          {/* Left - Logo */}
          <div className="text-xl hidden md:block font-bold md:ml-4">
            <Link href="/home">
              <img
                className="w-36 h-12 rounded-lg"
                src="/logo.png" // Replace with your AgroLink logo
                alt="AgroLink Logo"
              />
            </Link>
          </div>
        </div>

        {/* Middle - Navigation Links (for larger screens) */}
        <div className="hidden md:flex lg:gap-8">{navItems}</div>

        {/* Right - Sign In/Sign Up Button */}
        <div>
          <Link href="/sign-in">
            <button className="  text-yellow-300 px-6 py-2 border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-green-800 transition-all duration-300">
              Sign In / Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-green-700 px-4 py-2 space-y-2">
          {navItems}
        </div>
      )}
    </nav>
  );
};

export default Header;
