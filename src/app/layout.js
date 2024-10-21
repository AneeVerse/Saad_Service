import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import Navbar from "@/components/layout/Navbar";
import NextTopLoader from 'nextjs-toploader'
import FloatingActionButton from "@/components/layout/FloatingActionButton";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Saad Service",
  description: "Saad Services has been a leader in providing reliable and efficient document attestation, notary, and embassy services for years. Whether you're an individual or a business, we offer streamlined solutions to ensure your documentation needs are met with the highest level of professionalism.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${poppins.variable}`}
      >                 <NextTopLoader
         color="#D4AF37"
         initialPosition={0.08}
         height={3}
         showSpinner={false}
         easing="ease"
         speed={500}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
         />
        {children}
        
        <FloatingActionButton/>
      </body>
    </html>
  );
}
