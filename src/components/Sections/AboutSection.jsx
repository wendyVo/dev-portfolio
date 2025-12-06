import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ABOUT_BANNER from "../../assets/images/aboutmeBanner.png";

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="about"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg font-medium uppercase tracking-[0.3em] text-indigo-500 mb-2">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              A developer who cares about the details
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-3xl overflow-hidden border shadow-sm mb-6"
          >
            <img
              src={ABOUT_BANNER}
              alt="About Wendy Uyen Vo"
              className="w-full h-56 md:h-72 object-cover"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-8 md:grid-cols-[2fr,1fr]"
          >
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600">
              <p>
                I&apos;m <span className="font-semibold">Wendy Uyen Vo</span>, a
                web developer with a background in both industry and study. I
                enjoy building digital experiences that feel intentional,
                minimal, and accessible.
              </p>
              <p>
                My journey started with bootcamps and self-learning, and
                continues now through my Bachelor of Computer Science. Along the
                way I&apos;ve built full-stack apps, dashboards, and internal
                tools that solve real problems for real people.
              </p>
              <p>
                I love working across the stack, but I have a soft spot for
                well-crafted UI – smooth interactions, consistent spacing, and
                small details that make products feel polished.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <h3 className="font-semibold text-lg mb-2">Quick snapshot</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Based in Melbourne, Australia</li>
                <li>• Background in both web dev and tech support roles</li>
                <li>• Enjoys React, TailwindCSS, and modern tooling</li>
                <li>• Always curious about how to make UX smoother</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
