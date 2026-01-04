// components/ProjectDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import scholarStream from "../assets/scholarstream.png";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaLock,
  FaStripe,
  FaServer,
  FaTools,
  FaExclamationTriangle,
  FaRocket,
  FaClock,
  FaUsers,
  FaCode,
  FaChartBar,
  FaUserCheck,
  FaArrowRight,
  FaLayerGroup,
  FaLightbulb,
  FaShieldAlt,
  FaBolt,
  FaPalette,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaRibbon,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const TechIcon = ({ tech }) => {
  const icons = {
    React: <FaReact className="text-blue-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    MongoDB: <FaDatabase className="text-green-600" />,
    Express: <FaServer className="text-gray-300" />,
    Firebase: <FaFire className="text-yellow-500" />,
    JWT: <FaLock className="text-red-400" />,
    Stripe: <FaStripe className="text-purple-500" />,
    "Socket.io": <FaBolt className="text-orange-500" />,
    "Tailwind CSS": <FaPalette className="text-cyan-400" />,
    Cloudinary: <FaCloudUploadAlt className="text-green-400" />,
    "Framer Motion": <FaBolt className="text-pink-500" />,
  };
  return icons[tech] || <FaTools className="text-gray-400" />;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full" />
      </div>
    );
  }

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Project Not Found</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold flex items-center gap-2"
          >
            <FaArrowLeft />
            Go Back to Projects
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="relative overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 pt-8 pb-20 relative z-10">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-between mb-12">
              <motion.button
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/#projects")}
                className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Portfolio</span>
              </motion.button>

              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300">
                {project.category === "fullstack" ? "Full Stack Project" : "Frontend Project"}
              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full text-sm font-semibold text-cyan-400 mb-6"
                >
                  <FaRibbon />
                  Featured Project
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {project.title.split(" ").map((word, i) => (
                    <motion.span key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.1 }} className="inline-block mr-2">
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl text-gray-300 mb-8">
                  {project.description}
                </motion.p>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold flex items-center gap-3 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                    View Live Project
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group px-8 py-4 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-700/50 hover:text-white hover:border-cyan-500/30 transition-all"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform" />
                    GitHub Repository
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden flex bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(45deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                        "linear-gradient(45deg, #8b5cf6 0%, #06b6d4 50%, #3b82f6 100%)",
                        "linear-gradient(45deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                      ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute inset-0 opacity-10"
                  />

                  <img src={project.image} className=" rounded-2xl " alt="" />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 left-4 w-12 h-12 bg-cyan-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center"
                  >
                    <FaReact className="text-cyan-400 text-xl" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-purple-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center"
                  >
                    <FaDatabase className="text-purple-400 text-xl" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pb-20">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaLayerGroup className="text-cyan-400 text-2xl" />
              <h2 className="text-3xl font-bold">Technology Stack</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.techStack &&
                Object.entries(project.techStack).map(([category, technologies], idx) => (
                  <motion.div
                    key={category}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-cyan-300 capitalize">{category.replace(/([A-Z])/g, " $1").trim()}</h3>
                    <div className="space-y-3">
                      {technologies.map((tech) => (
                        <div key={tech} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                          <span className="text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/30 to-cyan-900/10 p-8 rounded-2xl border border-cyan-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaLightbulb className="text-yellow-400 text-2xl" />
                <h3 className="text-2xl font-bold">Key Features</h3>
              </div>

              <div className="space-y-4">
                {project.features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-6 h-6 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <FiChevronRight className="text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/30 to-red-900/10 p-8 rounded-2xl border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaExclamationTriangle className="text-red-400 text-2xl" />
                <h3 className="text-2xl font-bold">Challenges Overcome</h3>
              </div>

              <div className="space-y-4">
                {project.challenges?.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-gray-800/30 rounded-xl border border-red-500/10 hover:border-red-500/20 transition-all"
                  >
                    <span className="text-gray-300">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Stats */}
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6">Project Statistics</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <FaClock className="text-cyan-400 text-xl mb-2" />
                  <div className="text-sm text-gray-400">Development Time</div>
                  <div className="text-xl font-bold text-white">{project.developmentTime}</div>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <FaUsers className="text-purple-400 text-xl mb-2" />
                  <div className="text-sm text-gray-400">Collaborators</div>
                  <div className="text-xl font-bold text-white">{project.collaborators}</div>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <FaCode className="text-green-400 text-xl mb-2" />
                  <div className="text-sm text-gray-400">Lines of Code</div>
                  <div className="text-xl font-bold text-white">{project.linesOfCode}</div>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <FaUserCheck className="text-yellow-400 text-xl mb-2" />
                  <div className="text-sm text-gray-400">Active Users</div>
                  <div className="text-xl font-bold text-white">{project.users}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/30 to-purple-900/10 p-8 rounded-2xl border border-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaRocket className="text-purple-400 text-2xl" />
                <h3 className="text-2xl font-bold">Future Plans</h3>
              </div>

              <div className="space-y-4">
                {project.improvements?.map((improvement, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{improvement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {otherProjects.length > 0 && (
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Explore More Projects</h2>
                <motion.button whileHover={{ x: 5 }} onClick={() => navigate("/#projects")} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                  View All Projects
                  <FaArrowRight />
                </motion.button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => navigate(`/project/${p.id}`)}
                    className="group cursor-pointer bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                      <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} className="text-gray-400 group-hover:text-cyan-400">
                        <FaArrowRight />
                      </motion.div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{p.shortDescription}</p>

                    <div className="flex gap-2 flex-wrap">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-gray-800/50 text-cyan-300 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
