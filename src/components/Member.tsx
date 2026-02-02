"use client";

import { motion } from "framer-motion";
import MoonLogo from "./MoonLogo";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import membersData from "@/data/members.json";

const PART_ICONS: Record<string, string> = {
  "보컬": "🎤",
  "키보드": "🎹",
  "드럼": "🥁",
  "기타": "🎸",
  "베이스": "🎸",
};

const PART_COLORS: Record<string, string> = {
  "보컬": "rgba(232, 180, 120, 0.12)",
  "키보드": "rgba(160, 140, 220, 0.12)",
  "드럼": "rgba(220, 140, 140, 0.12)",
  "기타": "rgba(140, 200, 180, 0.12)",
  "베이스": "rgba(180, 160, 120, 0.12)",
};

function getPartIcon(part: string): string {
  for (const [key, icon] of Object.entries(PART_ICONS)) {
    if (part.includes(key)) return icon;
  }
  return "🎵";
}

function getPartColor(part: string): string {
  for (const [key, color] of Object.entries(PART_COLORS)) {
    if (part.includes(key)) return color;
  }
  return "rgba(180, 180, 200, 0.08)";
}

export default function Member() {
  const firstHalf = membersData.slice(0, 4);
  const secondHalf = membersData.slice(4);

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" className="mb-12">
          <p className="font-display text-[11px] tracking-[0.3em] text-accent/90 mb-2.5 uppercase">
            Our Members
          </p>
          <h2 className="text-[1.6rem] font-bold mb-3.5">구성원 소개</h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-accent/40" />
            <div className="w-1 h-1 rounded-full bg-accent/30" />
          </div>
        </FadeIn>

        {/* 3x3 Grid */}
        <StaggerContainer stagger={0.07} className="grid grid-cols-3 gap-3">
          {firstHalf.map((member) => (
            <StaggerItem key={member.id} direction="scale">
              <MemberCard member={member} />
            </StaggerItem>
          ))}

          {/* Center: Band Logo */}
          <StaggerItem direction="scale">
            <div className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2.5 border border-border-accent/25 bg-gradient-to-br from-bg-secondary/60 to-bg-deep/80 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(201, 184, 122, 0.8), transparent 70%)",
                }}
              />
              <span className="relative text-accent-bright">
                <MoonLogo size={30} />
              </span>
              <span className="relative font-display text-[9px] italic tracking-[0.25em] text-accent/60">
                MOONSKY
              </span>
            </div>
          </StaggerItem>

          {secondHalf.map((member) => (
            <StaggerItem key={member.id} direction="scale">
              <MemberCard member={member} />
            </StaggerItem>
          ))}

          {/* Empty member slot */}
          <StaggerItem direction="scale">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <img
                src="/images/members/멤버빈칸.jpg"
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function MemberCard({
  member,
}: {
  member: {
    id: number;
    name: string;
    nameEn: string;
    part: string;
    image: string;
  };
}) {
  const icon = getPartIcon(member.part);
  const partColor = getPartColor(member.part);
  const partName = member.part.split(" | ")[0];

  return (
    <motion.div
      className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-bg-card to-bg-deep border border-border"
      whileHover={{
        scale: 1.04,
        borderColor: "rgba(201, 184, 122, 0.35)",
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Member photo */}
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle part-colored overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${partColor}, transparent 80%)`,
        }}
      />

      {/* Info overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-bg-deep/95 via-bg-deep/70 to-transparent pt-10">
        <p className="text-[11px] font-bold text-text-primary leading-tight">
          {member.name}
        </p>
        <p className="text-[9px] text-accent/90 mt-0.5 font-light tracking-wide">
          {partName}
        </p>
      </div>
    </motion.div>
  );
}
