import { motion } from "framer-motion";
import { SKILLS_CATEGORY } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="skills"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
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
          <p className="text-lg font-medium uppercase tracking-[0.3em] text-indigo-500 mb-2">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            The toolkit I bring to your team
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            A blend of frontend craft, backend logic, and a lot of curiosity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SKILLS_CATEGORY.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`rounded-2xl p-6 border ${
                  isDarkMode
                    ? "border-gray-800 bg-gray-900/60"
                    : "border-gray-200 bg-gray-50"
                } shadow-sm backdrop-blur`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-xl bg-blue-500/10">
                    <Icon className="text-indigo-500" size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                    {category.description && (
                      <p className="text-xs text-gray-400 mt-1">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-800/40 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
