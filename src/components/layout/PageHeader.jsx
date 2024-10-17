"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PageHeader({ pageTitle }) {
  const router = useRouter();

  return (
    <header className="relative bg-gradient-to-br from-[#ffd858] via-[#eccb66] to-[#a8a572b6] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/stamp-1.webp" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      {/* Header Content */}
      <div className="relative z-10 flex items-center justify-center py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Dynamic Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white capitalize text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {pageTitle || "Welcome"}
        </motion.h1>
      </div>

      {/* Subheading or Breadcrumbs */}
      <motion.div
        className="relative z-10 text-center mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-white text-sm md:text-lg">
          {router.pathname === "/about" && "Learn more about who we are"}
          {router.pathname === "/contact" && "Reach out to us anytime"}
          {router.pathname === "/services" && "Explore our offerings"}
        </p>
      </motion.div>
    </header>
  );
}
