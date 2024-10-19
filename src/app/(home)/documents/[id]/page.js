"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // For the image at the top
import documentData from "@/data/documentData";
import { FaArrowLeft } from "react-icons/fa6";

export default function ServiceDetails({ params }) {
  const { id } = params;

  const service = documentData.find((service) => service.id === id);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <motion.section
      className="py-6 px-4 mt-[90px] sm:px-6 bg-gray-50" // Adjusted padding for mobile
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <Link href="/services" className="text-[#D4AF37] hover:text-[#b89730] inline-flex gap-2 items-center font-semibold mb-6">
          <FaArrowLeft className="text-lg" /> <span>Back to Documents</span>
        </Link>

        {/* Service Title and Description */}
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">{service.title}</h2>
        <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          {service.description}
        </div>

        {/* Service Details Section */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8">
          {/* Left side - Content */}
          <div className="bg-white flex-1 shadow-lg rounded-lg p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Service Details</h3>
            <div className="text-gray-600 leading-relaxed">{service.details}</div>
          </div>

          {/* Right side - Decorative image or additional visual content */}
          <div className="relative flex-1 min-h-[200px] md:min-h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={service.firstImage} // A secondary image for visual interest
              alt="Service Decorative Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
