import MoonLogo from "./MoonLogo";
import setlistData from "@/data/setlist.json";

export default function SetList() {
  return (
    <section id="setlist" className="min-h-screen py-16 px-6">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">공연 곡 목록</h2>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl tracking-widest">
              SET LIST
            </span>
            <span className="text-accent-bright">
              <MoonLogo size={28} />
            </span>
            <div className="flex-1 h-px bg-text-muted" />
          </div>
        </div>

        {/* Song List */}
        <div className="flex flex-col gap-3">
          {setlistData.map((song) => (
            <div
              key={song.order}
              className="flex items-center gap-4 rounded-xl bg-bg-card px-5 py-4"
            >
              <span className="font-display text-2xl font-bold text-accent-bright w-8 text-center">
                {String(song.order).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{song.title}</p>
                <p className="text-xs text-text-muted truncate">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
