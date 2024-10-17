export default function AboutMissionVision() {
    return (
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Mission & Vision
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Section */}
            <div className="space-y-6 bg-white shadow-lg p-8 rounded-lg">
              <h3 className="text-3xl font-semibold text-[#D4AF37]">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make the document attestation and legalization
                process easy, efficient, and reliable for individuals and
                businesses worldwide. We aim to:
              </p>
  
              {/* Mission Points */}
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Provide seamless, hassle-free documentation services.</li>
                <li>Ensure accuracy and transparency at every step.</li>
                <li>
                  Offer unparalleled customer service for smooth and quick
                  processes.
                </li>
                <li>Maintain the highest standards of compliance and quality.</li>
              </ul>
            </div>
  
            {/* Vision Section */}
            <div className="space-y-6 bg-white shadow-lg p-8 rounded-lg">
              <h3 className="text-3xl font-semibold text-[#D4AF37]">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strive to be the global leader in document processing services,
                trusted by individuals, corporations, and institutions for their
                legalization and attestation needs. Our vision is to:
              </p>
  
              {/* Vision Points */}
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  Lead the industry with innovative solutions for documentation.
                </li>
                <li>Build a trusted global network for efficient processing.</li>
                <li>
                  Ensure compliance with the legal standards of over 200+
                  countries.
                </li>
                <li>
                  Empower our clients with secure, fast, and affordable services.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  