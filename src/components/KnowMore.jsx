import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCertificate, FaHandsHelping } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Section Card Component
const Section = ({ icon, title, items, color }) => (
  <motion.div
    className={`rounded-3xl bg-opacity-90 w-full max-w-md mx-auto p-6 shadow-xl ${color}`}
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
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
  };

  return (
    <div
      id="KnowMore"
      className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-4 py-16 md:px-20"
    >
      <h1 className="text-4xl font-bold text-center text-White-200 mb-12 drop-shadow">
        Know More About Me
      </h1>

      <div className="bg-pink-300  backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-5xl mx-auto">
        <Slider {...settings}>
          <div>
            <Section
              icon={<FaBrain className="text-white text-3xl" />}
              title="Soft Skills"
              color="bg-[#6a0572]"
              items={[
                "Problem-Solving",
                "Teamwork & Collaboration",
                "Adaptability",
                "Communication Skills",
              ]}
            />
          </div>
          <div>
            <Section
              icon={<FaCertificate className="text-white text-3xl" />}
              title="Certifications"
              color="bg-[#007991]"
              items={[
                "Vidyarthi - Python Essentials (2023)",
                "Coursera - Computer Networks (2023)",
                "NPTEL - Cloud Computing (2024)",
                "Cisco - Cyber Security (2025)",
                "Cisco - JavaScript Essentials 1 (2025)",
                "NPTEL - Market Analytics (2025)",
              ]}
            />
          </div>
          <div>
            <Section
              icon={<FaHandsHelping className="text-white text-3xl" />}
              title="Extra-Curricular"
              color="bg-[#ff6f61]"
              items={[
                "Rajasthan Club Core Member - Cultural Team",
                "NGO Volunteer - Utkarsh Prayaas School",
                "Hackathon Participant - AI/ML solutions",
                "Internship in Web Dev & Python with Yhills",
              ]}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default KnowMore;
