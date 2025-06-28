import React from "react";

const ProjectCard = ({ title, main, image, sourceCode }) => {
  return (
    <div className="bg-[#1b1e2e] w-full md:w-[45%] rounded-2xl overflow-hidden shadow-md hover:shadow-orange-500 transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl text-amber-400 font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 leading-tight">{main}</p>

        <div className="mt-4 text-right">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-3xl transition-all duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



