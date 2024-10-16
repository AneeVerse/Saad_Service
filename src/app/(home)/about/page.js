"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaUniversity,
  FaPassport,
  FaFileAlt,
  FaGlobe,
  FaAward,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";
import {
  MdOutlineSupportAgent,
  MdOutlineLocalShipping,
  MdVerified,
} from "react-icons/md";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-white via-gray-50 to-gray-100 px-6 md:px-12 py-8 overflow-hidden">
      {/* Header Section with Animated SVG and Intro */}
      <motion.section
        className="bg-white shadow-xl rounded-3xl  mb-16 p-4 md:p-12 flex flex-col md:flex-row items-center gap-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Saad Services</h2>
          <h3 className="text-2xl font-semibold text-gray-700">Your Trusted Partner for Document Solutions</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Saad Services has been a leader in providing reliable and efficient document attestation, notary, and embassy services for years. Whether you're an individual or a business, we offer streamlined solutions to ensure your documentation needs are met with the highest level of professionalism.
          </p>

          {/* List of Key Services */}
          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700 leading-relaxed">
            <li>Attestation services for personal and business documents</li>
            <li>Notary services for legal validation of your documents</li>
            <li>Embassy-certified document handling for international use</li>
            <li>Specialized services for MEA attestation and apostille</li>
            <li>Seamless processing with quick turnaround times</li>
            <li>Dedicated customer support to guide you through the process</li>
          </ul>

         
        </div>

        {/* Image Section */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/home/pen-doc.webp" // Replace this with the actual image path
            alt="Document Attestation Services"
            className="w-full h-auto object-cover md:max-h-[500px]" // Image is responsive
          />
        </div>
      </div>      </motion.section>
 {/* Our Core Services Section */}
 <motion.section
        className="bg-gradient-to-r from-gray-50 to-white shadow-lg rounded-3xl p-8 md:p-12 mb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { 
              image: "/images/about/edu.webp", 
              title: "Educational Attestation", 
              description: "Get certificates attested for university admissions or job applications." 
            },
            { 
              image: "/images/about/marriage-attestation.webp", 
              title: "Marriage Certificate Attestation", 
              description: "Get your marriage certificates legalized for visa applications." 
            },
            { 
              image: "/images/about/commercial-attestation.webp", 
              title: "Commercial Attestation", 
              description: "Ensure business documents meet international standards." 
            },
            { 
              image: "/images/about/apostille-services.webp", 
              title: "Apostille Services", 
              description: "Hague convention Apostille services for international legal procedures." 
            },
          ].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us with Feature Cards */}
      <motion.section
        className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Why Choose Saad Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
              icon: MdOutlineSupportAgent,
              title: "24x7 Support",
              description: "Available at every step to guide you through the attestation process."
            },
            {
              icon: MdOutlineLocalShipping,
              title: "Pickup & Drop",
              description: "We collect and deliver documents to your doorstep."
            },
            {
              icon: MdVerified,
              title: "Security & Assurance",
              description: "Your documents are secure throughout the process."
            },
            {
              icon: FaAward,
              title: "Global Reach",
              description: "Trusted across 200+ countries with partnerships worldwide."
            },
            {
              icon: FaCertificate,
              title: "Certified Professionals",
              description: "Our team is composed of certified professionals, ensuring quality service."
            },
            {
              icon: FaHandshake,
              title: "Trusted by Thousands",
              description: "Over 25 years of trust with thousands of satisfied clients."
            }
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </motion.section>

  {/* Testimonials Section */}
<motion.section
  className="bg-gradient-to-r from-gray-50 to-white shadow-lg rounded-3xl p-8 md:p-12 mb-16 relative z-10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
    What Our Clients Say
  </h2>
  <div className="space-y-6 md:space-y-8">
    {[
      {
        name: "John Doe",
        feedback:
          "Saad Services provided excellent support throughout the attestation process. My documents were ready quicker than expected.",
        country: "United States",
        profileImage: "/images/about/profile.webp", // Replace with actual path
        rating: 5,
      },
      {
        name: "Jane Smith",
        feedback:
          "The convenience of their pickup and drop service was amazing. I highly recommend Saad Services for anyone in need of document processing.",
        country: "Canada",
        profileImage: "/images/about/profile.webp", // Replace with actual path
        rating: 4,
      },
    ].map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </div>
</motion.section>



      {/* Call to Action Section */}
      <motion.section
        className="bg-[#D4AF37] text-white rounded-3xl p-8 md:p-12 mt-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Contact us today to begin your document attestation, translation, or legalization journey. Our expert team is ready to assist.
        </p>
        <button className="bg-white text-[#D4AF37] py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </motion.section>
    </div>
  );
}

// ServiceCard component
// ServiceCard component (with Image)
function ServiceCard({ image, title, description }) {
  return (
    <div className="bg-gray-50 rounded-xl  shadow-md hover:shadow-lg transition duration-300">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      {/* Text Content */}
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}


// FeatureCard component
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 flex items-center space-x-4 md:space-x-6 shadow-md hover:shadow-lg transition duration-300">
      <Icon className="text-4xl md:text-5xl text-[#D4AF37]" />
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}


// TestimonialCard component to display profile image, country, rating, and feedback
function TestimonialCard({ name, feedback, country, profileImage, rating }) {
  // Array to create star icons based on rating
  const stars = Array(rating).fill(0);

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      {/* User Profile Section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={profileImage}
          alt={name}
          className="w-16 h-16 rounded-full object-cover  shadow-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{country}</p>
          {/* Star Rating */}
          <div className="flex space-x-1 mt-1">
            {stars.map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#D4AF37]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      {/* Feedback Text */}
      <p className="text-lg text-gray-700 mb-2 md:mb-4">&quot;{feedback}&quot;</p>
    </div>
  );
}