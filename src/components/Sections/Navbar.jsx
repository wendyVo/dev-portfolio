import React from 'react'
import { useState } from 'react';
import {
    motion, useScroll, AnimatePresence,
} from "framer-motion"

import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const {isDarkMode, toggleDarkMode} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false)
        }
    };
  return (
    <motion.nav 
    style={{opacity: 1}}
    className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80": "bg-gray-50/80"} backdrop-blur-md border-b ${
            isDarkMode ? "border-gray-800": "border-gray-200"
        }`}
}

export default Navbar