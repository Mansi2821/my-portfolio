import React from "react";
import { MdOutlineEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="w-full px-4 md:px-10 py-8 bg-blue-300 text-black shadow-inner"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2e05] mb-2 drop-shadow">
            Contact
          </h1>
          <p className="text-sm md:text-lg text-gray-700">
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Details */}
        <ul className="text-sm md:text-base space-y-3 text-center md:text-left font-medium text-black">
          <li className="flex items-center gap-3 hover:text-pink-500 transition duration-300 justify-center md:justify-start">
            <MdLocationOn size={22} className="text-pink-400" />
            Gurugram, Haryana, India
          </li>

          <li className="flex items-center gap-3 hover:text-green-700 transition duration-300 justify-center md:justify-start">
            <MdPhone size={22} className="text-green-700" />
            +91 9599005776
          </li>

          <li className="flex items-center gap-3 hover:text-blue-600 transition duration-300 justify-center md:justify-start">
            <MdOutlineEmail size={22} className="text-blue-500" />
            <a
              href="mailto:mansibhardwaj.5678@gmail.com"
              className="hover:underline"
            >
              mansibhardwaj.5678@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-blue-600 transition duration-300 justify-center md:justify-start">
            <CiLinkedin size={22} className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/mansi-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/mansi-cse
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-gray-800 transition duration-300 justify-center md:justify-start">
            <FaGithub size={22} className="text-black" />
            <a
              href="https://github.com/Mansi2821/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Mansi2821
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-yellow-600 transition duration-300 justify-center md:justify-start">
            <SiLeetcode size={22} className="text-yellow-500" />
            <a
              href="https://leetcode.com/u/Mansi_cse/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              leetcode.com/u/Mansi_cse
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-6 text-center text-xs md:text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Mansi Bhardwaj. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
