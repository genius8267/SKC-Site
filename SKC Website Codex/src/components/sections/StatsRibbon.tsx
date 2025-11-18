import { SectionHeading } from "@/components/primitives/section-heading";
import {
  corporateHighlights,
  corporateMetrics,
  type Highlight,
  type Metric,
} from "@/data/sections";

type CorporateOverviewProps = {
  metrics?: Metric[];
  highlights?: Highlight[];
};

export function StatsRibbon({
  metrics = corporateMetrics,
  highlights = corporateHighlights,
}: CorporateOverviewProps) {
  if (!metrics.length && !highlights.length) {
    return (
      <section className="page-shell" id="corporation">
        <div className="skc-card" data-testid="corporation-fallback">
          <h2>Corporate snapshot data is empty.</h2>
          <p>Add metrics and highlights in src/data/sections.ts to render this section.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="corporation"
      className="page-shell"
      style={{ marginTop: "var(--space-8)" }}
    >
      <SectionHeading
        eyebrow="Corporation"
        title="Technology transformation by SKC changes the world."
        description="Four decades of material science, sustainable manufacturing, and bold leadership form the foundation of SKC."
      />
      <div className="stat-grid" style={{ marginTop: "var(--space-5)" }}>
        {metrics.map((metric) => (
          <article key={metric.label} className="skc-card" style={{ minHeight: "180px" }}>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--color-ink-muted)" }}>
              {metric.label}
            </p>
            <p style={{ fontSize: "2.5rem", margin: "0.25rem 0" }}>{metric.value}</p>
            {metric.helper ? (
              <span style={{ fontSize: "0.9rem", color: "var(--color-ink-soft)" }}>
                {metric.helper}
              </span>
            ) : null}
          </article>
        ))}
      </div>
      <div
        className="stat-grid"
        style={{ marginTop: "var(--space-5)" }}
      >
        {highlights.map((highlight) => (
          <article key={highlight.title} className="skc-card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {highlight.tag ? <span className="badge">{highlight.tag}</span> : null}
              <h3 style={{ margin: 0 }}>{highlight.title}</h3>
            </div>
            <p style={{ color: "var(--color-ink-soft)", marginTop: "var(--space-2)" }}>
              {highlight.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
