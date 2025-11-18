import { voiceHighlights } from "@/data/sections";
import { SectionHeading } from "@/components/primitives/section-heading";

export function VoiceExperienceSection() {
  return (
    <section className="py-24" id="voice">
      <div className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Natural voice"
          title="Engage with empathy"
          description="Emotionally aware agents understand tone, intent, and context. Fluidly handle accents, interrupts, and rapid turns to ensure every conversation feels natural."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="glass-card overflow-hidden">
            <div className="relative aspect-video">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1600&q=80"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-business-teamwork-2742/1080p.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Voice experience
                </p>
                <p className="text-2xl font-semibold text-white">
                  Ultra-low latency conversations
                </p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="grid gap-4">
              {voiceHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {highlight.title}
                  </p>
                  <p className="text-base text-white/75">{highlight.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Voice KPI
                </p>
                <p className="text-3xl font-semibold text-white">480ms</p>
                <p className="text-xs text-white/70">Round-trip latency</p>
              </div>
              <button className="rounded-full border border-white/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]">
                Play demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
