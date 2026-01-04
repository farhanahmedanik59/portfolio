// components/Skills.jsx
import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaFire,
  FaFigma,
  FaBolt,
  FaCube,
  FaServer,
  FaCode,
  FaPalette,
  FaRocket,
  FaLock,
  FaCloud,
  FaKey,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiJest,
  SiWebpack,
  SiPostman,
  SiVercel,
  SiGithub,
  SiNpm,
  SiNextdotjs,
  SiFirebase,
  SiJsonwebtokens,
  SiApache,
  SiNginx,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainSkills = [
    {
      name: "React.js",
      level: 95,
      icon: <FaReact />,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      description: "Building interactive UIs with hooks, context, and modern patterns",
    },
    {
      name: "Next.js",
      level: 85,
      icon: <SiNextdotjs />,
      color: "bg-gradient-to-r from-gray-800 to-black",
      description: "Server-side rendering, static generation, and API routes",
    },
    {
      name: "Node.js",
      level: 90,
      icon: <FaNodeJs />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      description: "Building scalable server-side applications",
    },
    {
      name: "Express.js",
      level: 88,
      icon: <SiExpress />,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      description: "Creating RESTful APIs and web servers",
    },
    {
      name: "MongoDB",
      level: 85,
      icon: <SiMongodb />,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      description: "NoSQL database design and optimization",
    },
    {
      name: "Firebase",
      level: 80,
      icon: <SiFirebase />,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      description: "Authentication, Firestore, and cloud functions",
    },
    {
      name: "JWT Auth",
      level: 85,
      icon: <SiJsonwebtokens />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: "Secure authentication and authorization",
    },
    {
      name: "TypeScript",
      level: 82,
      icon: <SiTypescript />,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      description: "Type-safe JavaScript development",
    },
  ];

  const frontendTools = [
    { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-indigo-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-cyan-500 to-blue-500" },
    { name: "React Js", icon: <FaReact />, color: "from-blue-500 to-blue-600" },
    { name: "Next Js", icon: <SiNextdotjs />, color: "from-black-300 to-gray-700" },
  ];

  const backendTools = [
    { name: "Express", icon: <SiExpress />, color: "from-gray-600 to-black-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "from-black-500 to-green-500" },
    { name: "Firebase Auth", icon: <FaLock />, color: "from-yellow-500 to-orange-500" },
    { name: "JWT", icon: <FaKey />, color: "from-purple-500 to-indigo-500" },
    { name: "Node Js", icon: <SiNodedotjs />, color: "from-purple-500 to-indigo-500" },
  ];

  const devOpsTools = [
    { name: "Git", icon: <FaGitAlt />, color: "from-orange-500 to-red-500" },
    { name: "GitHub", icon: <SiGithub />, color: "from-gray-800 to-black" },
    { name: "Docker", icon: <FaDocker />, color: "from-blue-400 to-cyan-500" },
  ];

  const otherTools = [
    { name: "Webpack", icon: <SiWebpack />, color: "from-blue-400 to-indigo-500" },

    { name: "Postman", icon: <SiPostman />, color: "from-orange-500 to-red-500" },
    { name: "Figma", icon: <FaFigma />, color: "from-purple-500 to-pink-500" },
  ];

  const skillCategories = [
    { title: "Frontend", tools: frontendTools, icon: <FaCode />, color: "border-cyan-500" },
    { title: "Backend", tools: backendTools, icon: <FaServer />, color: "border-green-500" },
    { title: "DevOps", tools: devOpsTools, icon: <FaRocket />, color: "border-orange-500" },
    { title: "Tools", tools: otherTools, icon: <FaCube />, color: "border-purple-500" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "scale-100" : "scale-0"}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? "scale-100" : "scale-0"}`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30 animate-pulse">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">Comprehensive skill set across the MERN stack, Next.js, Firebase, and modern development tools</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {mainSkills.map((skill, index) => (
            <div key={skill.name} className="group relative overflow-hidden" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color.split(" ")[2]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl p-3 rounded-lg ${skill.color} text-white`}>{skill.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                    </div>
                  </div>
                  <span className="text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-full">{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 150}ms`,
                    }}
                  />
                </div>

                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-gray-400">Beginner</span>
                  <span className="text-gray-400">Intermediate</span>
                  <span className="text-cyan-400 font-medium">Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Ecosystem</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Complete toolkit for building modern, scalable applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-6 border ${category.color}/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-${
                  category.color.split("-")[1]
                }-500/10`}
                style={{
                  transitionDelay: `${catIndex * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl text-white mr-3">{category.icon}</div>
                  <h4 className="text-xl font-bold">{category.title}</h4>
                </div>
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300 group"
                      style={{
                        transitionDelay: `${catIndex * 200 + toolIndex * 50}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                        <div className="text-white">{tool.icon}</div>
                      </div>
                      <span className="font-medium group-hover:text-cyan-300 transition-colors">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {[...frontendTools, ...backendTools, ...devOpsTools, ...otherTools].map((tool, index) => (
              <div
                key={tool.name}
                className="relative group"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.8)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>

                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 group-hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                    <div className="text-xl text-white">{tool.icon}</div>
                  </div>
                  <h4 className="text-sm font-semibold text-center group-hover:text-cyan-300 transition-colors">{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`p-8 bg-gradient-to-r from-gray-900/40 to-black/40 rounded-3xl border border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } animate-float`}
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-2 flex items-center justify-center">
                <FaRocket className="mr-3 text-cyan-400 animate-bounce" />
                Complete Development Stack
                <FaLock className="ml-3 text-green-400" />
              </h4>
              <p className="text-gray-400">End-to-end development with modern technologies</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="transform transition-all duration-500 hover:scale-105">
                <h5 className="font-semibold text-cyan-400 mb-4 flex items-center text-lg">
                  <FaCode className="mr-3 animate-pulse" /> Frontend Stack
                </h5>
                <div className="space-y-2">
                  {["React.js/Next.js", "TypeScript", "Tailwind CSS", "Redux State", "Responsive UI"].map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                      style={{
                        transitionDelay: `${idx * 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 animate-ping"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="transform transition-all duration-500 hover:scale-105 delay-100">
                <h5 className="font-semibold text-green-400 mb-4 flex items-center text-lg">
                  <FaServer className="mr-3 animate-pulse" /> Backend Stack
                </h5>
                <div className="space-y-2">
                  {["Node.js/Express", "MongoDB", "Firebase", "JWT Auth", "REST APIs"].map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                      style={{
                        transitionDelay: `${idx * 100 + 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="transform transition-all duration-500 hover:scale-105 delay-200">
                <h5 className="font-semibold text-purple-400 mb-4 flex items-center text-lg">
                  <FaRocket className="mr-3 animate-pulse" /> DevOps & Tools
                </h5>
                <div className="space-y-2">
                  {["Git/GitHub", "Docker", "AWS", "CI/CD", "Testing"].map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                      style={{
                        transitionDelay: `${idx * 100 + 200}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-ping"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 left-10 opacity-10 animate-float" style={{ animationDelay: "0s" }}>
          <FaReact className="text-6xl text-cyan-400" />
        </div>
        <div className="absolute top-1/4 right-20 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
          <SiNextdotjs className="text-6xl text-gray-400" />
        </div>
        <div className="absolute bottom-1/3 left-20 opacity-10 animate-float" style={{ animationDelay: "4s" }}>
          <FaNodeJs className="text-6xl text-green-400" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-10 animate-float" style={{ animationDelay: "6s" }}>
          <SiMongodb className="text-6xl text-green-500" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
