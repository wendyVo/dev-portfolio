import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from "../../assets/images/profile.jpg";

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/wendyVo" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/wendy-vo/",
    },
    { icon: Mail, href: "mailto:uyen199247@gmail.com" },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* MOBILE LAYOUT (centered) */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile Image - Mobile */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    } shadow-2xl`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I&apos;m Wendy, a passionate Full Stack Developer dedicated to
                crafting functional applications with modern technologies and
                thoughtful user experiences.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech stack - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
              >
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  React
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  Node.js
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  SQL
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  C# .NET
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* DESKTOP LAYOUT (2-column) */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl xl:text-5xl font-light leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-xl font-light leading-relaxed`}
              >
                I&apos;m Wendy, a passionate Full Stack Developer dedicated to
                crafting functional applications with modern technologies and
                thoughtful user experiences.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-5"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 text-xs uppercase tracking-widest"
              >
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  React
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  •
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  Node.js
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  •
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  SQL
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  •
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  C# .NET
                </span>
              </motion.div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 xl:w-80 xl:h-80">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`w-full h-full rounded-3xl overflow-hidden border-4 ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-2xl`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-3 rounded-3xl border border-blue-500/20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
