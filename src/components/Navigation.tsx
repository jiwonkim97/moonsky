"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "profile", label: "PROFILE" },
  { id: "member", label: "MEMBER" },
  { id: "setlist", label: "SET LIST" },
  { id: "contact", label: "CONTACT" },
];

interface NavigationProps {
  active: string;
  onTabChange: (id: string) => void;
}

export default function Navigation({ active, onTabChange }: NavigationProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (id: string, index: number) => {
    onTabChange(id);
    tabRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <nav className="sticky top-0 z-50">
      <div
        className="relative"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7, 11, 26, 0.97) 0%, rgba(7, 11, 26, 0.85) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-accent to-transparent" />

        <div className="tab-scroll relative flex items-center gap-1.5 px-4 py-3.5 overflow-x-auto">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => handleClick(item.id, i)}
              className={`relative flex-shrink-0 px-4 py-2 rounded-full text-[11px] tracking-[0.16em] font-medium transition-colors duration-300 ${
                active === item.id
                  ? "text-accent-bright"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-accent-bright/8 border border-accent-bright/15"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
