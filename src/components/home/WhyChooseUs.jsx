"use client";
import { FaGlobe, FaClock, FaUserShield, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Typography from "../common/Typography"; // Importing the Typography component

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Trusted by 200+ Countries",
      description: "We provide globally accepted document attestation and legalization services.",
      icon: <FaGlobe className="text-[#D4AF37] text-4xl group-hover:text-white transition-all duration-300" />,
    },
    {
      title: "Fast and Reliable",
      description: "Our team ensures fast turnaround times without compromising accuracy.",
      icon: <FaClock className="text-[#D4AF37] text-4xl group-hover:text-white transition-all duration-300" />,
    },
    {
      title: "Expert Team",
      description: "Our team consists of legal experts certified by multiple embassies and consulates.",
      icon: <FaUserShield className="text-[#D4AF37] text-4xl group-hover:text-white transition-all duration-300" />,
    },
    {
      title: "Secure and Hassle-Free",
      description: "Your documents are in safe hands with our secure handling process.",
      icon: <FaShieldAlt className="text-[#D4AF37] text-4xl group-hover:text-white transition-all duration-300" />,
    },
  ];

  return (
    <motion.section
      className="py-12 px-6 bg-gradient-to-r from-gray-50 to-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Using the Typography component for the h2 title */}
        <Typography variant="h2" className="mb-8">
          Why Choose Us
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gradient-to-r from-[#D4AF37] to-[#b89730] hover:text-white transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
