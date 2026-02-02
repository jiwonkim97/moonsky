"use client";

import bandData from "@/data/band.json";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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
      className="relative min-h-[calc(100vh-52px)] flex flex-col items-center justify-center px-6 pb-20"
    >
      {/* Celestial bodies — wrapper divs for positioning, motion.div for animation */}
      {/* Dark gas giant - top right corner, half hidden */}
      <div className="absolute -top-16 -right-16 w-52 h-52">
        <motion.div
          className="w-full h-full planet-dark"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>

      {/* Hero moon - warm, upper right near gas giant */}
      <div className="absolute top-14 right-3 w-20 h-20">
        <motion.div
          className="w-full h-full moon-orb-hero"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
        />
      </div>

      {/* Small warm moon - left edge */}
      <div className="absolute top-[42%] -left-3 w-12 h-12">
        <motion.div
          className="w-full h-full moon-orb"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        />
      </div>

      {/* Tiny distant planet */}
      <div className="absolute bottom-32 right-10 w-4 h-4">
        <motion.div
          className="w-full h-full planet-distant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1.3 }}
        />
      </div>

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
          className="font-display text-lg italic text-text-secondary tracking-wide mb-10"
          variants={fadeUp}
        >
          첫 번째 공연에 초대합니다
        </motion.p>

        {/* Group photo */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-6 border border-border/50"
          variants={fadeUp}
        >
          <img
            src="/images/profile/단체1.jpg"
            alt="달하늘 단체사진"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/40 to-transparent" />
        </motion.div>

        {/* Performance info card */}
        <motion.div variants={fadeUp}>
          <TiltCard />
        </motion.div>

        {/* Map card */}
        <motion.a
          href="https://map.naver.com/p/search/펄스 라이브홀"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 rounded-2xl border border-border bg-bg-card/40 px-5 py-4 group"
          variants={fadeUp}
          whileHover={{
            borderColor: "rgba(201, 184, 122, 0.25)",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent/8 border border-border-accent/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent/70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium text-text-primary">서울 서초구 주흥길 12 B1</p>
              <p className="text-[10px] text-text-muted mt-0.5">신논현역 1번출구 도보 5분</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-text-muted group-hover:text-accent/70 transition-colors flex-shrink-0">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.a>
      </motion.div>

    </section>
  );
}

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  function handleMouse(e: React.MouseEvent | React.TouchEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    mouseX.set((clientX - rect.left) / rect.width - 0.5);
    mouseY.set((clientY - rect.top) / rect.height - 0.5);
  }

  function handleReset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: 600 }}>
      <motion.div
        ref={ref}
        className="shimmer-card glass-accent rounded-2xl px-7 py-6 cursor-default"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35), 0 0 40px rgba(201, 184, 122, 0.04)",
        }}
        whileTap={{ scale: 0.97 }}
        onMouseMove={handleMouse}
        onTouchMove={handleMouse}
        onMouseLeave={handleReset}
        onTouchEnd={handleReset}
      >
        <p className="font-display text-[11px] tracking-[0.3em] text-accent/80 mb-4 uppercase">
          Next Live
        </p>
        <p className="text-text-primary text-[15px] font-medium mb-1.5">
          {bandData.performance.date}
        </p>
        <p className="text-text-secondary text-sm mb-1">
          {bandData.performance.time}
          <span className="inline-block mx-2 text-accent/30">
            &middot;
          </span>
          {bandData.performance.venue}
        </p>
        <p className="text-text-muted text-xs">
          {bandData.performance.address}
        </p>
      </motion.div>
    </div>
  );
}
