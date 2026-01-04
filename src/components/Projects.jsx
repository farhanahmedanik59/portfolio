// components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import scholarStream from "../assets/scholarstream.png";
import zapshift from "/zapshift.png";
import artify from "/artify.png";
import { Link } from "react-router";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ScholarShip Management System",
      description: "Developed a scholarship management web application using React and Firebase, featuring JWT-based authentication and role-based authorization.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
      category: "fullstack",
      github: "https://github.com/farhanahmedanik59/scholarLink-client",
      live: "https://scholarlink-9240a.web.app/",
      image: scholarStream,
    },
    {
      id: 2,
      title: "Parcel Management System",
      description: "Developed a complete parcel delivery platform allowing users to book parcels, riders to accept and deliver them, and admins to manage operations efficiently.",
      tech: ["React", "Node.js", "Express", "Stripe", "MongoDB", "JWT"],
      category: "fullstack",
      github: "https://github.com/farhanahmedanik59/zapshift-parcel-management-client",
      live: "https://zap-shift-524e5.web.app/",
      image: zapshift,
    },
    {
      id: 3,
      title: "Artify",
      description: "Art sharing platform allowing users to publish their imagination",
      tech: ["React", "Firebase", "Jwt", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/farhanahmedanik59/artify-client",
      live: "https://assignment10-297ce.web.app/",
      image: artify,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 rounded-full text-sm font-semibold mb-4">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">A showcase of my recent work using the MERN stack and modern web technologies</p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.id ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all"
              >
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={project.image} className="object-contain mb-4 md:mb-0 md:mt-11 ml-2" alt="" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.github} className="w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      <FaGithub />
                    </a>
                    <a href={project.live} className="w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800/50 text-cyan-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.live} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                      View Project
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                    <Link to={`/${project.id}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                      View Details
                      <FaExternalLinkAlt className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <a href="#" className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
            View All Projects
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
