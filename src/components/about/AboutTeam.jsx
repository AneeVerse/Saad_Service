import Image from "next/image";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Saad Ahmed Momin",
      role: "Founder & Owner & Director",
      image: "/images/about/co-founder.png",
    },
    {
      name: "Abdullah",
      role: "Team Member",
      image: "/images/about/profile.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section className="bg-gradient-to-br from-white via-gray-100 to-gray-200 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Design Section - Half Screen */}
        <div
          className="w-full md:w-1/2 bg-gradient-to-br  rounded-t-lg md:rounded-tr-none md:rounded-l-lg relative shadow-2xl overflow-hidden h-[300px] flex items-center justify-center"
          style={{ background: "url(/images/about/prfile.webp)" }}
        >
          <div className="absolute inset-0">
            <Image src={"/images/about/meet-team.webp"} alt="meet team" fill />
          </div>
          <div className="absolute inset-0 w-full h-full bg-black opacity-50">
          </div>
          <motion.div
            className="z-10 text-white font-bold text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.div>
        </div>

        {/* Team Card Section - Half Screen */}
        <div className="relative w-full md:w-1/2 h-[300px] bg-white rounded-b-lg md:rounded-bl-none md:rounded-r-lg flex items-center justify-center">
          <div
            className={`${teamMembers.length === 1 ? " hidden ": " block "} absolute top-1/2 -translate-y-1/2 left-2 z-20 cursor-pointer p-3 bg-white shadow-md rounded-full transition-transform duration-300 transform hover:shadow-lg`}
            onClick={handlePrev}
          >
            <FaAngleLeft className="text-2xl text-gray-800" />
          </div>
          <div
            className={`${teamMembers.length === 1 ? " hidden ": " block "} absolute top-1/2 -translate-y-1/2 right-2 z-20 cursor-pointer p-3 bg-white shadow-md rounded-full transition-transform duration-300 transform hover:shadow-lg`}
            onClick={handleNext}
          >
            <FaAngleRight className="text-2xl text-gray-800" />
          </div>

          <div className="relative flex items-center justify-center overflow-hidden w-full h-full">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={`absolute w-full p-6  text-center bg-white  ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                initial={{ x: index === currentIndex ? 0 : 100, opacity: 0 }}
                animate={{
                  x:
                    index === currentIndex
                      ? 0
                      : index < currentIndex
                      ? -100
                      : 100,
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto w-[150px] h-[150px] object-cover rounded-full ring-4 ring-[#D4AF37]"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-lg">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
