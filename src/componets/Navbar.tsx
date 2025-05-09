"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Work" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="flex items-center justify-between h-[70px] px-6">
        {/* Logo */}
        <div className="flex cursor-pointer items-center px-4 py-2 text-white rounded-full backdrop-blur-md shadow-sm">
          <span className="font-semibold text-sm">Sanjay Tech</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-4 text-white text-sm font-medium">
          {navLinks?.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition ${pathname === href ? "text-gray-400" : "hover:text-gray-400"}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Login Button (Always visible) */}
        <Link
          href="/login"
          className="sm:block hidden bg-black text-white py-2 px-4 rounded-full text-center borde border-[1px] transition-colors"
        >
          Login
        </Link>

      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-90 text-white py-4 px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-sm transition ${pathname === href ? "text-gray-400" : "hover:text-gray-400"}`}
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="inline-block bg-black text-white py-2 px-4 rounded-full  borde border-[1px] text-center hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;
