"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import firebaseAppConfig from "../lib/firebase-config";

const auth = getAuth(firebaseAppConfig);

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [session, setSession] = useState<User | null | false>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { href: "/", label: "Work" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setSession(user);
      else setSession(false);
    });
    return () => unsubscribe();
  }, []);

  if (session === null) {
    return (
      <div className="bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center">
        <span className="relative flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-gray-100"></span>
        </span>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="flex items-center justify-between h-[70px] px-2 sm:px-6">
        <Link href="/" className="text-white font-bold text-md bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-600">
          Sanjay Choudhary
        </Link>

        <div className="hidden md:flex items-center space-x-4 text-white text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition ${pathname === href ? "text-gray-400" : "hover:text-gray-400"}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="hidden md:flex gap-2">
          {!session ? (
            <>
              <Link
                href="/login"
                 className="inline-block bg-black text-white py-1 cursor-pointer px-4 rounded-full  borde border-[1px] text-center transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                 className="inline-block bg-black text-white py-1 cursor-pointer px-4 rounded-full  borde border-[1px] text-center transition-colors"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={() => signOut(auth)}
              className="inline-block bg-black text-white py-1 cursor-pointer px-4 rounded-full  borde border-[1px] text-center transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-90 text-white py-4 px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-sm transition ${pathname === href ? "text-gray-400" : "hover:text-gray-400"}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {!session ? (
            <>
              <Link
                href="/login"
                className="w-full  text-center  hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-full  text-center hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              className="w-full text-center hover:text-gray-200"
              onClick={() => {
                setMenuOpen(false);
                signOut(auth);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;