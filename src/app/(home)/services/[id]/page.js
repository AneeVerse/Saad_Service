"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/servicesData";
import { FaArrowLeft } from "react-icons/fa6";

export default function ServiceDetails({ params }) {
  const router = useRouter();
  const { id } = params;

  const service = servicesData.find((service) => service.id === id);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <motion.section
      className="py-6 mt-[90px] px-4 sm:px-6 bg-gray-50" // Adjusted padding for mobile
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <Link href="/services" className="text-[#D4AF37] hover:text-[#b89730] inline-flex gap-2 items-center font-semibold mb-6">
          <FaArrowLeft className="text-lg" /> <span>Back to Services</span>
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
      
      <GetContactUs title={service.title}/>
    </motion.section>
  );
}




const GetContactUs = ({title}) => {
  return (
    <div className=" py-12 px-6">
    <div className="relative bg-gradient-to-br from-[#D4AF37] via-[#b89730] to-[#3a3a3a] rounded-3xl overflow-hidden max-w-7xl mx-auto">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/stamp-1.webp" // Replace with your background image path
          alt="Get Started Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      {/* Call to Action Content */}
      <motion.section
        className="relative z-10 text-center p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
         For {title} Services.
        </h2>
        {/* <p className="text-lg md:text-xl text-white mb-8">
          Contact us today to begin your document attestation, translation, or legalization journey. Our expert team is ready to assist.
        </p> */}
        <Link href={"/contact"} className="bg-white text-[#D4AF37] inline-block py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition">
          Contact Us Now
        </Link>
      </motion.section>
    </div>
    </div>
  );
};