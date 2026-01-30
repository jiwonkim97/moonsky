import MoonLogo from "./MoonLogo";
import membersData from "@/data/members.json";

export default function Member() {
  // 8 members placed around center logo in a 3x3 grid
  // Position 4 (0-indexed, center of grid) is the band logo
  const firstHalf = membersData.slice(0, 4); // positions 0-3
  const secondHalf = membersData.slice(4, 8); // positions 5-8

  return (
    <section id="member" className="min-h-screen py-16 px-6">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">구성원 소개</h2>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl md:text-2xl tracking-widest">
              MEMBER
            </span>
            <span className="text-accent-bright">
              <MoonLogo size={28} />
            </span>
            <div className="flex-1 h-px bg-text-muted" />
          </div>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-3">
          {firstHalf.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}

          {/* Center: Band Logo */}
          <div className="aspect-square rounded-xl bg-bg-secondary flex flex-col items-center justify-center gap-2">
            <span className="text-accent-bright">
              <MoonLogo size={36} />
            </span>
            <span className="font-display text-xs tracking-widest text-text-muted">
              MOONSKY
            </span>
          </div>

          {secondHalf.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
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
  return (
    <div className="rounded-xl bg-bg-card overflow-hidden flex flex-col">
      {/* Part label */}
      <div className="text-center pt-2 px-1">
        <p className="text-[10px] text-text-secondary truncate">{member.part}</p>
      </div>

      {/* Photo placeholder */}
      <div className="aspect-square mx-2 mt-1 rounded-lg bg-bg-secondary flex items-center justify-center">
        <span className="text-text-muted text-[10px]">Photo</span>
      </div>

      {/* Name */}
      <div className="text-center py-2 px-1">
        <p className="text-sm font-bold">{member.name}</p>
        <p className="text-[10px] text-text-muted">{member.nameEn}</p>
      </div>
    </div>
  );
}
