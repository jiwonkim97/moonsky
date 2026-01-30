"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

interface StaggerItemProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  className?: string;
}

function getVariants(direction: Direction, distance: number, duration: number) {
  const baseVisible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  };

  const hiddenMap: Record<Direction, Record<string, number>> = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: distance },
    right: { opacity: 0, x: -distance },
    none: { opacity: 0 },
    scale: { opacity: 0, scale: 0.9 },
  };

  return {
    hidden: hiddenMap[direction],
    visible: baseVisible,
  };
}

export default function StaggerItem({
  children,
  direction = "up",
  distance = 24,
  duration = 0.5,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={getVariants(direction, distance, duration)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
