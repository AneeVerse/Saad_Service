"use client";
import { motion } from "framer-motion";
import {
  FaUniversity, FaPassport, FaFileAlt, FaGlobe
} from "react-icons/fa";
import {
  MdOutlineSupportAgent, MdOutlineLocalShipping, MdVerified
} from "react-icons/md";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-white via-blue-50 to-gray-100 px-6 md:px-12 py-8 overflow-hidden">
      {/* Header Section */}
      <motion.section
        className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 tracking-tight">
            About Faad Service
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Faad Service is your trusted partner for <strong>document attestation and Apostille services</strong> across 
            <strong> 200+ countries</strong>, including the UAE, India, Canada, the US, and Australia. 
            Whether it’s <strong>educational, non-educational, or commercial</strong> documents, we ensure every 
            attestation process is safe, fast, and compliant with international standards.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/about/about.webp"
            alt="About Faad Service"
            className="rounded-2xl shadow-md w-full"
          />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { icon: FaUniversity, title: "Educational Attestation", description: "Verify certificates for university admissions or jobs abroad." },
          { icon: FaPassport, title: "Marriage Certificate Attestation", description: "Legalize your marriage certificate for visa applications." },
          { icon: FaFileAlt, title: "Commercial Document Attestation", description: "Ensure business documents meet international standards." },
          { icon: FaGlobe, title: "Apostille Services", description: "Simplify legal procedures with Hague Convention certification." },
        ].map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {[
          { icon: MdOutlineSupportAgent, title: "24x7 Support", description: "Assistance at every step of the attestation journey." },
          { icon: MdOutlineLocalShipping, title: "Pickup & Drop", description: "Convenient document collection from your doorstep." },
          { icon: MdVerified, title: "Security Assured", description: "Your documents are secure throughout the process." },
        ].map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="bg-white shadow-lg rounded-3xl p-8 md:p-12 mt-12 md:mt-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6 md:mb-8">
          What Our Clients Say
        </h2>
        <div className="space-y-6 md:space-y-8">
          {[
            { name: "John Doe", feedback: "Excellent support! My documents were attested faster than expected." },
            { name: "Jane Smith", feedback: "Pickup service was so convenient. Highly recommend Faad Service!" },
          ].map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-3xl p-8 md:p-12 mt-12 md:mt-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 md:mb-8">
          Why Choose Faad Service?
        </h2>
        <ul className="list-disc pl-4 md:pl-6 space-y-4 text-base md:text-lg text-gray-700">
          <li><strong>PAN-India Network:</strong> Reliable coverage across India.</li>
          <li><strong>Affordable & Efficient:</strong> Top-quality services at competitive prices.</li>
          <li><strong>End-to-End Solutions:</strong> Comprehensive attestation and visa services.</li>
          <li><strong>Compliance Made Easy:</strong> Ensuring global legal requirements are met.</li>
          <li><strong>Seamless Experience:</strong> A stress-free journey with our experts.</li>
        </ul>
      </motion.section>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-blue-100 rounded-xl p-6 md:p-8 flex items-center space-x-4 md:space-x-6 shadow-md">
      <Icon className="text-4xl md:text-5xl text-blue-600" />
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-green-100 rounded-xl p-6 md:p-8 flex items-center space-x-4 md:space-x-6 shadow-md">
      <Icon className="text-4xl md:text-5xl text-green-600" />
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, feedback }) {
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
      <p className="text-lg text-gray-700 mb-2 md:mb-4">&quot;{feedback}&quot;</p>
      <p className="text-right text-sm font-semibold text-gray-500">- {name}</p>
    </div>
  );
}
