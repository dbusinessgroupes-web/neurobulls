"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        setDone(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={
        done
          ? { opacity: 1, textShadow: ["0 0 0px #C9A84C", "0 0 16px #C9A84C", "0 0 0px #C9A84C"] }
          : inView
            ? { opacity: 1 }
            : {}
      }
      transition={done ? { duration: 0.8, ease: "easeInOut" } : undefined}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}
