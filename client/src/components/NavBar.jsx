import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <motion.nav
      className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white sticky top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        AI Resume Agent
      </Link>
      <div className="space-x-6">
        <a
          href="https://github.com/Sakshamyadav6/ai-resume-agent"
          target="_blank"
          className="text-gray-600 hover:text-indigo-500"
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
