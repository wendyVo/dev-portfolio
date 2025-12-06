import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-6 text-xs md:text-sm ${
        isDarkMode ? "bg-black text-gray-500" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Wendy Uyen Vo. All rights reserved.</p>
        <p className="text-[11px] md:text-xs">
          Crafted with React, Vite, TailwindCSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
