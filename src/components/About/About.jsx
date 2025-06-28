import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

const About = () => {
  const techStack = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaJava color="#f89820" />, name: "Java" },
    { icon: <FaDatabase color="#00758F" />, name: "MySQL" },
  ];

  return (
    <div
      id="About"
      className="text-white bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-xl rounded-3xl px-10 py-16 md:px-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="rounded-3xl w-3/4 md:w-full hover:scale-105 duration-300 shadow-lg"
            src={AboutImg}
            alt="About Mansi"
          />
        </div>

        {/* Right: Description */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex gap-3 py-3">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Frontend Developer</h3>
              <p className="text-sm md:text-md text-gray-300 leading-relaxed">
                I specialize in building interactive and responsive user interfaces using React, HTML, CSS, Tailwind CSS, and JavaScript. I'm passionate about crafting seamless digital experiences with attention to detail and performance.
              </p>
            </div>
          </div>

          <div className="flex gap-3 py-3">
            <IoArrowForward size={28} className="mt-1 text-green-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Backend & Database Enthusiast</h3>
              <p className="text-sm md:text-md text-gray-300 leading-relaxed">
                I have a solid understanding of backend logic and data handling. I work with Python, MySQL, Java to create full-stack applications with secure and efficient data storage.
              </p>
            </div>
          </div>

          <div className="flex gap-3 py-3">
            <IoArrowForward size={28} className="mt-1 text-pink-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Creative Problem Solver</h3>
              <p className="text-sm md:text-md text-gray-300 leading-relaxed">
                I enjoy solving coding challenges and debugging issues, especially in JavaScript, OOP, and DSA topics like stacks, queues, and trees. I believe in writing clean and optimized code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-5 justify-center mt-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-800 bg-opacity-50 p-4 rounded-xl w-20 h-20 flex flex-col items-center justify-center shadow hover:scale-110 transition"
            >
              <div className="text-3xl">{tech.icon}</div>
              <p className="text-xs text-center mt-1 text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

