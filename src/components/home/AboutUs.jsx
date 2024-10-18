"use client";
import Link from "next/link";
import { FaFileAlt, FaPenNib, FaRegHandshake, FaGlobe } from "react-icons/fa"; // Icons for background

export default function AboutUs() {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-gray-50 via-white to-[#f5f5f5] overflow-hidden">
      
      {/* Background Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <FaFileAlt className="absolute text-[#D4AF37] opacity-10 w-[100px] h-[100px] top-10 left-10" />
        <FaPenNib className="absolute text-[#D4AF37] opacity-10 w-[150px] h-[150px] top-[30%] right-10" />
        <FaRegHandshake className="absolute text-[#D4AF37] opacity-10 w-[120px] h-[120px] bottom-20 left-20" />
        <FaGlobe className="absolute text-[#D4AF37] opacity-10 w-[180px] h-[180px] bottom-10 right-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            About Saad Services
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700">
            Your Trusted Partner for Document Solutions
          </h3>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Saad Services has been a leader in providing reliable and efficient document attestation, notary, and embassy services for years. Whether you&apos;re an individual or a business, we offer streamlined solutions to ensure your documentation needs are met with the highest level of professionalism.
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

          <Link
            href="/contact"
            className="inline-block bg-[#D4AF37] text-white py-3 px-6 rounded-lg hover:bg-[#b89730] transition duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src="/images/home/pen-doc.webp" // Replace this with the actual image path
            alt="Document Attestation Services"
            className="w-full h-auto object-cover md:max-h-[500px]" // Image is responsive
          />
        </div>
      </div>

      {/* Clip-path Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5f5f5] to-transparent opacity-90 clip-path-polygon z-0"></div>
    </section>
  );
}
