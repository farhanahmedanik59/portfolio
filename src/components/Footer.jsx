// components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-800/50 bg-gradient-to-b from-gray-900/50 to-black">
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25 z-40"
      >
        <FaArrowUp />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center space-x-2">
            <FaCode className="text-2xl text-cyan-400" />
            <span className="text-xl font-bold">
              MERN<span className="text-cyan-400">.</span>DEV
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center md:text-left">
            <p className="text-gray-400">© {new Date().getFullYear()} MERN Stack Developer Portfolio</p>
            <p className="text-gray-500 text-sm mt-2">
              Built with <FaHeart className="inline text-red-500" /> using React & Tailwind CSS
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800/50 my-8"></div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="text-gray-500 text-sm">Designed & developed by MERN Stack Developer • Open to new opportunities</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
