"use client"
import { motion } from "framer-motion";

export default function LegalizationServices() {
  return (
    <motion.section
      className="py-12 px-6 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Legalization Services</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We specialize in legalizing documents for use in foreign countries, providing you with the certification you need for official purposes.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>International Document Legalization</li>
          <li>Legalization of Commercial Documents</li>
          <li>GAD & Other Legal Certifications</li>
        </ul>
      </div>
    </motion.section>
  );
}
