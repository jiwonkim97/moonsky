"use client";

import bandData from "@/data/band.json";
import { motion } from "framer-motion";
import MoonLogo from "./MoonLogo";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function Profile() {
  return (
    <section
      className="relative min-h-[calc(100vh-52px)] flex flex-col items-center justify-center px-6"
    >
      {/* Atmospheric moon orbs */}
      <motion.div
        className="absolute top-16 right-4 w-32 h-32 moon-orb-hero opacity-50"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
      <div
        className="absolute top-12 right-0 w-48 h-48 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 236, 208, 0.5), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <motion.div
        className="absolute top-64 left-2 w-20 h-20 moon-orb opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {/* Content */}
      <motion.div
        className="relative text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Moon icon */}
        <motion.div
          className="flex justify-center mb-10 text-moon"
          variants={fadeScale}
        >
          <MoonLogo size={72} />
        </motion.div>

        {/* Band name Korean */}
        <motion.h1
          className="text-[3.2rem] font-bold leading-none mb-4"
          variants={fadeUp}
        >
          달하늘
        </motion.h1>

        {/* Band name English */}
        <motion.p
          className="font-display text-[1.7rem] italic tracking-[0.25em] text-accent-bright mb-2"
          variants={fadeUp}
        >
          MOONSKY
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-3 my-9"
          variants={fadeIn}
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent to-accent/40"
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />
          <div className="relative w-1.5 h-1.5">
            <div className="absolute inset-0 rounded-full bg-accent/60" />
            <div className="absolute -inset-1 rounded-full bg-accent/15" />
          </div>
          <motion.div
            className="h-px bg-gradient-to-l from-transparent to-accent/40"
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-display text-lg italic text-text-secondary tracking-wide mb-12"
          variants={fadeUp}
        >
          직장인밴드
        </motion.p>

        {/* Performance info card */}
        <motion.div
          className="shimmer-card glass-accent rounded-2xl px-7 py-6"
          variants={fadeUp}
          whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400 } }}
        >
          <p className="font-display text-[11px] tracking-[0.3em] text-accent/80 mb-4 uppercase">
            Next Performance
          </p>
          <p className="text-text-primary text-[15px] font-medium mb-1.5">
            {bandData.performance.date}
          </p>
          <p className="text-text-secondary text-sm">
            {bandData.performance.time}
            <span className="inline-block mx-2 text-accent/30">
              &middot;
            </span>
            {bandData.performance.venue}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-text-muted text-[9px] tracking-[0.35em] uppercase font-light">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted/40 to-transparent animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
