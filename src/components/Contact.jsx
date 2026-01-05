// components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      // alert("Message sent successfully!");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "farhanahmedanik59@gmail.com",
      link: "mailto:farhanahmedanik59@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+880 1720949259",
      link: "tel:+8801720949259",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Dhaka,Gazipur,Chandra",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/farhanahmedanik59/" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/farhanahmedanik59/" },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 bg-cyan-500/10 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 bg-purple-500/10 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-full md:max-w-2xl lg:max-w-3xl mx-auto px-2">Have a project in mind? Let's discuss how we can bring your ideas to life.</p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700/50">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Contact Information</h3>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl hover:bg-gray-800/30 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all flex-shrink-0">
                      <span className="text-cyan-400 text-lg md:text-xl">{info.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm md:text-base mb-1">{info.title}</h4>
                      <p className="text-gray-300 text-xs md:text-sm truncate md:whitespace-normal">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700/50">
                <h4 className="font-semibold text-sm md:text-base mb-4 md:mb-6">Follow Me</h4>
                <div className="flex space-x-3 md:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 md:w-14 md:h-14 bg-gray-800/50 rounded-lg md:rounded-xl flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all group flex-shrink-0"
                    >
                      <span className="text-lg md:text-xl text-gray-400 group-hover:text-cyan-400 transition-colors">{social.icon}</span>
                      <span className="text-xs mt-1 text-gray-500 group-hover:text-gray-300 hidden md:block">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700/50"
            >
              <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Current Availability</h4>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm md:text-base">Available for new projects</span>
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">Typically respond within 24 hours</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700/50"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm md:text-base"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm md:text-base"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none text-sm md:text-base"
                  placeholder="Tell me about yourself..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2.5 md:py-3 px-4 md:px-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold transition-all text-sm md:text-base ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:shadow-cyan-500/25"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
