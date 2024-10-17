"use client"
import { motion } from "framer-motion";

export default function EmbassyServices() {
  return (
    <motion.section
      className="py-12 px-6 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Embassy & GAD Services</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our Embassy and GAD services ensure your documents meet all legal and governmental requirements for use in other countries. We handle everything from embassy approvals to GAD certifications.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Embassy Attestation Services</li>
          <li>GAD Certification Services</li>
          <li>Embassy & Consulate Legalization</li>
        </ul>
      </div>
    </motion.section>
  );
}
