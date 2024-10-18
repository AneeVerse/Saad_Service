"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram
} from "react-icons/fa";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";

export default function ContactUs() {
  return (
    <div className="mt-[90px] bg-gradient-to-r from-white via-gray-50 to-gray-100">
      <PageHeader pageTitle={"Contact Us"} />

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.section
              className="bg-white shadow-xl rounded-3xl p-10 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#d7b368] transition duration-300"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d7b368] text-white py-3 rounded-xl hover:bg-[#b89730] shadow-lg transition duration-300"
                >
                  Send Message
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
                alt="Contact Us Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d7b368]/90 via-[#d7b368]/70 to-transparent"></div>

              {/* Information on Top of Image */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-4xl font-bold mb-6">We&apos;re Here to Help</h2>
                <p className="text-lg mb-8">Have any questions? Reach out to us anytime, and we’ll be happy to assist you.</p>
                <ul className="space-y-6">
                  <li className="flex items-center text-lg">
                    <FaPhoneAlt className="mr-3" /> +1 234 567 890
                  </li>
                  <li className="flex items-center text-lg">
                    <FaEnvelope className="mr-3" /> support@saadservice.com
                  </li>
                  <li className="flex items-center text-lg">
                    <FaMapMarkerAlt className="mr-3" /> 123 Business Street, New York, NY 10001
                  </li>
                </ul>
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
              className="w-full h-64 md:h-96 rounded-3xl shadow-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9824457414126!2d-74.00601508459471!3d40.71277597932826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316ec3f19b%3A0xf96cb0de5a071abc!2s123%20Business%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1618826754455!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Follow Us</h2>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-4xl text-[#d7b368] hover:text-[#b89730] transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-4xl text-[#d7b368] hover:text-[#b89730] transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-4xl text-[#d7b368] hover:text-[#b89730] transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
