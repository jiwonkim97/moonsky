"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Member from "./Member";
import SetList from "./SetList";
import Contact from "./Contact";
import Footer from "./Footer";

const TABS = ["profile", "member", "setlist", "contact"] as const;
type TabId = (typeof TABS)[number];

const TAB_INDEX: Record<TabId, number> = {
  profile: 0,
  member: 1,
  setlist: 2,
  contact: 3,
};

const pageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
  }),
};

const pageTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.8,
};

function SectionContent({ tab }: { tab: TabId }) {
  switch (tab) {
    case "profile":
      return <Profile />;
    case "member":
      return <Member />;
    case "setlist":
      return <SetList />;
    case "contact":
      return (
        <>
          <Contact />
          <Footer />
        </>
      );
  }
}

export default function PageView() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [direction, setDirection] = useState(0);

  const handleTabChange = useCallback(
    (id: string) => {
      const newTab = id as TabId;
      if (newTab === activeTab) return;
      const dir = TAB_INDEX[newTab] - TAB_INDEX[activeTab];
      setDirection(dir);
      setActiveTab(newTab);
    },
    [activeTab]
  );

  return (
    <>
      <Navigation active={activeTab} onTabChange={handleTabChange} />
      <main className="relative z-10 flex-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="min-h-[calc(100vh-52px)]"
          >
            <SectionContent tab={activeTab} />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
