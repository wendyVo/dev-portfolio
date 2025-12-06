import { motion } from "framer-motion";
import { PROJECTS } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="work"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-2">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Building digital experiences that matter
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            A snapshot of the work I&apos;ve done – from full-stack apps to
            handy frontend tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl overflow-hidden border shadow-sm flex flex-col ${
                isDarkMode
                  ? "border-gray-800 bg-gray-900/80"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="aspect-video overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>

                {/* tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] px-2 py-1 rounded-full border ${
                          isDarkMode
                            ? "border-gray-700 text-gray-300 bg-gray-900"
                            : "border-gray-200 text-gray-700 bg-gray-50"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* links */}
                <div className="mt-auto flex items-center gap-3 pt-2">
                  {project.githubURL && (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                    >
                      <FiGithub size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveURL && (
                    <a
                      href={project.liveURL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink size={18} />
                      <span>Live demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
