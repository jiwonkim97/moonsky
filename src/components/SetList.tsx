"use client";

import { motion } from "framer-motion";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import setlistData from "@/data/setlist.json";

export default function SetList() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="mb-12">
          <p className="font-display text-[11px] tracking-[0.3em] text-accent/70 mb-2.5 uppercase">
            Set List
          </p>
          <h2 className="text-[1.6rem] font-bold mb-3.5">공연 곡 목록</h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-accent/40" />
            <div className="w-1 h-1 rounded-full bg-accent/30" />
          </div>
        </FadeIn>

        {/* Song List */}
        <StaggerContainer stagger={0.06} className="flex flex-col gap-2.5">
          {setlistData.map((song) => (
            <StaggerItem key={song.order} direction="up" distance={20}>
              <SongCard song={song} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function SongCard({ song }: { song: { order: number; title: string; artist: string } }) {
  return (
    <motion.div
      className="group relative flex items-center gap-4 rounded-2xl px-5 py-[18px] border border-border bg-bg-card/40 overflow-hidden"
      whileHover={{
        y: -2,
        boxShadow: "0 0 0 1px rgba(201, 184, 122, 0.18), 0 6px 24px rgba(0,0,0,0.25), 0 0 40px rgba(201, 184, 122, 0.05)",
        borderColor: "rgba(201, 184, 122, 0.25)",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.985 }}
    >
      {/* Hover accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent/0 group-hover:bg-accent/50 transition-all duration-400 rounded-full" />

      {/* Number */}
      <span className="font-display text-[1.4rem] font-light text-accent/30 group-hover:text-accent/60 w-8 text-right tabular-nums transition-colors duration-400">
        {String(song.order).padStart(2, "0")}
      </span>

      {/* Divider */}
      <div className="w-px h-8 bg-border group-hover:bg-border-accent/30 transition-colors duration-400" />

      {/* Song info */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-text-primary truncate group-hover:text-accent-bright transition-colors duration-300">
          {song.title}
        </p>
        <p className="text-[11px] text-text-muted mt-1 truncate font-light">
          {song.artist}
        </p>
      </div>

      {/* Play icon hint */}
      <motion.div
        className="text-accent/50"
        initial={{ opacity: 0, x: 4 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
