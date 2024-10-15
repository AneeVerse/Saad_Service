"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-gray-50 to-blue-50 p-8 md:p-16">
      <motion.h1
        className="text-5xl font-bold text-blue-700 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.section
          className="bg-white shadow-xl rounded-3xl p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-blue-100 p-8 rounded-3xl shadow-md">
            <FaPhoneAlt className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+1 234 567 890</p>
          </div>
          <div className="bg-blue-100 p-8 rounded-3xl shadow-md">
            <FaEnvelope className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">support@faadservice.com</p>
          </div>
          <div className="bg-blue-100 p-8 rounded-3xl shadow-md">
            <FaMapMarkerAlt className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-gray-700">123 Business Street, New York, NY 10001</p>
          </div>
        </motion.section>
      </div>

      {/* Map Embed */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          className="w-full h-64 md:h-96 rounded-3xl shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9824457414126!2d-74.00601508459471!3d40.71277597932826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316ec3f19b%3A0xf96cb0de5a071abc!2s123%20Business%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1618826754455!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-3xl text-blue-600 hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl text-blue-600 hover:text-blue-800">
            <FaTwitter />
          </a>
          <a href="#" className="text-3xl text-blue-600 hover:text-blue-800">
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
