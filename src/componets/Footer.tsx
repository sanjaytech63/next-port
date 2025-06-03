import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sanjay<span className="text-gray-400">Choudhary</span>
          </h2>
          <p className="text-sm text-gray-400">
            MERN Stack Developer crafting modern web applications with clean UI, responsive design, and real-world performance from front-end to back-end.
          </p>

        </div>

        {/* Menu */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
           <li className="hover:text-white cursor-pointer">
              <Link href="/">Work</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/project">Projects</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Experience</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Frontend Developer</li>
            <li className="hover:text-white cursor-pointer">React.js Projects</li>
            <li className="hover:text-white cursor-pointer">UI/UX Practice</li>
            <li className="hover:text-white cursor-pointer">Freelancing</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer transition" />
            <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer transition" />
            <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer transition" />
            <FaYoutube className="text-xl hover:text-red-600 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} SanjayTech — Built with ❤️ using React & Tailwind CSS
      </div>
    </footer>
  );
}

export default Footer;
