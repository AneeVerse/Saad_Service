import AboutUs from "@/components/home/AboutUs";
import Contact from "@/components/home/Contact";
import Expertise from "@/components/home/Expertise";
import FAQ from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import OurCoreService from "@/components/OurCoreService";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={"mt-[90px]"}>
        
      <Hero/>
      <Expertise/>
      <AboutUs/>
      <OurCoreService/>
      <Statistics/>
      <FAQ/>
      <Contact/>
      <Footer/>

      </div>
                
    </div>
  );
}
