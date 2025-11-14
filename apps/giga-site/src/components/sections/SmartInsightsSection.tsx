import { insights, suggestions } from "@/data/sections";
import { SectionHeading } from "@/components/primitives/section-heading";

export function SmartInsightsSection() {
  return (
    <section className="py-24" id="insights">
      <div className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Smart Insights"
          title="AI turns every conversation into clarity."
          description="It surfaces patterns, uncovers root causes, quantifies impact, and recommends next actions that drive KPIs and revenue."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Smart suggestions
            </p>
            <p className="mt-3 text-2xl font-semibold">
              Designed to help you hit KPIs
            </p>
            <div className="mt-6 space-y-5">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {suggestion.title}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {suggestion.improvement}
                  </p>
                  <p className="text-sm text-white/70">{suggestion.description}</p>
                  <p className="text-xs text-white/50">{suggestion.impact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-sm">
              <div>
                <p className="uppercase tracking-[0.3em] text-white/40">
                  Resolution rate improvement (voice)
                </p>
                <p className="text-4xl font-semibold text-white">+14%</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Tickets sampled
                </p>
                <p className="text-xl font-semibold text-white">1,302 / 2,170</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {insights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{insight.title}</p>
                    <span className="pill bg-white/10 text-xs">
                      {insight.type}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-white/70">
                    <p>{insight.tickets} tickets</p>
                    <p className="font-semibold text-emerald-300">{insight.lift}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
