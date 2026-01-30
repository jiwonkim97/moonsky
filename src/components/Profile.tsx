import MoonLogo from "./MoonLogo";
import bandData from "@/data/band.json";

const GRID_PLACEHOLDERS = [
  { label: "Guitar", style: "grayscale" },
  { label: "Night Sky", style: "night" },
  { label: "Piano", style: "keys" },
  { label: "Band Photo", style: "photo" },
  { label: "HELLO\nWELCOME\n♡♡♡", style: "welcome" },
  { label: "Keyboard", style: "keys" },
  { label: "Polaroid", style: "photo" },
  { label: "Drums", style: "drums" },
  { label: "Microphone", style: "mic" },
];

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen flex flex-col items-center">
      {/* Hero */}
      <div className="text-center pt-16 pb-10 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">달하늘 밴드</h1>
        <p className="font-display text-2xl md:text-3xl tracking-widest mb-6">
          MOON SKY BAND
        </p>
        <div className="flex justify-center text-accent-bright">
          <MoonLogo size={56} />
        </div>
      </div>

      {/* Performance info */}
      <div className="text-center mb-8 px-6">
        <p className="text-text-secondary text-sm">
          {bandData.performance.date} {bandData.performance.time}
        </p>
        <p className="text-text-secondary text-sm">{bandData.performance.venue}</p>
      </div>

      {/* 3x3 Mood Grid */}
      <div className="w-full max-w-lg px-6 pb-16">
        <div className="grid grid-cols-3 gap-2">
          {GRID_PLACEHOLDERS.map((item, i) => (
            <div
              key={i}
              className={`aspect-square rounded-lg flex items-center justify-center text-center text-xs p-2 ${
                item.style === "welcome"
                  ? "bg-bg-card text-text-primary font-medium"
                  : "bg-bg-secondary"
              }`}
            >
              {item.style === "welcome" ? (
                <div>
                  <p className="text-sm font-bold mb-1">HELLO</p>
                  <p className="text-xs text-text-secondary">WELCOME</p>
                  <p className="text-text-muted mt-1">♡♡♡</p>
                </div>
              ) : (
                <span className="text-text-muted text-[10px]">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
