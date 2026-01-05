// components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaLayerGroup, FaCode, FaTerminal, FaHeart, FaBrain, FaGamepad } from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const features = [
    {
      icon: <FaLayerGroup />,
      title: "Full-Stack Development",
      description: "End-to-end solutions from database design to UI/UX implementation",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability and efficiency",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Architecture",
      description: "Implementing best practices for security and data protection",
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 relative">
      <div className="container px-4 sm:px-6 max-w-full md:max-w-[97%] lg:max-w-[85%] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            About Farhan Ahmed Anik
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Worlds</span> with Code & Passion
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-full md:max-w-2xl lg:max-w-3xl mx-auto px-2">
            A passionate MERN stack developer who believes great code is like poetry—it should be beautiful, functional, and tell a compelling story.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Hello, I'm <span className="text-cyan-400">Farhan</span> 👋
            </h3>
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <p className="text-gray-300 text-sm md:text-base">
                My programming journey began in <span className="text-cyan-300 font-semibold">2023</span> when I wrote my first "Hello World!" program. What started as curiosity quickly turned into a
                passion that keeps me up at night (in a good way!). There's something magical about turning ideas into functional, beautiful applications that real people use.
              </p>

              <p className="text-gray-300 text-sm md:text-base">
                I absolutely <span className="text-purple-300 font-semibold">love building modern web applications</span> with the MERN stack. There's a special thrill in creating something from
                scratch—watching a project evolve from concept to fully-functional application. I'm particularly passionate about crafting intuitive user interfaces that not only look great but feel
                effortless to use.
              </p>

              <div className="bg-gray-800/30 p-4 md:p-5 rounded-xl border border-cyan-500/20 max-w-full">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <FaShieldAlt className="text-cyan-400 text-lg md:text-xl" />
                  <h4 className="text-lg md:text-xl font-semibold text-cyan-300">Beyond the Code</h4>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  When I'm not immersed in React components or debugging Node.js, you'll find me diving into the fascinating world of
                  <span className="text-green-300 font-semibold"> cybersecurity</span>. I enjoy exploring ethical hacking, network security, and learning how to build applications that are not just
                  functional, but fortified against threats. It's like being a digital architect and security guard at the same time!
                </p>
              </div>

              <p className="text-gray-300 text-sm md:text-base">
                I believe the best developers are curious by nature. That's why I'm always exploring new technologies, contributing to open-source projects, and learning from the amazing developer
                community. My approach? <span className="italic">"Build it, break it, learn from it, make it better."</span>
              </p>

              <div className="flex flex-wrap gap-2 md:gap-4 pt-3 md:pt-4">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-300 bg-gray-800/50 px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg">
                  <FaHeart className="text-red-400 text-sm md:text-base" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-300 bg-gray-800/50 px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg">
                  <FaBrain className="text-yellow-400 text-sm md:text-base" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-300 bg-gray-800/50 px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg">
                  <FaGamepad className="text-green-400 text-sm md:text-base" />
                  <span>Tech Enthusiast</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-8 md:mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                >
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="mb-6 md:mb-8 lg:mb-10 p-4 md:p-5 lg:p-6 bg-gradient-to-br from-gray-800/40 to-cyan-900/20 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <FaTerminal className="text-cyan-400 text-xl md:text-2xl" />
                <h4 className="text-lg md:text-xl font-semibold">My Philosophy</h4>
              </div>
              <p className="text-gray-300 italic text-sm md:text-base">
                "Great software isn't just about writing code—it's about creating experiences, solving real problems, and building things that make people's lives better, one line at a time."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-4 md:p-5 lg:p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-2xl md:text-3xl text-cyan-400 mb-3 md:mb-4 group-hover:text-cyan-300 transition-colors">{feature.icon}</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h4>
                  <p className="text-gray-300 text-xs md:text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 md:mt-8 lg:mt-10 p-4 md:p-5 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl border border-purple-500/20"
            >
              <p className="text-gray-300 text-center text-sm md:text-base">
                <span className="font-semibold text-cyan-300">Fun fact:</span> I approach every project with the same enthusiasm I have for cybersecurity puzzles—looking for elegant solutions while
                anticipating potential challenges before they arise!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
