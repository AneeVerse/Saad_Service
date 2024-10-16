"use client";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Saad Services</h2>
          <h3 className="text-2xl font-semibold text-gray-700">Your Trusted Partner for Document Solutions</h3>
          
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
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/home/pen-doc.webp" // Replace this with the actual image path
            alt="Document Attestation Services"
            className="w-full h-auto object-cover md:max-h-[500px]" // Image is responsive
          />
        </div>
      </div>
    </section>
  );
}
