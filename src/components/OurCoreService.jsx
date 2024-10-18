"use client"
import React from 'react'
import { motion } from "framer-motion";
import Typography from './common/Typography';

const OurCoreService = () => {
  return (
       <motion.section
        className="bg-gradient-to-r from-gray-50 to-white p-8 md:p-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        
    <div className='max-w-7xl mx-auto'>
        <Typography as='h2' variant='h2' className='mb-8 text-center'>Our Core Service</Typography>
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
    </div>
      </motion.section>
  )
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
  

export default OurCoreService
