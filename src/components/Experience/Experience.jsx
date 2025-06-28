import React from "react";
import { motion } from "framer-motion";
import ExperienceImg from "../../assets/experience.png"; // Add a relevant image in your assets folder

const Experience = () => {
  return (
    <div
      id="Experience"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-24 py-20 rounded-3xl shadow-2xl mx-4 md:mx-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Experience & Education
      </h1>

      <div className="md:flex items-center justify-center gap-16">
        {/* Left: Text Info */}
        <div className="md:w-1/2 space-y-8">
          {/* Experience */}
          <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-[#38bdf8]">
              Professional Experience
            </h2>
            <p className="text-sm md:text-base text-gray-300">Fresher</p>
            <p className="text-xs mt-1 text-gray-400">
              Eager to apply technical skills in a real-world environment. Actively building personal projects and participating in hackathons to gain hands-on experience.
            </p>
          </div>

          {/* Education */}
          <div className="bg-slate-900 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-[#34d399]">
              Education
            </h2>
            <ul className="text-sm md:text-base text-gray-300 space-y-4">
              <li>
                <span className="font-bold text-white">VIT Bhopal University</span> <br />
                B.Tech – Computer Science and Engineering <br />
                <span className="text-sm text-gray-400">(2022 – 2026)</span> <br />
                CGPA: <span className="font-semibold text-white">8.80</span>
              </li>
              <li>
                <span className="font-bold text-white">Higher Secondary (PCMB)</span> <br />
                <span className="text-sm text-gray-400">(2020 – 2022)</span> <br />
                Percentage: <span className="font-semibold text-white">91.8%</span>
              </li>
              <li>
                <span className="font-bold text-white">Secondary Education</span> <br />
                <span className="text-sm text-gray-400">(2019 – 2020)</span> <br />
                Percentage: <span className="font-semibold text-white">95.4%</span>
              </li>
            </ul>
          </div>
        </div>

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
    className="w-[80%] md:w-[90%] rounded-2xl shadow-xl"
  />
</motion.div>

      </div>
    </div>
  );
};

export default Experience;



