import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* About Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img
                src="/images/logo-saad-tr.png"
                alt="Saad Service Logo"
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-2xl font-bold text-[#D4AF37]">SAAD SERVICE</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Saad Service is your trusted partner for document attestation, Apostille services, and embassy certifications. We serve clients across 200+ countries with unmatched professionalism and efficiency.
            </p>
            {/* <p className="mt-4 text-gray-400 text-sm">
              Providing fast, reliable, and globally recognized services for your legal documentation needs.
            </p> */}
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#D4AF37] transition duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services/attestation" className="hover:text-[#D4AF37] transition duration-300">
                  Document Attestation
                </Link>
              </li>
              <li>
                <Link href="/services/legalization" className="hover:text-[#D4AF37] transition duration-300">
                  Legalization Services
                </Link>
              </li>
              <li>
                <Link href="/services/notary" className="hover:text-[#D4AF37] transition duration-300">
                  Notary Services
                </Link>
              </li>
              <li>
                <Link href="/services/translation" className="hover:text-[#D4AF37] transition duration-300">
                  Translation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Connect with us on social media for updates and offers.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" className="hover:text-[#D4AF37] transition duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69A4.21 4.21 0 0021.86 4a8.3 8.3 0 01-2.66 1.02A4.14 4.14 0 0015.42 3c-2.34 0-4.23 1.91-4.23 4.26 0 .33.04.66.11.97C7.69 8.04 4.08 6.13 1.64 3.16c-.35.61-.55 1.32-.55 2.07 0 1.43.73 2.7 1.83 3.44-.68-.02-1.33-.21-1.9-.53v.05c0 2 .14 3.76 1.97 4.56-.61.17-1.25.27-1.91.1.54 1.68 2.09 2.91 3.94 2.94a8.31 8.31 0 01-5.16 1.78c-.34 0-.67-.02-1-.06 1.84 1.17 4.02 1.86 6.37 1.86 7.65 0 11.82-6.36 11.82-11.86v-.54c.8-.58 1.5-1.3 2.04-2.13z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-[#D4AF37] transition duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm0 18.16c-4.5 0-8.16-3.66-8.16-8.16S7.5 3.84 12 3.84s8.16 3.66 8.16 8.16-3.66 8.16-8.16 8.16zm.78-13.22c-.43 0-.84.17-1.15.48-.3.31-.47.71-.47 1.14s.17.84.47 1.14c.31.31.72.48 1.15.48.42 0 .83-.17 1.13-.48.32-.3.49-.71.49-1.14s-.17-.84-.49-1.14c-.3-.31-.71-.48-1.13-.48zm-.02 3.94h-.02c-.64 0-1.21.24-1.68.7-.46.46-.72 1.03-.72 1.67v3.88c0 .39.32.7.7.7h2.92c.39 0 .7-.32.7-.7v-3.88c0-.64-.24-1.21-.7-1.67-.47-.46-1.04-.7-1.68-.7z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-[#D4AF37] transition duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.988 2H7.012A5.01 5.01 0 002 7.01v9.978A5.01 5.01 0 007.012 22h9.976A5.01 5.01 0 0022 16.988V7.012A5.01 5.01 0 0016.988 2zM20 16.988a3.015 3.015 0 01-3.012 3.012H7.012A3.015 3.015 0 014 16.988V7.012A3.015 3.015 0 017.012 4h9.976A3.015 3.015 0 0120 7.012v9.976zM12 7.95a4.05 4.05 0 100 8.1 4.05 4.05 0 000-8.1zm0 6.55a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm4.4-7.54a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 flex flex-col sm:flex-row items-center gap-2 justify-between pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Saad Service. All rights reserved.
          </p>
          <Link target="_blank" href="https://aneeverse.com/en/" className="text-gray-400 text-sm hover:text-[#D4AF37] flex items-center gap-2"> 
          <span>Managed & Designed By Aneeverse</span> 
          <Image src="/images/aneeverse-logo.png" alt='Aneeverse logo' width={20} height={20} />
        </Link>
        </div>
      </div>
    </footer>
  );
}
