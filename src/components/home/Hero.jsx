"use client";
// components/Hero.js
import { FaPlay, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAngleRight, FaAngleLeft, FaGlobe, FaClock } from "react-icons/fa6";
import { useState, useRef } from "react";
import Button from "../common/Button";

// Array of text content
const textArray = [
  {
    heading: `Your Trusted Attestation Partner`,
    pra: `Professional, fast, and reliable document attestation services tailored for your needs.`,
  },
  {
    heading: `Global Attestation Solutions`,
    pra: `Our services ensure your documents are authenticated and recognized globally, seamlessly.`,
  },
  {
    heading: `Secure, Seamless, and Swift`,
    pra: `Simplify your legal processes with our secure and trusted attestation services, recognized worldwide.`,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

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
      className="relative h-[calc(100vh-90px)] overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/home/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-[1280px] mx-auto">
        {/* Text Content */}
        <div className="space-y-6 max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {textArray[currentIndex].heading}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200"
            key={`${currentIndex}-para`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {textArray[currentIndex].pra}
          </motion.p>

          <div className="flex items-center gap-4">
            <Button
              text="Get Started"
              type="primary"
              link="/services"
              className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#b89730] transition duration-300"
            />
            {/* Arrows for Text Navigation */}
            <div className="flex gap-3">
              <FaAngleLeft
                className="text-white cursor-pointer border border-white hover:bg-[#D4AF37] hover:text-white w-10 h-10 p-2 rounded-full transition-all"
                onClick={handlePrev}
              />
              <FaAngleRight
                className="text-white cursor-pointer border border-white hover:bg-[#D4AF37] hover:text-white w-10 h-10 p-2 rounded-full transition-all"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
