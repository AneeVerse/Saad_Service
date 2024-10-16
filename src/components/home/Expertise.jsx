"use client";
// components/Expertise.js

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Typography from "../common/Typography";
import { useState, useEffect } from "react";

const expertiseItems = [
  {
    title: "Notary Services",
    description: "Professional notary services for all your documents.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  {
    title: "MEA Services",
    description: "Official attestations by MEA for seamless authentication.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  {
    title: "Embassy Services",
    description: "Embassy-certified documents for international use.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  {
    title: "Embassy Services",
    description: "Embassy-certified documents for international use.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  {
    title: "Embassy Services",
    description: "Embassy-certified documents for international use.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  {
    title: "Embassy Services",
    description: "Embassy-certified documents for international use.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  {
    title: "Embassy",
    description: "Embassy-certified documents for international use.",
    image: "/images/home/pen-doc.webp", // Replace with your own image path
  },
  // Add more items as needed
];

export default function Expertise() {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

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

  const handleLeft = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleRight = () => {
    setCurrent((prev) =>
      prev < expertiseItems.length - cardsToShow ? prev + 1 : prev
    );
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-[#fff]"> {/* Updated background color */}
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
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg my-3 mx-[10px] w-full shadow overflow-hidden hover:shadow-md transition-shadow duration-300"
              style={{
                flex: `0 0 calc((100% - ${cardsToShow * 20}px) / ${cardsToShow})`, // Adjust the card width based on the number of visible cards and gap
              }}
            >
              {/* Image Section */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover"
              />
              {/* Text Content */}
              <div className="p-6">
                <Typography as="h3" variant="h4" className="text-gray-800">
                  {item.title}
                </Typography>
                <Typography as="p" variant="paragraph" className="mt-2 text-gray-600">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        <FaAngleLeft
          className="text-[#D4AF37] cursor-pointer border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
          onClick={handleLeft}
        />
        <FaAngleRight
          className="text-[#D4AF37] cursor-pointer border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
          onClick={handleRight}
        />
      </div>
    </section>
  );
}
