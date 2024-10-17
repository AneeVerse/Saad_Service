"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className=" py-12 px-6">
    <div className="relative bg-gradient-to-br from-[#D4AF37] via-[#b89730] to-[#3a3a3a] rounded-3xl overflow-hidden max-w-7xl mx-auto">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/stamp-1.webp" // Replace with your background image path
          alt="Get Started Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      {/* Call to Action Content */}
      <motion.section
        className="relative z-10 text-center p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Contact us today to begin your document attestation, translation, or legalization journey. Our expert team is ready to assist.
        </p>
        <button className="bg-white text-[#D4AF37] py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </motion.section>
    </div>
    </div>
  );
};

export default GetStarted;
