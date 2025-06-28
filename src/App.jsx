import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import KnowMore from "./components/KnowMore";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1117] to-[#1e2230] text-white scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />  
      <KnowMore />
      <Footer/>
    </div>
  );
};

export default App;


