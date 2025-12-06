import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO } from "../../utils/data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail } from "lucide-react";

const ContactSection = () => {
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
      id="contact"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg font-medium uppercase tracking-[0.3em] text-indigo-500 mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
              Whether it&apos;s an internship, grad role, or a collaboration,
              I&apos;m always happy to chat about ideas and opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`grid gap-8 md:grid-cols-2 rounded-3xl border p-6 md:p-8 ${
              isDarkMode
                ? "border-gray-800 bg-gray-900/80"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* left: contact details */}
            <div className="space-y-4 text-sm">
              <h3 className="font-semibold text-lg mb-2">Details</h3>
              <ul className="space-y-3">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-1 p-1.5 rounded-lg bg-blue-500/10">
                        <Icon size={18} className="text-indigo-500" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-4 space-y-2">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Social
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/wendyVo"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wendy-vo/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-full border border-indigo-500/60 hover:bg-indigo-500/10 transition"
                  >
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* right: simple mailto form */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">
                Drop me a quick message
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(
                    formData.get("subject") || "Portfolio enquiry"
                  );
                  const body = encodeURIComponent(
                    `Hi Wendy,${formData.get("message")} From: ${formData.get(
                      "name"
                    )} <${formData.get("email") || "no-email"}>`
                  );
                  window.location.href = `mailto:uyen199247@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="space-y-4 text-sm"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-xs uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-xs uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    name="subject"
                    className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Internship opportunity, collaboration, etc."
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm font-medium transition"
                >
                  <Mail size={16} />
                  <span>Send message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
