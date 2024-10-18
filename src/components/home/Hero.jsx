"use client";
// components/Hero.js
import { FaPlay, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAngleRight, FaAngleLeft, FaGlobe, FaClock } from "react-icons/fa6";
import { useState } from "react";
import Button from "../common/Button";

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
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.section
      className="relative bg-gradient-to-r from-[#f5e0b8] to-white py-16 px-6 md:px-12 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FaGlobe className="absolute top-20 left-10 w-[100px] h-[100px] text-[#D4AF37] opacity-10" />
        <FaClock className="absolute top-1/2 right-20 w-[150px] h-[150px] text-[#D4AF37] opacity-10" />
        <FaShieldAlt className="absolute bottom-10 left-1/3 w-[120px] h-[120px] text-[#D4AF37] opacity-10" />
      </div>

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
            <Button text="Get Started" type="secondary" onClick={() => alert("Get Started")} />
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

        {/* Video Section */}
        <motion.div
          className="relative z-30 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replace the embedded YouTube video with a local video */}
          <video
            className="w-full h-64 md:h-80 lg:h-96"
            controls
            poster="/images/home/pen-doc.webp" // Add a placeholder image for the video
            onPlay={handlePlay}
          >
            <source src="/images/home/hero-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional Play Button Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 cursor-pointer"
              onClick={() => document.querySelector("video").play()}
            >
              <FaPlay className="text-white text-5xl opacity-80" />
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
