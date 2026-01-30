"use client";

import { useEffect, useState } from "react";

const LAYER_1_STARS = [
  { top: "4%", left: "8%", delay: "0s", duration: "3.2s" },
  { top: "7%", left: "82%", delay: "1.4s", duration: "4.1s", bright: true },
  { top: "13%", left: "42%", delay: "0.6s", duration: "3.6s" },
  { top: "18%", left: "68%", delay: "2.1s", duration: "2.9s" },
  { top: "23%", left: "18%", delay: "0.9s", duration: "4.3s", bright: true },
  { top: "11%", left: "57%", delay: "1.7s", duration: "3.1s" },
  { top: "28%", left: "88%", delay: "0.4s", duration: "3.9s" },
  { top: "33%", left: "12%", delay: "2.3s", duration: "3.3s" },
  { top: "38%", left: "52%", delay: "1.1s", duration: "4.2s", bright: true },
  { top: "43%", left: "76%", delay: "0.8s", duration: "2.6s" },
  { top: "48%", left: "28%", delay: "1.9s", duration: "3.6s" },
  { top: "53%", left: "62%", delay: "0.3s", duration: "4.6s" },
  { top: "58%", left: "6%", delay: "1.5s", duration: "3.1s", bright: true },
  { top: "63%", left: "38%", delay: "2.6s", duration: "3.9s" },
  { top: "68%", left: "72%", delay: "0.7s", duration: "2.9s" },
  { top: "73%", left: "48%", delay: "1.8s", duration: "4.3s" },
  { top: "78%", left: "22%", delay: "0.5s", duration: "3.4s", bright: true },
  { top: "83%", left: "85%", delay: "2.2s", duration: "3.1s" },
  { top: "88%", left: "32%", delay: "1.2s", duration: "4.1s" },
  { top: "93%", left: "67%", delay: "1.0s", duration: "3.6s" },
  { top: "2%", left: "28%", delay: "1.7s", duration: "4.6s" },
  { top: "16%", left: "3%", delay: "2.4s", duration: "3.1s" },
  { top: "46%", left: "93%", delay: "0.2s", duration: "3.8s", bright: true },
  { top: "70%", left: "10%", delay: "2.0s", duration: "3.0s" },
  { top: "86%", left: "53%", delay: "2.8s", duration: "4.2s" },
];

const LAYER_2_TINY = [
  { top: "2%", left: "22%", delay: "0.3s", duration: "2.5s" },
  { top: "6%", left: "55%", delay: "1.1s", duration: "3.0s" },
  { top: "10%", left: "90%", delay: "0.8s", duration: "2.2s" },
  { top: "15%", left: "33%", delay: "2.0s", duration: "2.8s" },
  { top: "22%", left: "78%", delay: "0.5s", duration: "3.2s" },
  { top: "27%", left: "5%", delay: "1.6s", duration: "2.4s" },
  { top: "32%", left: "65%", delay: "0.2s", duration: "2.9s" },
  { top: "37%", left: "40%", delay: "2.3s", duration: "2.6s" },
  { top: "42%", left: "15%", delay: "1.3s", duration: "3.1s" },
  { top: "50%", left: "85%", delay: "0.7s", duration: "2.3s" },
  { top: "56%", left: "48%", delay: "1.9s", duration: "2.7s" },
  { top: "62%", left: "20%", delay: "0.4s", duration: "3.3s" },
  { top: "67%", left: "92%", delay: "2.5s", duration: "2.5s" },
  { top: "74%", left: "58%", delay: "1.0s", duration: "2.8s" },
  { top: "80%", left: "35%", delay: "0.6s", duration: "3.0s" },
  { top: "87%", left: "75%", delay: "2.1s", duration: "2.4s" },
  { top: "92%", left: "10%", delay: "1.4s", duration: "2.6s" },
  { top: "96%", left: "45%", delay: "0.9s", duration: "3.2s" },
  { top: "9%", left: "72%", delay: "1.8s", duration: "2.3s" },
  { top: "35%", left: "95%", delay: "2.7s", duration: "2.9s" },
];

export default function Starfield() {
  const [shootingStars, setShootingStars] = useState<
    { id: number; top: string; left: string }[]
  >([]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      const top = `${Math.random() * 40}%`;
      const left = `${Math.random() * 60 + 10}%`;
      const id = counter++;
      setShootingStars((prev) => [...prev, { id, top, left }]);
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, 1600);
    }, 6000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Nebula-like color patches */}
      <div
        className="absolute rounded-full opacity-[0.03]"
        style={{
          top: "15%",
          left: "60%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(120, 100, 200, 0.8), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full opacity-[0.025]"
        style={{
          top: "55%",
          left: "10%",
          width: "180px",
          height: "180px",
          background: "radial-gradient(circle, rgba(100, 130, 200, 0.7), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Layer 1: Main stars */}
      {LAYER_1_STARS.map((s, i) => (
        <div
          key={`l1-${i}`}
          className={`star ${s.bright ? "star-bright" : ""}`}
          style={{
            top: s.top,
            left: s.left,
            ["--delay" as string]: s.delay,
            ["--duration" as string]: s.duration,
          }}
        />
      ))}

      {/* Layer 2: Tiny distant stars */}
      {LAYER_2_TINY.map((s, i) => (
        <div
          key={`l2-${i}`}
          className="star star-tiny"
          style={{
            top: s.top,
            left: s.left,
            ["--delay" as string]: s.delay,
            ["--duration" as string]: s.duration,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((s) => (
        <div
          key={s.id}
          className="shooting-star"
          style={{ top: s.top, left: s.left }}
        />
      ))}
    </div>
  );
}
