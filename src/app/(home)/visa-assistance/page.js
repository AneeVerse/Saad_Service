"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";

export default function VisaAssistance() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for form submission status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    message: "",
  });

  // State for popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus({
          submitted: true,
          submitting: false,
          error: false,
          message: "Your visa inquiry has been submitted successfully!",
        });
        triggerPopup();
      } else {
        const result = await response.json();
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
        message: "There was an error submitting your inquiry. Please try again later.",
      });
      console.error("Error:", error);
      triggerPopup();
    }
  };

  // Trigger popup display for 7 seconds
  const triggerPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 7000); // 7 seconds
  };

  return (
    <div className="mt-[90px] bg-gradient-to-r from-white via-gray-50 to-gray-100">
      <PageHeader pageTitle={"Visa Assistance"} />

      {/* Popup Notification */}
      {showPopup && (
        <motion.div
          initial={{ translateX: "100%" }}
          animate={{ translate: "-100%" }}
          className={`fixed top-[100px] right-4 p-4 rounded-md shadow-lg z-50 ${
            status.error ? "bg-red-500" : "bg-green-500"
          } text-white flex items-center`}
        >
          {status.error ? <FaExclamationCircle className="mr-2" /> : <FaCheckCircle className="mr-2" />}
          {status.message}
        </motion.div>
      )}

      <div className="py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
            {/* Contact Form */}
            <motion.section
              className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Need Visa Assistance?</h2>
              <p className="text-gray-600 mb-6">
                We provide professional visa consultation services. Fill in your details, and our team will get in touch to assist you with the visa process.
              </p>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Tell us about your visa requirements"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d7b368] text-white py-3 rounded-xl hover:bg-[#b89730] shadow-lg transition duration-300"
                  disabled={status.submitting}
                >
                  {status.submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </motion.section>

            {/* Image with Gradient Overlay */}
            <motion.section
              className="relative rounded-3xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/home/pen-doc.webp"
                alt="Visa Assistance Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d7b368]/90 via-[#d7b368]/70 to-transparent"></div>

              {/* Information on Top of Image */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-4xl font-bold mb-6">Visa Assistance Services</h2>
                <p className="text-lg mb-8">
                  We specialize in assisting individuals with their visa applications, providing expert guidance through the process.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-center text-lg">
                    <FaPhoneAlt className="mr-3" /> +919892808033 / +919920808033
                  </li>
                  <li className="flex items-center text-lg">
                    <FaEnvelope className="mr-3" /> saadservices@gmail.com / info@saadservices.com
                  </li>
                  <li className="flex items-center text-lg">
                    <FaMapMarkerAlt className="mr-3" /> Saad services 15, Maker Arcade, Maker tower Below Saudi Arabian Consulate, Cuffe Parade, Colaba, Mumbai, Maharashtra 400005
                  </li>
                </ul>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
