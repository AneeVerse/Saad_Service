import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHistory() {
  return (
    <section className="relative bg-white py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-6 z-10">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our History
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Saad Services was established in 1995 and has grown into one of the most trusted names in document attestation, legalization, and translation services. With over 25 years of experience, we have built a legacy of excellence and reliability. Starting with operations in Mumbai, we have expanded our services across India and internationally, serving over 200+ countries.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our dedicated team is certified by multiple embassies, consulates, and international organizations, ensuring that your documents are processed with the highest standards of accuracy and compliance.
          </motion.p>
        </div>

        {/* Image Section with Overlay */}
        <div className="relative flex items-center justify-center z-0">
          {/* Background Image */}
          <motion.div
            className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/images/about/stamp-global-pro.webp"
              alt="History Image 1"
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Overlay Image
          <motion.div
            className="absolute top-16 left-0 md:top-24 md:left-[-30px] lg:left-[-50px] w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg shadow-lg overflow-hidden transform rotate-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/images/about/stamp-1.webp"
              alt="History Image 3"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
