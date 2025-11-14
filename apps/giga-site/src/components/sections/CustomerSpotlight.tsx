import { customerSpotlight } from "@/data/sections";

export function CustomerSpotlight() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <div className="glass-card grid gap-8 p-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="pill bg-white/5 text-white/70">Customer spotlight</p>
            <h3 className="mt-4 text-3xl font-semibold">
              See how enterprises scaled customer engagement with Giga
            </h3>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {customerSpotlight.metricLabel}
              </p>
              <p className="text-4xl font-semibold text-white">
                {customerSpotlight.metricValue}
              </p>
              <p className="text-sm text-white/70">{customerSpotlight.title}</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/80">&ldquo;{customerSpotlight.quote}&rdquo;</p>
            <div>
              <p className="text-sm font-semibold text-white">
                {customerSpotlight.person}
              </p>
              <p className="text-sm text-white/60">{customerSpotlight.role}</p>
            </div>
            <button className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/80">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
