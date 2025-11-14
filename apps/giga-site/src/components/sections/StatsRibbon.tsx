import { stats } from "@/data/sections";

export function StatsRibbon() {
  return (
    <section className="py-10">
      <div className="section-shell">
        <div className="glass-card flex gap-12 overflow-x-auto px-6 py-6 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[180px]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-white/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
