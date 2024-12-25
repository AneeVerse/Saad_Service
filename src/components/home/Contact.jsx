"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // For popup messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Stop submission if there are errors
    }

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
          message: "Your message has been sent successfully!",
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
        message: "There was an error sending your message. Please try again later.",
      });
      console.error("Error:", error);
      triggerPopup();
    }
  };

  // Trigger popup display for 5 seconds
  const triggerPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Show popup for 5 seconds
  };

  return (
    <>
      {/* Popup Notification */}
      {showPopup && (
        <motion.div
          initial={{ translateX: "100%" }}
          animate={{ translate: "-100%" }}
          className={`fixed top-[100px] right-4 p-4 rounded-md shadow-lg z-50 ${
            status.error ? "bg-red-500" : "bg-green-500"
          } text-white flex items-center`}
        >
          {status.error ? (
            <FaExclamationCircle className="mr-2" />
          ) : (
            <FaCheckCircle className="mr-2" />
          )}
          {status.message}
        </motion.div>
      )}
      <motion.section
        className="py-12 px-4 md:px-12 bg-[#f5f5f5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 shadow-lg max-w-7xl mx-auto">
          {/* Contact Info Section */}
          <motion.div
            className="relative p-6 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              style={{
                backgroundImage: `url('/images/home/pen-doc.webp')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"></div>
            <div className="relative text-white space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Let’s Discuss Your Needs
              </h2>
              <p className="text-gray-300">
                Feel free to contact us for any inquiries or assistance. Our team
                is ready to help.
              </p>
              <p className="text-lg">📧 saadservices@gmail.com / info@saadservices.com</p>
              <p className="text-lg">📞 +91 9882808033 / +91 9920808033</p>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.form
            className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className={`w-full p-4 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className={`w-full p-4 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="bg-[#D4AF37] text-white py-3 px-6 rounded-lg hover:bg-[#b89730] transition duration-300 w-full"
              whileTap={{ scale: 0.95 }}
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </>
  );
}
