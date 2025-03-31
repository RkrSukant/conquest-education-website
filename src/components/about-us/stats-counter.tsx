"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface StatsCounterProps {
  value: number;
  className?: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter = ({
  value,
  className = "",
  suffix = "",
  duration = 2,
}: StatsCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          // Count animation
          let start = 0;
          const increment = Math.max(1, Math.floor(value / 100));
          const incrementTime = (duration * 1000) / (value / increment);

          const timer = setInterval(() => {
            start += increment;
            setDisplayValue(Math.min(start, value));
            if (start >= value) clearInterval(timer);
          }, incrementTime);

          // Bounce animation
          controls.start({
            scale: [1, 1.1, 1],
            transition: { duration: 0.5 }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={className}
    >
      {displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default StatsCounter;