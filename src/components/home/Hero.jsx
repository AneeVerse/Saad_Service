"use client";
// components/Hero.js
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import Button from "../common/Button";
import Typography from "../common/Typography";

// Array of text content
const textArray = [
  {
    heading: `Leading Solution for Attestation`,
    pra: `We empower professionals to build customized solutions quickly
            without the need for code.`,
  },
  {
    heading: `Leading Solution for Attestation 2`,
    pra: `Empower your business with fast and reliable attestation services,
            ensuring seamless global operations.`,
  },
  {
    heading: `Leading Solution for Attestation 3`,
    pra: `Discover professional solutions for all your documentation needs,
            trusted by thousands worldwide.`,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next text change
  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
    );

  // Handle previous text change
  const handlePrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? textArray.length - 1 : prevIndex - 1
    );

  return (
    <motion.section
      className="relative bg-gradient-to-r from-[#f5e0b8] to-white py-16 px-6 md:px-12 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* SVG Background Decorations */}
      <motion.div
        className="absolute -top-20 -left-16 w-72 h-72 bg-[#D4AF37] rounded-full opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-0 w-96 h-96 bg-[#f9e8c2] rounded-full opacity-40"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    
      {/* Content Section */}
      <div className="grid md:grid-cols-2 max-w-[1280px] mx-auto gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-gray-800 leading-tight"
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {textArray[currentIndex].heading}
          </motion.h1>
         
          <motion.p
            className="text-lg text-gray-600"
            key={`${currentIndex}-para`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {textArray[currentIndex].pra}
          </motion.p>
          <div className="flex items-center gap-4">
            <Button text="Get Started" type="secondary" onClick={() => alert("hello")} />
            {/* Arrows for Text Navigation */}
            <div className="flex gap-3">
              <FaAngleLeft
                className="text-[#D4AF37] cursor-pointer border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
                onClick={handlePrev}
              />
              <FaAngleRight
                className="text-[#D4AF37] cursor-pointer border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
                onClick={handleNext}
              />
            </div>
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
