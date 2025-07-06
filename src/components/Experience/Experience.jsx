import React from "react";
import { motion } from "framer-motion";
import ExperienceImg from "../../assets/experience.png";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 md:px-12 py-14 rounded-3xl shadow-xl mx-4 md:mx-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Experience & Education
      </h1>

      <div className="md:flex items-center justify-between gap-14">
        {/* Left: Text Info */}
        <div className="md:w-1/2 space-y-10">
          {/* Experience */}
          <div className="bg-[#1f2937]/70 rounded-2xl p-6 shadow-2xl border border-[#334155] hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#38bdf8]">
              Professional Experience
            </h2>
            <p className="text-base md:text-lg text-gray-300">Fresher</p>
            <p className="text-sm md:text-base mt-2 text-gray-400 leading-relaxed">
              Eager to apply technical skills in a real-world environment.
              Actively building personal projects and participating in
              hackathons to gain hands-on experience.
            </p>
          </div>

          {/* Education */}
          <div className="bg-[#1f2937]/70 rounded-2xl p-6 shadow-2xl border border-[#334155] hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#34d399]">
              Education
            </h2>
            <ul className="text-sm md:text-base text-gray-300 space-y-5">
              <li>
                <p className="font-bold text-white text-lg">VIT Bhopal University</p>
                <p>B.Tech – Computer Science and Engineering</p>
                <p className="text-gray-400">(2022 – 2026)</p>
                <p className="text-white font-semibold">CGPA: 8.80</p>
              </li>
              <li>
                <p className="font-bold text-white text-lg">Higher Secondary (PCMB)</p>
                <p>DAV Public School, Gurugram</p>
                <p className="text-gray-400">(2020 – 2022)</p>
                <p className="text-white font-semibold">Percentage: 91.8%</p>
              </li>
              <li>
                <p className="font-bold text-white text-lg">Secondary Education</p>
                <p>SD Adarsh Vidyalaya, Gurugram</p>
                <p className="text-gray-400">(2019 – 2020)</p>
                <p className="text-white font-semibold">Percentage: 95.4%</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <img
            src={ExperienceImg}
            alt="Experience Visual"
            className="w-[85%] md:w-[90%] rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;





