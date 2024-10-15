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
      className="py-16 px-6 md:px-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Let’s discuss your needs</h2>
          <p className="text-gray-600">
            Feel free to contact us for any inquiries or assistance.
          </p>
          <p className="text-lg">📧 support@faadservice.com</p>
          <p className="text-lg">📞 +1 234 567 890</p>
        </div>

        {/* Contact Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
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
              className={`w-full p-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
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
              className={`w-full p-3 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {isSubmitted && (
            <motion.p
              className="text-green-600 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
