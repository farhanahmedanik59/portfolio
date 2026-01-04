// components/Hero.jsx
import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaTerminal, FaArrowRight, FaDownload } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiFirebase, SiTypescript } from "react-icons/si";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setTextRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const techIcons = [
    { icon: <FaReact />, label: "React", color: "text-cyan-400", delay: 0.1 },
    { icon: <SiNextdotjs />, label: "Next.js", color: "text-gray-300", delay: 0.2 },
    { icon: <FaNodeJs />, label: "Node.js", color: "text-green-400", delay: 0.3 },
    { icon: <SiExpress />, label: "Express", color: "text-gray-400", delay: 0.4 },
    { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500", delay: 0.5 },
    { icon: <SiFirebase />, label: "Firebase", color: "text-yellow-400", delay: 0.6 },
  ];

  const heroText = "Crafting Digital Solutions".split("");
  const subtitle = "Full-Stack MERN Developer".split("");

  return (
    <section id="home" className="min-h-screen pt-20 md:pt-12 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-2000 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-2000 delay-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        ></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#fff_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move-reverse"></div>
        </div>

        <div className={`absolute top-20 left-10 text-cyan-400/10 text-2xl transition-all duration-1000 delay-1000 ${isVisible ? "opacity-30" : "opacity-0"}`}>{"<Code />"}</div>
        <div className={`absolute bottom-20 right-10 text-purple-400/10 text-2xl transition-all duration-1000 delay-1200 ${isVisible ? "opacity-30" : "opacity-0"}`}>{"{Dev}"}</div>
      </div>

      <div className="container mx-auto  px-4 sm:px-6 relative z-10 ">
        <div className="grid justify-center lg:grid-cols-2   gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-500/30 transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-2">
                <FaCode className="animate-pulse" />
                <span>Full-Stack Developer</span>
              </div>
            </div>

            <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 overflow-hidden">
              <div className="inline-block">
                {heroText.map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-500 ${textRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>

              <div className="relative mt-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 block animate-gradient-flow">Mern Stack</span>
                {/* Underline animation */}
                <div className={`h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 transition-all duration-1000 ${isVisible ? "w-full" : "w-0"}`}></div>
              </div>
            </h1>

            <div className="mb-8 h-8 overflow-hidden">
              <p className={`text-gray-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                I build scalable, high-performance web applications using
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-2">
                {subtitle.map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block text-cyan-400 font-semibold transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 max-w-[95%] md:max-w-full mx-auto justify-center lg:justify-start transition-all duration-700 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="#"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-center overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center">
                  Resume
                  <FaDownload className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>

              <a
                href="#contact"
                className="group relative px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-center overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:border-cyan-300"
              >
                <span className="relative flex items-center justify-center">
                  Get In Touch
                  <span className="ml-2 group-hover:animate-bounce">👋</span>
                </span>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider transition-all duration-500 delay-700">
                <span className={`inline-block transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>Tech Stack</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {techIcons.map((tech, index) => (
                  <div
                    key={tech.label}
                    className={`group relative flex flex-col items-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 transition-all duration-500 hover:scale-110 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${tech.delay}s`,
                      animation: isVisible ? `float 6s ease-in-out infinite ${index * 0.5}s` : "none",
                    }}
                  >
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>

                    <div className={`text-3xl mb-1 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110 ${tech.color}`}>{tech.icon}</div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{tech.label}</span>

                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {tech.label} Expert
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-12 grid grid-cols-3 gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="text-center p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                <div className="text-2xl font-bold text-green-400">3+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative p-4 mb-7 md:p-0 md:mb-0">
            <div
              className={`bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-4 sm:p-6 shadow-2xl transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FaTerminal className="text-cyan-400" />
                  <span className="text-gray-300 text-sm font-medium">terminal — mern_dev</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>

              <div className="font-mono text-sm sm:text-base space-y-3">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <span className="text-cyan-400 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 pr-1">npm init mern-portfolio --expert</span>
                </div>

                <div className="text-gray-400 flex items-center">
                  <div className="flex space-x-1 mr-2">
                    {[1, 2, 3].map((dot) => (
                      <div key={dot} className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: `${dot * 0.2}s` }}></div>
                    ))}
                  </div>
                  Initializing Full-Stack Portfolio...
                </div>

                <div className="mt-4 space-y-2">
                  <div className="text-cyan-300">const developer = {"{"}</div>
                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="text-yellow-300">name:</span>
                      <span className="text-green-300"> "MERN Stack Developer"</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-300">stack:</span>
                      <span className="text-green-300"> ["React", "Next.js", "Node", "MongoDB"]</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-300">skills:</span>
                      <span className="text-green-300"> ["Full-Stack", "API Design"]</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-300">status:</span>
                      <span className="text-green-300 animate-pulse"> "Building digital solutions..."</span>
                    </div>
                  </div>
                  <div className="text-cyan-300">{"}"};</div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400">Server:</span>
                    <span className="text-gray-300 ml-2">Running on port 3000</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-2 flex items-center">
                    <span className="mr-2">🚀</span>
                    Ready to build amazing applications
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute -top-4 -right-0 md:-right-4  bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30 shadow-lg transition-all duration-700 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="text-xs text-cyan-300 font-mono">{"<Code quality='high' />"}</div>
            </div>
            <div
              className={`absolute -bottom-4 -left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30 shadow-lg transition-all duration-700 delay-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="text-xs text-purple-300 font-mono">{"{ performance: 'optimized' }"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: #22d3ee;
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(40px);
          }
        }
        @keyframes grid-move-reverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(40px);
          }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-typing {
          animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .animate-grid-move-reverse {
          animation: grid-move-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
