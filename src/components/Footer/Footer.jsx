import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between items-center gap-6 bg-[#5B74D1] text-zinc-900 px-10 py-14 md:px-24 transition-all duration-300"
    >
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-md md:text-xl font-medium text-zinc-800">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-2 text-center md:text-left">
        <li className="flex items-center gap-2 hover:text-[#6b4c4c] transition-all duration-300 cursor-pointer">
          <MdOutlineEmail size={22} />
          <a href="mailto:mansibhardwaj.5678@gmail.com">mansibhardwaj.5678@gmail.com</a>
        </li>
        <li className="flex items-center gap-2 hover:text-[#6b4c4c] transition-all duration-300 cursor-pointer">
          <CiLinkedin size={22} />
          <a href="www.linkedin.com/in/mansi-cse" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/mansi-cse
          </a>
        </li>
        <li className="flex items-center gap-2 hover:text-[#6b4c4c] transition-all duration-300 cursor-pointer">
          <FaGithub size={22} />
          <a href="https://github.com/Mansi2821/" target="_blank" rel="noopener noreferrer">
            https://github.com/Mansi2821/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
