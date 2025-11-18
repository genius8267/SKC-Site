import { features } from "@/data/sections";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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
          ))}
        </div>
      </div>
    </section>
  );
}
