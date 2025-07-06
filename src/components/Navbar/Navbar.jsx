import React, { useState } from 'react';
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="relative z-50 w-full px-6 md:px-20 py-6 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md text-white flex justify-between items-center">
      
      {/* Logo */}
      <span className="text-4xl md:text-3xl font-bold tracking-wide text-white drop-shadow-md">
        Portfolio
      </span>

      {/* Right Section (Menu + Resume) */}
      <div className="flex items-center gap-6">
        
        {/* Resume Button - only visible on desktop */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-block bg-pink-200 hover:bg-pink-300 text-[#1a1a2e] font-semibold py-2 px-4 rounded-full text-sm md:text-base shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Download Resume
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          <li className="hover:text-[#94b4fa] transition-all duration-300 hover:scale-105">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-[#94b4fa] transition-all duration-300 hover:scale-105">
            <a href="#Experience">Experience</a>
          </li>
          <li className="hover:text-[#94b4fa] transition-all duration-300 hover:scale-105">
            <a href="#Projects">Projects</a>
          </li>
          <li className="hover:text-[#94b4fa] transition-all duration-300 hover:scale-105">
            <a href="#Footer">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menu ? (
            <RiCloseLine
              size={30}
              className="text-[#94b4fa] cursor-pointer transition-all"
              onClick={() => setMenu(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="text-[#94b4fa] cursor-pointer transition-all"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-20 right-6 w-3/4 max-w-xs bg-[#0f1a2a] bg-opacity-95 backdrop-blur-md shadow-xl rounded-xl p-6 transition-all duration-500 ${
          menu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-lg font-semibold text-center">
          <li onClick={() => setMenu(false)} className="hover:text-[#94b4fa] transition-all">
            <a href="#About">About</a>
          </li>
          <li onClick={() => setMenu(false)} className="hover:text-[#94b4fa] transition-all">
            <a href="#Experience">Experience</a>
          </li>
          <li onClick={() => setMenu(false)} className="hover:text-[#94b4fa] transition-all">
            <a href="#Projects">Projects</a>
          </li>
          <li onClick={() => setMenu(false)} className="hover:text-[#94b4fa] transition-all">
            <a href="#Footer">Contact</a>
          </li>

          {/* Resume Button for Mobile Menu */}
          <li onClick={() => setMenu(false)}>
            <a
              href="/resume.pdf"
              download
              className="bg-pink-200 hover:bg-pink-300 text-[#1a1a2e] font-semibold py-2 px-4 rounded-full text-sm shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg inline-block mt-2"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


