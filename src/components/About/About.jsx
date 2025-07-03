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
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Circular progress component
const CircularProgress = ({ percent }) => {
  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
      <circle
        stroke="#1e293b"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#94b4fa"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s ease" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fill="white"
        transform="rotate(90, 30, 30)"
      >
        {percent}%
      </text>
    </svg>
  );
};

const About = () => {
  const techStack = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5", level: "Expert", percent: 95 },
    { icon: <FaCss3 color="#1572B6" />, name: "CSS3", level: "Professional", percent: 85 },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript", level: "Intermediate", percent: 70 },
    { icon: <FaReact color="#61DAFB" />, name: "React", level: "Intermediate", percent: 70 },
    { icon: <FaPython color="#3776AB" />, name: "Python", level: "Beginner", percent: 50 },
    { icon: <FaJava color="#f89820" />, name: "Java", level: "Intermediate", percent: 70 },
    { icon: <FaDatabase color="#00758F" />, name: "MySQL", level: "Beginner", percent: 50 },
    { icon: <FaGitAlt color="#f05033" />, name: "Git", level: "Beginner", percent: 45 },
  ];

  return (
    <div
      id="About"
      className="text-white bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-xl rounded-3xl px-10 py-16 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="rounded-3xl w-3/4 md:w-full hover:scale-105 duration-300 shadow-lg"
            src={AboutImg}
            alt="About Mansi"
          />
        </div>

        {/* Right: Description */}
        <div className="md:w-1/2 space-y-8">
          <div className="flex gap-3 py-3">
            <IoArrowForward size={32} className="mt-1 text-blue-400" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Frontend Developer</h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I specialize in building interactive and responsive user interfaces using React,
                HTML, CSS, Tailwind CSS, and JavaScript. I'm passionate about crafting seamless
                digital experiences with attention to detail and performance.
              </p>
            </div>
          </div>

          <div className="flex gap-3 py-3">
            <IoArrowForward size={32} className="mt-1 text-green-400" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Backend & Database Enthusiast</h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I have a solid understanding of backend logic and data handling. I work with Python,
                MySQL, Java to create full-stack applications with secure and efficient data
                storage.
              </p>
            </div>
          </div>

          <div className="flex gap-3 py-3">
            <IoArrowForward size={32} className="mt-1 text-pink-400" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Creative Problem Solver</h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I enjoy solving coding challenges and debugging issues, especially in JavaScript,
                OOP, and DSA topics like stacks, queues, and trees. I believe in writing clean and
                optimized code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <h3 className="text-4xl md:text-4xl font-semibold text-center mb-6">Tech Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-[#334155] p-6 rounded-2xl w-full max-w-xs flex flex-col items-center shadow-lg 
                         hover:shadow-blue-400/40 hover:scale-105 transition duration-300 cursor-pointer relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h4 className="text-lg font-bold text-center mb-1">{tech.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{tech.level}</p>
              <CircularProgress percent={tech.percent} />

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 px-2 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                {tech.name} – {tech.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
