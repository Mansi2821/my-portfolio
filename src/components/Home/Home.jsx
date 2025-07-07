import React from "react";
import avatarImg from "../../assets/Designer girl-bro.png";
import { motion } from "framer-motion";
import TextChange from "../../TextChange.jsx";

const Home = () => {
  return (
    <div className="text-white w-full min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex flex-col-reverse md:flex-row justify-between items-center px-2 py-10 md:px-6 md:py-16 gap-10">

      {/* Left Text Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-6xl font-bold leading-snug tracking-tight text-[#E9F1FA] drop-shadow">
          <TextChange />
        </h1>
        <p className="text-lg md:text-base tracking-tight mt-6 text-gray-300 leading-relaxed">
          A passionate web developer crafting dynamic and responsive websites. I
          enjoy learning new technologies and building smooth user experiences
          with clean, elegant code.
        </p>

        {/* Button Section */}
        <div className="mt-8 flex gap-4">
          <a href="#Footer" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5B74D1] hover:bg-[#6d87e3] transition-all text-white py-2 px-6 rounded-3xl font-semibold shadow-lg"
            >
              Contact Me
            </motion.button>
          </a>

          <a href="#KnowMore">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E86D92] hover:bg-[#d65e84] transition-all text-white py-2 px-6 rounded-3xl font-semibold shadow-lg"
            >
              Know More
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <motion.img
          src={avatarImg}
          alt="Developer Avatar"
          className="w-full md:w-[120%] max-w-[620px] rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;

