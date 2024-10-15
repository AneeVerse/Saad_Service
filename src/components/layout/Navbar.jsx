"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

// Sidebar animation variants for smooth transitions
const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-green-700 hover:text-green-800">
            Faad Service
          </Link>

          {/* Menu for larger screens */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-lg text-gray-700 hover:text-green-700 transition">
              About
            </Link>
            <Link href="#services" className="text-lg text-gray-700 hover:text-green-700 transition">
              Services
            </Link>
            <Link href="#testimonials" className="text-lg text-gray-700 hover:text-green-700 transition">
              Testimonials
            </Link>
            <Link href="/contact" className="text-lg text-gray-700 hover:text-green-700 transition">
              Contact
            </Link>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden text-3xl text-green-700" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed inset-0 max-w-[280px] bg-green-700 text-white z-40 p-8"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={sidebarVariants}
      >
        <button className="text-3xl mb-8" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <nav className="flex flex-col space-y-6">
          <Link href="/about" onClick={toggleSidebar} className="text-2xl hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#services" onClick={toggleSidebar} className="text-2xl hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#testimonials" onClick={toggleSidebar} className="text-2xl hover:text-gray-300 transition">
            Testimonials
          </Link>
          <Link href="/contact" onClick={toggleSidebar} className="text-2xl hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>
      </motion.div>

      {/* Overlay for closing sidebar */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
}
