import { features } from "@/data/sections";
import { SectionHeading } from "@/components/primitives/section-heading";

export function FeatureShowcase() {
  return (
    <section className="py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Built to handle complexity"
          description="Fine-tune every nuance to match your business, then let AI supervise end-to-end support motions with confidence."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card relative flex flex-col gap-4 p-6"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-white/40">
                {feature.metric}
              </span>
              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70">{feature.description}</p>
              <div className="mt-auto flex items-center gap-2 text-sm text-white/60">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                Ship in under 2 weeks with managed onboarding
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
