"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Statistics() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const [clientCount, setClientCount] = useState(0);
  const [documentCount, setDocumentCount] = useState(0);
  const [turnaround, setTurnaround] = useState(0);

  // Trigger the animation when the section is in view
  useEffect(() => {
    if (inView) {
      animateCount(120, setClientCount);
      animateCount(400, setDocumentCount);
      animateCount(48, setTurnaround);
    }
  }, [inView]);

  // Function to animate counting from 0 to the target value
  const animateCount = (target, setter) => {
    let start = 0;
    const duration = 1000; // Total animation time in milliseconds
    const stepTime = Math.abs(Math.floor(duration / target)); // Time per step

    const timer = setInterval(() => {
      start += 1;
      setter(start);
      if (start === target) clearInterval(timer);
    }, stepTime);
  };

  return (
    <section ref={ref} className="bg-white py-16 px-6 md:px-12">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-5xl font-bold text-green-600">{clientCount}+</h3>
          <p className="text-gray-600">Satisfied Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-5xl font-bold text-green-600">{documentCount}+</h3>
          <p className="text-gray-600">Documents Processed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-5xl font-bold text-green-600">{turnaround} hrs</h3>
          <p className="text-gray-600">Fast Turnaround</p>
        </motion.div>
      </div>
    </section>
  );
}
