"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle, FaTasks, FaQuestionCircle, FaEnvelope, FaFileAlt, FaUniversity } from "react-icons/fa";
import { FaGlobe, FaFileSignature, FaLanguage, FaPassport } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import useRouter

// Sidebar animation variants for smooth transitions
const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

// Navigation links array with dropdown for Services
const navLinks = [
  { name: "About", path: "/about", icon: <FaUserCircle /> },  
  { name: "Documents", path: "/documents", icon: <FaFileAlt /> },  // New Addition

  {
    name: "Services",
    path: "/services",
    icon: <FaTasks />,
    dropdown: true,
    subLinks: [
      { name: "Document Attestation", path: "/services/attestation", icon: <FaFileSignature /> },
      { name: "Legalization Services", path: "/services/legalization", icon: <FaFileAlt /> },
      { name: "Notary Services", path: "/services/notary", icon: <FaUniversity /> },
      { name: "Translation Services", path: "/services/translation", icon: <FaLanguage /> },
      { name: "MEA Attestation", path: "/services/mea-apostille", icon: <FaGlobe /> },
      { name: "Visa Assistance", path: "/services/visa-assistance", icon: <FaPassport /> },
      { name: "Embassy Services", path: "/services/embassy-services", icon: <FaFileSignature /> },
    ],
  },
  { name: "FAQ", path: "/faq", icon: <FaQuestionCircle /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Use useRouter to get current route

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <header className="fixed w-full border-b-[1px] border-gray-200 bg-white left-0 z-40 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[90px] justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl flex gap-2 items-center font-bold text-[#d7b368]">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/logo-saad.png"
                alt="Saad Service Logo"
                layout="fill"
                objectFit="contain" // Ensures the image scales well without distortion
                priority={true} // Improves performance by loading the logo quickly
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl">{"Saad Service".toUpperCase()}</span>
          </Link>

          {/* Menu for larger screens */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  href={link.path}
                  className={`text-lg font-semibold ${
                    isActive(link.path) ? "text-[#D4AF37]" : "text-gray-700"
                  } hover:text-[#D4AF37] transition`}
                >
                  {link.name}
                </Link>
                {/* Dropdown for Services */}
                {link.dropdown && (
                  <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg py-4 space-y-2">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.path}
                        className={`px-4 py-2 min-w-max ${
                          isActive(subLink.path) ? "text-[#D4AF37]" : "text-gray-700"
                        } hover:bg-gray-100 transition`}
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
          <button className="md:hidden text-3xl text-gray-700" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed inset-0 max-w-[280px] bg-white text-gray-800 z-40 p-8 shadow-lg"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={sidebarVariants}
      >
        <div className="flex justify-between items-center mb-6">
          {/* Logo */}
          <div className="text-3xl flex gap-2 items-center font-bold text-[#d7b368]">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo-saad.png"
                alt="Saad Service Logo"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
            <span className="text-lg sm:text-xl">{"Saad Service".toUpperCase()}</span>
          </div>
          {/* Close Button */}
          <button className="text-3xl text-gray-700" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <div key={index} className="border-b border-gray-200 pb-2">
              <Link
                href={link.path}
                onClick={toggleSidebar}
                className={`text-2xl flex items-center gap-3 ${
                  isActive(link.path) ? "text-[#D4AF37]" : "text-gray-700"
                } hover:text-[#D4AF37] transition`}
              >
                {link.icon} {link.name}
              </Link>
              {/* Sub-links for Services */}
              {link.dropdown && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subLink.path}
                      onClick={toggleSidebar}
                      className={`flex items-center gap-3 ${
                        isActive(subLink.path) ? "text-[#D4AF37]" : "text-gray-700"
                      } hover:text-[#D4AF37] transition`}
                    >
                      {subLink.icon} {subLink.name}
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
