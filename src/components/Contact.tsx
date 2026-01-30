"use client";

import { motion } from "framer-motion";
import FadeIn from "./motion/FadeIn";

export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="mb-12">
          <p className="font-display text-[11px] tracking-[0.3em] text-accent/70 mb-2.5 uppercase">
            Contact
          </p>
          <h2 className="text-[1.6rem] font-bold mb-3.5">연락하기</h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-accent/40" />
            <div className="w-1 h-1 rounded-full bg-accent/30" />
          </div>
        </FadeIn>

        {/* Instagram Card */}
        <FadeIn direction="up" delay={0.1}>
          <motion.div
            className="relative rounded-2xl border border-border overflow-hidden group"
            whileHover={{
              y: -3,
              boxShadow:
                "0 0 0 1px rgba(201, 184, 122, 0.15), 0 8px 30px rgba(0,0,0,0.3), 0 0 50px rgba(201, 184, 122, 0.06)",
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
          >
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent group-hover:via-accent/60 transition-all duration-500" />

            {/* Inner glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(201, 184, 122, 0.04), transparent 60%)",
              }}
            />

            <div className="relative p-10 text-center">
              {/* Instagram icon */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-border-accent/20 bg-gradient-to-br from-accent/5 to-transparent group-hover:border-border-accent/35 transition-all duration-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent/70 group-hover:text-accent transition-colors duration-400"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>

              <p className="font-display text-[10px] tracking-[0.35em] text-text-muted uppercase mb-4">
                Instagram
              </p>

              <p className="text-xl font-medium text-accent-bright mb-7 tracking-wide">
                @moonsky_band
              </p>

              <div className="w-12 h-px bg-gradient-to-r from-transparent via-border-accent to-transparent mx-auto mb-7" />

              <p className="text-text-muted text-[12px] leading-[1.8] font-light">
                공연 문의 및 기타 연락은
                <br />
                인스타그램 DM으로 부탁드립니다.
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
