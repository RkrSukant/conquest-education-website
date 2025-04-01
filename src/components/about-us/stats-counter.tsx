"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      controls.start({
        opacity: 1,
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      });

      return () => clearInterval(timer);
    }
  }, [inView, value, duration, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={`text-white ${className}`}
    >
      {Math.floor(count).toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default StatsCounter;