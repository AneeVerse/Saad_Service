import Image from "next/image";

export default function AboutGlobalReach() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Global Reach</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <Image
              src="/images/about/all-country.webp" // Make sure to update the image path
              alt="Global Reach"
              width={600}
              height={400}
              className="rounded-lg max-h-[400px] shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At Saad Services, we have expanded our operations globally, serving clients across
              200+ countries. Our strong relationships with international embassies, consulates,
              and legal bodies make us the preferred partner for document attestation,
              legalization, and translation services worldwide. We pride ourselves on providing
              expert services tailored to meet the diverse needs of individuals and businesses.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Expert document attestation services for over 200+ countries</li>
              <li>Strong partnerships with embassies and legal bodies worldwide</li>
              <li>Specialized in educational, non-educational, and commercial documents</li>
              <li>Certified translations available in multiple languages</li>
              <li>Trusted by individuals and businesses for reliable document processing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
