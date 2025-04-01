"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const studyDestinations = [
  { id: 1, name: "USA", image: "/images/study-in/usa.jpg", description: "Top-ranked universities with diverse programs" },
  { id: 2, name: "Canada", image: "/images/study-in/canada.jpg", description: "High-quality education with post-study work options" },
  { id: 3, name: "UK", image: "/images/study-in/uk.jpg", description: "World-class institutions with rich history" },
  { id: 4, name: "Australia", image: "/images/study-in/australia.jpg", description: "Innovative research and stunning campuses" },
  { id: 5, name: "Germany", image: "/images/study-in/germany.jpg", description: "Tuition-free education at top technical schools" },
  { id: 6, name: "France", image: "/images/study-in/france.jpg", description: "Cultural excellence with affordable tuition" },
];

const CARD_WIDTH = 350;
const GAP = 20;
const SWIPE_THRESHOLD = 50;

const StudyIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = studyDestinations.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const realIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

  const scrollToIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
    if (!carouselRef.current) return;
    const scrollAmount = (CARD_WIDTH + GAP) * index;
    carouselRef.current.scrollTo({ left: scrollAmount, behavior });
  };

  const handleNavigation = (direction: 'next' | 'prev' | number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (direction === 'next') {
      setCurrentIndex(prev => prev + 1);
      scrollToIndex(currentIndex + 1);
    } else if (direction === 'prev') {
      setCurrentIndex(prev => prev - 1);
      scrollToIndex(currentIndex - 1);
    } else {
      const delta = direction - realIndex;
      setCurrentIndex(prev => prev + delta);
      scrollToIndex(currentIndex + delta);
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (Math.abs(difference) > SWIPE_THRESHOLD) {
      if (difference > 0) {
        handleNavigation('next');
      } else {
        handleNavigation('prev');
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (isTransitioning) return;

      const { scrollLeft, scrollWidth } = carousel;
      const maxScroll = scrollWidth - carousel.clientWidth;
      const threshold = CARD_WIDTH * 2;

      if (scrollLeft >= maxScroll - threshold) {
        carousel.style.scrollBehavior = 'auto';
        const newIndex = currentIndex - totalItems;
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex, 'auto');
        carousel.style.scrollBehavior = 'smooth';
      } else if (scrollLeft <= threshold) {
        carousel.style.scrollBehavior = 'auto';
        const newIndex = currentIndex + totalItems;
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex, 'auto');
        carousel.style.scrollBehavior = 'smooth';
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [currentIndex, isTransitioning, totalItems]);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <section id="study-in" className="relative w-full bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Study Around the World
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your ideal study destination with our global education partners
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 px-4 overflow-x-hidden scroll-smooth py-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {[...studyDestinations, ...studyDestinations, ...studyDestinations].map((destination, i) => (
              <motion.div
                key={`${destination.id}-${i}`}
                initial={{ opacity: 0.9 }}
                whileHover={{ scale: 1.03, opacity: 1 }}
                className="relative flex-shrink-0 w-[350px] h-96 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  priority={i === realIndex + totalItems}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="mb-4">{destination.description}</p>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => handleNavigation('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all z-20 md:flex hidden items-center justify-center"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleNavigation('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all z-20 md:flex hidden items-center justify-center"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {studyDestinations.map((_, i) => (
              <button
                key={i}
                onClick={() => handleNavigation(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === realIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyIn;