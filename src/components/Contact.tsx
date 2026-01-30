import MoonLogo from "./MoonLogo";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] py-16 px-6">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">연락하기</h2>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl tracking-widest">
              CONTACT US
            </span>
            <span className="text-accent-bright">
              <MoonLogo size={28} />
            </span>
            <div className="flex-1 h-px bg-text-muted" />
          </div>
        </div>

        {/* Instagram Link */}
        <div className="rounded-xl bg-bg-card p-6 text-center">
          <p className="font-display text-lg tracking-widest mb-4">
            OUR INSTAGRAM
          </p>
          <div className="inline-block border-b-2 border-accent-bright pb-1">
            <span className="text-text-secondary text-sm">
              @moonsky_band
            </span>
          </div>
          <p className="text-text-muted text-xs mt-6">
            공연 문의 및 기타 연락은 인스타그램 DM으로 부탁드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
