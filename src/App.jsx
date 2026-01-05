import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide welcome after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* CSS Animated Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Moving gradient circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-pulse blur-3xl animation-delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full animate-pulse blur-3xl animation-delay-2000"></div>

            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {/* Animated Logo/Text */}
            <div className="text-center">
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-blue-500/30 animate-spin-slow"></div>

                {/* Middle ring */}
                <div className="absolute -inset-2 rounded-full border border-purple-500/20 animate-spin-slow-reverse"></div>

                {/* Inner circle with glow */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 flex items-center justify-center animate-pulse">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">
                    <span className="text-2xl font-bold">P</span>
                  </div>
                </div>
              </div>

              {/* Text animation */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">Welcome</h1>

              <p className="text-xl text-gray-300 animate-fade-in">Developer & Creative Professional</p>

              {/* Loading bar */}
              <div className="w-64 h-1 bg-gray-800 rounded-full mt-8 mx-auto overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-loading-bar"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Content */}
      {!showWelcome && (
        <>
          <Navigation activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
