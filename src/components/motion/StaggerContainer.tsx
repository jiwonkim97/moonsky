"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  viewportMargin?: string;
}

export default function StaggerContainer({
  children,
  stagger = 0.08,
  delay = 0,
  className,
  once = true,
  viewportMargin = "-40px",
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: viewportMargin as `${number}px`,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
