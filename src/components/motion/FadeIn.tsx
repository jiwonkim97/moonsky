"use client";

import { motion, useInView, type TargetAndTransition } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  viewportMargin?: string;
}

function getHidden(direction: Direction, distance: number): TargetAndTransition {
  const map: Record<Direction, TargetAndTransition> = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: distance },
    right: { opacity: 0, x: -distance },
    none: { opacity: 0 },
  };
  return map[direction];
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  className,
  viewportMargin = "-60px",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: viewportMargin as `${number}px`,
  });

  const hidden = getHidden(direction, distance);
  const visible: TargetAndTransition = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      className={className}
    >
      {children}
    </motion.div>
  );
}
