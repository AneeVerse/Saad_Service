import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

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
              <h3 className="text-2xl font-bold text-[#D4AF37]">SAAD SERVICES®</h3>
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
                <Link href="/services/certified-translation" className="hover:text-[#D4AF37] transition duration-300">
                Certified Translations
                </Link>
              </li>
              <li>
                <Link href="/services/interpretation" className="hover:text-[#D4AF37] transition duration-300">
                Language Interpretation
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
              <Link href="https://www.facebook.com/saadservices1995/" target="_blank">
               <FaFacebook className="text-2xl hover:text-[#D4AF37] transition duration-300"/>
              </Link>

              <Link href="https://www.instagram.com/saad_services_/" target="_blank">
               <FaInstagram className="text-2xl hover:text-[#D4AF37] transition duration-300"/>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 flex flex-col sm:flex-row items-center gap-2 justify-between pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Saad Services®. All rights reserved.
          </p>
          <Link target="_blank" href="https://aneeverse.com" className="text-gray-400 text-sm hover:text-[#D4AF37] flex items-center gap-2"> 
          <span>Managed & Designed By Aneeverse</span> 
          <Image src="/images/aneeverse-logo.png" alt='Aneeverse logo' width={20} height={20} />
        </Link>
        </div>
      </div>
    </footer>
  );
}
