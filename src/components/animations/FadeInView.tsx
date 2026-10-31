"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeInView({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInViewProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const offsets = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
