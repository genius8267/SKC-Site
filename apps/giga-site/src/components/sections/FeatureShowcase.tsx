import { features } from "@/data/sections";
import { SectionHeading } from "@/components/primitives/section-heading";
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
=======
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4

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
<<<<<<< HEAD
            <Card
              key={feature.title}
              className="feature-card group"
            >
              <CardContent className="p-6 space-y-4">
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  {feature.metric}
                </span>
                <h3 className="text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <div className="mt-auto flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Ship in under 2 weeks with managed onboarding
                </div>
              </CardContent>
            </Card>
=======
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
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
          ))}
        </div>
      </div>
    </section>
  );
}
