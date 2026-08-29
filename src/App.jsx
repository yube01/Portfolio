import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Particles from "./components/home/Particles";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-['Inter'] cursor-default relative">
      <Particles />
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-8">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
