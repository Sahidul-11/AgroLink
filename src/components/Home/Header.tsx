"use client";
import React, { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBarSection from "./Searchbar";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false); // State for the modal
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
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
            pathname === "/"
              ? " text-amber-300 border-b-2 border-amber-400"
              : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/about"
              ? " text-amber-300 border-b-2 border-amber-400"
              : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          About Us
        </div>
      </Link>
      <Link href="/services">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/services"
              ? " text-amber-300 border-b-2 border-amber-400"
              : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Services
        </div>
      </Link>
      <Link href="/blog">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/blog"
              ? " text-amber-300 border-b-2 border-amber-400"
              : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Blog
        </div>
      </Link>
      <Link href="/contact">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/contact"
              ? " text-amber-300 border-b-2 border-amber-400"
              : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          Contact Us
        </div>
      </Link>
      <Link href="/faq">
        <div
          className={`block px-4 py-2 transition-all duration-300  ${
            pathname === "/faq"
              ? " text-amber-300 border-b-2 border-amber-400"
              : "hover:text-amber-300 hover:border-b-2 border-amber-400"
          }`}
          onClick={handleLinkClick}
        >
          FAQ
        </div>
      </Link>
    </>
  );

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Header */}
      <nav className="bg-green-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="mx-2 md:mx-6 lg:mx-10 flex items-center justify-between py-3">
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
            <div className="text-xl hidden md:block font-bold md:ml-4">
              <Link href="/home">
                <img
                  className="w-36 h-12 rounded-lg"
                  src="/logo.png"
                  alt="AgroLink Logo"
                />
              </Link>
            </div>
          </div>

          {/* Navigation for larger screens */}
          <div className="hidden md:flex lg:gap-8">{navItems}</div>

          {/* Right side */}
          <div className="flex gap-5">
            <button
              type="button"
              onClick={() => setShowModal(true)} // Show modal on button click
              className=" bg-amber-300 text-white hover:text-green-800 px-4 py-3 rounded-full shadow hover:shadow-lg hover:bg-white transition"
            >
              🔍
            </button>
            <Link href="/sign-in">
              <button className=" text-yellow-300 px-6 py-2 border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-green-800 transition-all duration-300">
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

      {/* Modal */}
      {showModal && (
        <div
          className="fixed  -top-0 w-full z-50 flex items-center justify-center bg-green-700 bg-opacity-100 p-5 transition-transform duration-300"
          onClick={() => setShowModal(false)} // Close modal when background is clicked
        >
        
            <div className=" flex w-full">
             <div className="w-full"> <SearchBarSection/></div>
              <Hamburger color="white" toggled={showModal} toggle={setShowModal} />
            </div>
        </div>
      )}
    </>
  );
};

export default Header;
