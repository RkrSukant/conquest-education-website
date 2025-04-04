"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("study-in");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Students studying abroad"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className="object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/45"></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">Your Global Education</span>
            <span className="text-[#327fc6]">Journey Begins Here</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Expert guidance to help you study at the world's top universities
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToNextSection}
              className="px-8 py-3 sm:px-10 sm:py-4 text-lg font-semibold bg-[#327fc6] hover:bg-[#285f94] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Explore Destinations
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNextSection}
            aria-label="Scroll down"
            className="animate-bounce p-2 rounded-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;