import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Powered by OpenAI
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-gray-800 mb-6">
            Enhance Your <span className="text-indigo-600">Resume</span> with
            AI-Powered Insights
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and get real-time suggestions to optimize each
            bullet point with smart rewrites and professional tips.
          </p>
          <button>
            <Link
              to="/editor"
              className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
              Get Started for Free
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
