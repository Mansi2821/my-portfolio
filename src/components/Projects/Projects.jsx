import React from "react";
import ProjectCard from "./ProjectCard";

// Replace with your own local image paths
import drowsyImg from "../../assets/drowsiness.jpg";
import cropImg from "../../assets/crop.jpg";
import bookImg from "../../assets/book.jpg";
import hospitalImg from "../../assets/hospital.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-[#0f111c] text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-300 mb-12 text-center">Projects</h1>

      <div className="flex flex-wrap justify-between gap-y-10">
        <ProjectCard
          title="Driver Drowsiness Detection"
          main="Real-time system using OpenCV & Deep Learning to detect driver fatigue. Alerts drivers using face & eye tracking."
          image={drowsyImg}
          sourceCode="https://github.com/Mansi2821/Driver-Drowsiness-System"
        />
        <ProjectCard
          title="Crop Yield Predictor"
          main="AI model with Machine Learning (Python, Scikit-learn) to forecast crop yield using historical climate & soil data."
          image={cropImg}
          sourceCode="http://github.com/Mansi2821/Cropify"
        />
        <ProjectCard
          title="Book Recommendation Website"
          main="Built with HTML, CSS, JS & MySQL to recommend books based on user preferences and ratings for personalized experience."
          image={bookImg}
          sourceCode="https://github.com/Mansi2821/book_vibe"
        />
        <ProjectCard
          title="Hospital Database Management System"
          main="Full-stack system for managing patient and staff data, appointments, and vital records (OPD/IPD)."
          image={hospitalImg}
          sourceCode="https://github.com/Akshvt/Doctor-s-Assist"
        />
      </div>
    </div>
  );
};

export default Projects;


