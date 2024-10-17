"use client";
import PageHeader from "@/components/layout/PageHeader";
import servicesData from "@/data/servicesData";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Importing Image for service images

const page = () => {
  return (
    <motion.section
      className="bg-gray-50 mt-[90px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page Header */}
      <PageHeader pageTitle={"Our Services"} />

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Service Image */}
                <div className="relative h-48 w-full mb-6">
                  <Image
                    src={service.firstImage} // Image path should match service id
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Learn More Link */}
                <Link
                  href={`/services/${service.id}`}
                  className="text-[#D4AF37] font-semibold hover:text-[#b89730] transition"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
