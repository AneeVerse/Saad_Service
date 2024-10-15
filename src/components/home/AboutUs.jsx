// components/AboutUs.js

export default function AboutUs() {
    return (
      <section className="bg-gray-800 text-white py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="leading-relaxed">
              Brilliance International Attestation operates across 200+ countries,
              including the UAE, Oman, Qatar, and India. We provide seamless
              attestation and apostille services with a focus on efficiency and
              reliability.
            </p>
          </div>
          <div>
            <img
              src="/images/about-us.webp"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  }
  