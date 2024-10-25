"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import Typography from "../common/Typography";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const faqs = [
    {
      question: "What is certificate attestation?",
      answer:
        "Attestation verifies the authenticity of documents for use internationally.",
    },
    {
      question: "Why do I need my documents attested?",
      answer:
        "Attested documents are required for official processes abroad.",
    },
    {
      question: "Which countries require document attestation?",
      answer:
        "Most countries require it for educational, personal, or commercial use.",
    },
    {
      question: "Why do I need my documents attested?",
      answer:
        "Attested documents are required for official processes abroad.",
    },
    {
      question: "Which countries require document attestation?",
      answer:
        "Most countries require it for educational, personal, or commercial use.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for the clicked FAQ
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">      
    <div className="max-w-7xl mx-auto">
      <Typography as="h2" variant="h2" className="text-center mb-8">Frequently Asked Questions</Typography>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl flex gap-3 items-center font-semibold">
              <FaQuestionCircle className="text-[#D4AF37] min-w-fit text-xl" />
                {faq.question}
                </h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
