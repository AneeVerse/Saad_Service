"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import PageHeader from "@/components/layout/PageHeader";

const faqData = [
  {
    question: "What is document attestation?",
    answer:
      "Document attestation is the process of verifying the authenticity of a document for international use. It is a mandatory procedure for documents that will be used for legal purposes abroad, such as visas, work permits, and education.",
  },
  {
    question: "How long does the attestation process take?",
    answer:
      "The duration of the attestation process depends on the type of document, the country of origin, and the requirements of the embassy. Generally, it can take anywhere from 7 to 21 business days.",
  },
  {
    question: "What documents are required for legalization?",
    answer:
      "For document legalization, you will typically need the original document, a photocopy, and any additional documents requested by the embassy or consulate, such as an application form or ID proof.",
  },
  {
    question: "What is the difference between attestation and apostille?",
    answer:
      "Both attestation and apostille are forms of document authentication. Apostille is used for countries that are members of The Hague Convention, while attestation is for countries that do not participate in the convention.",
  },
  {
    question: "Can I track the status of my documents?",
    answer:
      "Yes, we provide tracking services for all documents. You can monitor the progress of your document attestation or legalization process through our online portal or by contacting our support team.",
  },
  {
    question: "Do I need to be physically present for the attestation process?",
    answer:
      "No, we provide convenient services where you can submit your documents via courier or in person. Our team handles the attestation and legalization process on your behalf.",
  },
  {
    question: "Are your services available worldwide?",
    answer:
      "Yes, we offer global services and have connections with embassies and consulates across over 200 countries, ensuring your documents are legalized efficiently, no matter where you are.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, bank transfers, and online payment platforms such as PayPal. Please contact our support team for more details.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ
  };

  return (
    <motion.section
      className=" mt-[90px] bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        <PageHeader pageTitle={"FAQ"}/>
        <div className="relative py-12 px-6">
      {/* Background Watermark Icons */}
      <div className="absolute top-0 left-10 opacity-5 text-[300px] text-[#D4AF37] z-0">
        <FaQuestionCircle />
      </div>
      <div className="absolute top-1/4 right-10 opacity-5 text-[300px] text-[#D4AF37] z-0">
        <FaQuestionCircle />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center relative">
          Frequently Asked Questions
          <span className="absolute -top-8 -left-10 opacity-10 text-[#D4AF37]">
            <FaQuestionCircle className="text-[80px]" />
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Find answers to the most common questions about our services.
        </p>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#D4AF37] relative z-10"
            >
              <div
                className={`flex justify-between items-center cursor-pointer ${activeIndex === index ? "mb-4" : ""
                  }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-3">
                  <FaQuestionCircle className="text-[#D4AF37] text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-2xl text-gray-600">
                  {activeIndex === index ? (
                    <FaMinus className="text-xl text-gray-800" />
                  ) : (
                    <IoMdAdd className="text-xl text-gray-800" />
                  )}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default FAQPage;
