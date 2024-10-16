"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Simulate form submission
      console.log("Form Submitted", formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.section
      className="py-12 px-4 md:px-12 bg-[#f5f5f5]" // Reduced padding on mobile
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 shadow-lg">
        {/* Contact Info Section with background image and color overlay */}
        <motion.div
          className="relative p-6 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            style={{
              backgroundImage: `url('/images/home/pen-doc.webp')`, // Replace with actual image path
            }}
          >
          </div>
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"></div>

          {/* Text Content */}
          <div className="relative text-white space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Let’s Discuss Your Needs</h2>
            <p className="text-gray-300">
              Feel free to contact us for any inquiries or assistance. Our team is ready to help.
            </p>
            <p className="text-lg">📧 support@saadservice.com</p>
            <p className="text-lg">📞 +1 234 567 890</p>
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
              } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`} // Gold focus ring
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
              } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`} // Gold focus ring
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
              } focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300`} // Gold focus ring
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="bg-[#D4AF37] text-white py-3 px-6 rounded-lg hover:bg-[#b89730] transition duration-300 w-full" // Gold button with hover effect
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {isSubmitted && (
            <motion.p
              className="text-[#D4AF37] text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
