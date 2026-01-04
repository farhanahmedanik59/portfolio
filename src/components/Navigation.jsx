// components/Navigation.jsx
import React, { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";

const Navigation = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/farhanahmedanik59/", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/farhanahmedanik59/", label: "LinkedIn" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 py-3 shadow-2xl shadow-black/30" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900 p-2 rounded-xl border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300">
                  <FaCode className="text-2xl text-cyan-400 animate-pulse-slow" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Farhan Ahmed<span className="text-cyan-400 ml-1"></span>Anik
                </span>
                <span className="text-xs text-gray-400 -mt-1">Full Stack Developer</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a key={item.id} href={`#${item.id}`} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className={`text-sm font-medium transition-all duration-300 ${activeSection === item.id ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}>{item.label}</span>

                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-300 ${
                      activeSection === item.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></div>

                  {activeSection === item.id && <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} className="relative group" aria-label={social.label}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>

              <button onClick={toggleDarkMode} className="relative group" aria-label="Toggle dark mode">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                  {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-cyan-400" />}
                </div>
              </button>

              <a href="/#contact" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105 flex items-center space-x-2">
                  <FcContacts className="group-hover:animate-bounce" />
                  <span>Contact Me</span>
                </div>
              </a>
            </div>

            <button className="lg:hidden relative group" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300">
                <div className={`transition-all duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>{isMenuOpen ? <FaTimes /> : <FaBars />}</div>
              </div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full animate-progress-bar"></div>
      </nav>

      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMenuOpen(false)}></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-gray-900 to-black border-l border-gray-800 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center space-x-3 mt-14">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="flex-1 group">
                  <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                    <div className="text-lg text-gray-300 group-hover:text-cyan-400 transition-colors">{social.icon}</div>
                    <div className="text-xs text-gray-400 mt-1">{social.label}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="group relative block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-l-4 border-cyan-400" : "bg-gray-800/30 hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? "bg-cyan-400 scale-125" : "bg-gray-600 group-hover:bg-cyan-400"}`}></div>
                      <span className={`font-medium transition-colors duration-300 ${activeSection === item.id ? "text-cyan-400" : "text-gray-300 group-hover:text-white"}`}>{item.label}</span>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded transition-all duration-300 ${
                        activeSection === item.id ? "bg-cyan-400/20 text-cyan-400" : "bg-gray-700/50 text-gray-400 group-hover:bg-cyan-400/20 group-hover:text-cyan-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="text-lg text-gray-300 group-hover:text-yellow-400 transition-colors">{isDarkMode ? <FaSun /> : <FaMoon />}</div>
                  <div className="text-xs text-gray-400 mt-2">Theme</div>
                </button>

                <a
                  href="/resume.pdf"
                  className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 flex flex-col items-center justify-center hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 group"
                >
                  <div className="text-lg text-cyan-400 group-hover:scale-110 transition-transform">
                    <FaDownload />
                  </div>
                  <div className="text-xs text-cyan-400 mt-2">Resume</div>
                </a>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <div className="text-sm text-gray-400 mb-2">Get in touch</div>
                <div className="text-sm text-cyan-400">hello@merndev.com</div>
                <div className="text-xs text-gray-500 mt-1">Available for projects</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800 bg-gradient-to-t from-gray-900 to-transparent">
            <div className="text-center text-xs text-gray-500">© {new Date().getFullYear()} MERN.DEV Portfolio</div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-1 bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-full px-3 py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? "bg-cyan-400 w-4" : "bg-gray-600 hover:bg-gray-400"}`}
              aria-label={`Go to ${item.label}`}
            ></a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-progress-bar {
          animation: progress-bar 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
