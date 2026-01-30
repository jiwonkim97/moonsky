"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "profile", label: "PROFILE" },
  { id: "member", label: "MEMBER" },
  { id: "setlist", label: "SET LIST" },
  { id: "contact", label: "CONTACT US" },
];

export default function Navigation() {
  const [active, setActive] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        {/* Mobile hamburger */}
        <div className="flex items-center justify-between md:hidden">
          <span className="font-display text-lg tracking-wide">MOONSKY</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-text-primary p-1"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="flex flex-col gap-3 pt-4 md:hidden">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`font-display text-sm tracking-widest text-left py-1 transition-colors ${
                  active === item.id
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.id} className="flex items-center gap-8">
              <button
                onClick={() => handleClick(item.id)}
                className={`font-display text-sm tracking-widest transition-colors ${
                  active === item.id
                    ? "text-text-primary border-b border-accent-bright pb-0.5"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {item.label}
              </button>
              {i < NAV_ITEMS.length - 1 && (
                <span className="text-text-muted text-xs">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
