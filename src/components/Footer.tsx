"use client";

import FadeIn from "./motion/FadeIn";
import MoonLogo from "./MoonLogo";

export default function Footer() {
  return (
    <footer className="pt-8 pb-14 px-6">
      <div className="max-w-lg mx-auto">
        {/* Gradient separator */}
        <div className="section-divider mb-10" />

        <FadeIn direction="none" duration={0.8}>
          <div className="text-center">
            {/* Moon logo */}
            <div className="flex justify-center mb-5 text-accent/25">
              <MoonLogo size={22} />
            </div>

            <p className="font-display text-[10px] tracking-[0.25em] text-text-muted/60">
              &copy; 2025 달하늘 MOONSKY BAND
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
