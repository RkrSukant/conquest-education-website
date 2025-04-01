"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PromotionalBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const slides = [
    {
      type: "advertisement",
      title: "Free Consultation",
      description: "Get expert advice for your study abroad journey",
      image: "/promo/consult.jpg",
      cta: "Book Now",
      link: "/consult",
      showButton: true
    },
    {
      type: "advertisement", 
      title: "Visa Assistance",
      description: "98% success rate with our visa experts",
      image: "/promo/visa.jpg",
      showButton: false
    },
    {
      type: "blog",
      title: "Top 5 Universities in Germany",
      excerpt: "Discover the best options for international students",
      image: "/promo/germany-blog.jpg",
      cta: "Read More",
      link: "/blog/germany"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (diff > 50) goToNext();
    if (diff < -50) goToPrev();
  };

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false}>
            {slides.map((slide, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="max-w-2xl">
                      {slide.type === "blog" && (
                        <span className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">
                          BLOG
                        </span>
                      )}
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {slide.title}
                      </h3>
                      
                      <p className="text-sm md:text-base mb-4">
                        {slide.type === "advertisement" ? slide.description : slide.excerpt}
                      </p>
                      
                      {(slide.type === "blog" || slide.showButton) && (
                        <a
                          href={slide.link}
                          className="inline-block bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          {slide.cta}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;