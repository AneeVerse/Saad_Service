"use client";
import { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Typography from "../common/Typography";
import servicesData from "@/data/servicesData";
import Link from "next/link";

export default function Expertise() {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const autoScrollRef = useRef(null);

  // Calculate how many cards to show based on screen width
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1800) setCardsToShow(5);
    else if (screenWidth >= 1200) setCardsToShow(4);
    else if (screenWidth >= 992) setCardsToShow(3);
    else if (screenWidth >= 668) setCardsToShow(2);
    else setCardsToShow(1);
  };

  useEffect(() => {
    updateCardsToShow(); // Set the initial value
    window.addEventListener("resize", updateCardsToShow); // Update on window resize
    return () => window.removeEventListener("resize", updateCardsToShow); // Cleanup
  }, []);

  // Move to the next card, or reset to the beginning if we're at the end
  const handleAutoScroll = () => {
    setCurrent((prev) =>
      prev < servicesData.length - cardsToShow ? prev + 1 : 0
    );
  };

  // Button click handlers with timer reset
  const handleLeft = () => {
    clearInterval(autoScrollRef.current); // Stop auto-scroll on button click
    setCurrent((prev) => (prev > 0 ? prev - 1 : servicesData.length - cardsToShow));
    resetAutoScroll(); // Restart the auto-scroll
  };

  const handleRight = () => {
    clearInterval(autoScrollRef.current); // Stop auto-scroll on button click
    setCurrent((prev) =>
      prev < servicesData.length - cardsToShow ? prev + 1 : 0
    );
    resetAutoScroll(); // Restart the auto-scroll
  };

  // Reset the auto-scroll timer
  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current); // Clear the current interval
    autoScrollRef.current = setInterval(handleAutoScroll, 5000); // Set up a new interval
  };

  // Set up auto-scroll on component mount
  useEffect(() => {
    autoScrollRef.current = setInterval(handleAutoScroll, 5000); // Auto scroll every 5 seconds
    return () => clearInterval(autoScrollRef.current); // Clean up the interval on unmount
  }, [cardsToShow]);

  return (
    <section className="py-16 px-3 md:px-12 bg-[#fff]">
      <div className="max-w-7xl mx-auto">
        <Typography as="h2" variant="h2" className="text-center mb-8 text-gray-800">
          Our Expertise
        </Typography>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // Adjust the transform to account for both percentage-based translation and the gap between cards
              transform: `translateX(calc(-${current * (100 / cardsToShow)}%))`,
            }}
          >
            {servicesData.map((item, index) => (
              <Link
                key={index}
                href={`/services/${item.id}`}
                className="bg-white block border cursor-pointer rounded-lg my-3 mx-[10px] w-full shadow overflow-hidden hover:shadow-md transition-shadow duration-300"
                style={{
                  flex: `0 0 calc((100% - ${cardsToShow * 20}px) / ${cardsToShow})`, // Adjust the card width based on the number of visible cards and gap
                }}
              >
                {/* Image Section */}
                <img
                  src={item.firstImage}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
                {/* Text Content */}
                <div className="px-4 py-5">
                  <Typography as="h4" variant="h5" className="text-gray-800 line-clamp-1">
                    {item.title}
                  </Typography>
                  <Typography as="p" variant="paragraph" className="mt-2 text-gray-600 line-clamp-4">
                    {item.description}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
          <FaAngleLeft
            className="text-[#D4AF37] absolute top-1/2 left-4 z-40 cursor-pointer border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
            onClick={handleLeft}
          />
          <FaAngleRight
            className="text-[#D4AF37] absolute top-1/2 right-4 z-40 cursor-pointer border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
            onClick={handleRight}
          />
        </div>
      </div>
    </section>
  );
}
