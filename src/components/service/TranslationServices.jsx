"use client"
import { motion } from "framer-motion";

export default function TranslationServices() {
  return (
    <motion.section
      className="py-12 px-6 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Translation Services</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We provide certified translation services in multiple languages, ensuring your documents are accurate and certified for official use.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Certified Legal Translations</li>
          <li>Translation of Educational & Commercial Documents</li>
          <li>Embassy Certified Translation</li>
        </ul>
      </div>
    </motion.section>
  );
}
