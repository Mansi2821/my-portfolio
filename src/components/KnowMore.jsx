import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCertificate, FaHandsHelping, FaLanguage } from "react-icons/fa";

// Badge images
import Badge100 from "../assets/leetcode/badge-100.png";
import Badge50 from "../assets/leetcode/badge-50.png";
import BadgeMar from "../assets/leetcode/badge-mar.png";
import BadgeFeb from "../assets/leetcode/badge-feb.png";

// Section Card Component
const Section = ({ icon, title, items, gradient }) => (
  <motion.div
    className={`rounded-3xl w-[340px] min-h-[280px] md:w-[360px] p-6 shadow-xl ${gradient} bg-opacity-90 hover:shadow-2xl transition duration-300`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <ul className="list-disc pl-6 text-white text-sm md:text-base space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const KnowMore = () => {
  return (
    <div
      id="KnowMore"
      className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-2 md:px-10 py-10 "
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 drop-shadow">
        Know More About Me
      </h1>

      {/* Horizontal Scroll Section Cards */}
      <div className="bg-pink-300 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl w-full overflow-x-auto whitespace-nowrap flex gap-6 mb-12">
        <Section
          icon={<FaBrain className="text-white text-3xl" />}
          title="Soft Skills"
          gradient="bg-gradient-to-br from-[#6a0572] to-[#8e298a]"
          items={[
            "Problem-Solving",
            "Teamwork",
            "Communication",
            "Adaptability",
            "Time Management",
            "Self-Learning",
          ]}
        />
        <Section
          icon={<FaCertificate className="text-white text-3xl" />}
          title="Certifications"
          gradient="bg-gradient-to-br from-[#007991] to-[#159bb1]"
          items={[
            "Python Essentials – Vidyarthi (2023)",
            "Coursera – Computer Networks (2023)",
            "NPTEL – Cloud Computing (2024)",
            "Cisco – Cyber Security (2025)",
            "Cisco – JavaScript Essentials (2025)",
            "NPTEL – Market Analytics (2025)",
            "AWS Solution Architect – GFG (2025)",
          ]}
        />
        <Section
          icon={<FaHandsHelping className="text-white text-3xl" />}
          title="Extra-Curricular"
          gradient="bg-gradient-to-br from-[#ff6f61] to-[#ff887a]"
          items={[
            "Core Member – Rajasthan Club",
            "Volunteer – Utkarsh Prayaas School",
            "Hackathon Participant – AI/ML",
            "Intern – Yhills (Web Dev, AI/ML)",
            "Sports: Table-Tennis & Karate",
          ]}
        />
        <Section
          icon={<FaLanguage className="text-white text-3xl" />}
          title="Languages Known"
          gradient="bg-gradient-to-br from-[#1f4e5f] to-[#326d7b]"
          items={["Hindi – Expert", "English – Professional", "French – Beginner"]}
        />
      </div>

      {/* LeetCode Badges Section */}
      <div className="mt-8 px-4 md:px-8 pb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          LeetCode Badges
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[ 
            { img: Badge100, title: "100 Days Badge", date: "2025-05-03" },
            { img: Badge50, title: "50 Days Badge", date: "2025-02-21" },
            { img: BadgeMar, title: "Mar Badge", date: "2025-03-31" },
            { img: BadgeFeb, title: "Feb Badge", date: "2025-02-28" },
          ].map((badge, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-md shadow-lg w-[130px] h-[160px] text-center text-white text-sm md:text-base"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img src={badge.img} alt={badge.title} className="w-12 h-12 mb-2" />
              <p className="font-semibold leading-tight">{badge.title}</p>
              <p className="text-xs text-gray-300 mt-1">{badge.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowMore;







