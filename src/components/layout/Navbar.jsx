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

// Navigation links array
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "#services", dropdown: true, subLinks: [
    { name: "Notary Services", path: "/services/notary" },
    { name: "MEA Services", path: "/services/mea" },
    { name: "Embassy Services", path: "/services/embassy" },
  ]},
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className=" fixed w-full border-b-[1px] border-gray-200 bg-white left-0 z-40 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  h-[90px] justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-green-700 hover:text-green-800">
            Faad Service
          </Link>

          {/* Menu for larger screens */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link href={link.path} className="text-lg text-gray-700 hover:text-green-700 transition">
                  {link.name}
                </Link>
                {/* Dropdown for Services */}
                {link.dropdown && (
                  <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg py-4 space-y-2 w-40">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.path}
                        className="px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
          {navLinks.map((link, index) => (
            <div key={index}>
              <Link href={link.path} onClick={toggleSidebar} className="text-2xl hover:text-gray-300 transition">
                {link.name}
              </Link>
              {/* Sub-links for Services */}
              {link.dropdown && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subLink.path}
                      onClick={toggleSidebar}
                      className="hover:text-gray-300 transition"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
