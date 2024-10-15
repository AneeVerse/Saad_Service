"use client"
// components/Hero.js
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="bg-gradient-to-r from-green-50 to-white py-16 px-6 md:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Leading Solution for Attestation
          </h1>
          <p className="text-lg text-gray-600">
            We empower professionals to build customized solutions quickly
            without the need for code.
          </p>
          <div className="flex items-center space-x-4">
            <motion.button
              className="bg-green-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="flex items-center space-x-2 text-green-600 hover:underline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay className="text-lg" />
              <span>Watch Video</span>
            </motion.button>
          </div>
        </div>

        {/* Embedded Video */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-64 md:h-80 lg:h-96"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}
