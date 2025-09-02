"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SmoothAnimationsProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: boolean;
  opacity?: boolean;
}

const SmoothAnimations = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
  x = 0,
  scale = false,
  opacity = true,
}: SmoothAnimationsProps) => {
  return (
    <motion.div
      initial={{
        opacity: opacity ? 0 : 1,
        y: y,
        x: x,
        scale: scale ? 0.95 : 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SmoothAnimations;
