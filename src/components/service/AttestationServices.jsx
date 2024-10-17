"use client"
import { motion } from "framer-motion";

export default function AttestationServices() {
  return (
    <motion.section
      className="py-12 px-6 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Document Attestation</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We provide comprehensive document attestation services for educational, commercial, and personal documents, ensuring that they are validated and meet international legal requirements.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Educational Document Attestation</li>
          <li>Commercial Document Attestation</li>
          <li>Personal Document Attestation</li>
        </ul>
      </div>
    </motion.section>
  );
}
