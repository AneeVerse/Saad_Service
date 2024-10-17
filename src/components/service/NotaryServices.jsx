"use client"
import { motion } from "framer-motion";

export default function NotaryServices() {
  return (
    <motion.section
      className="py-12 px-6 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Notary Services</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We offer professional notary services to ensure your documents are legally notarized and accepted for use both locally and internationally.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Legal Notarization of Personal Documents</li>
          <li>Commercial Notary Services</li>
          <li>Embassy Notarization</li>
        </ul>
      </div>
    </motion.section>
  );
}
