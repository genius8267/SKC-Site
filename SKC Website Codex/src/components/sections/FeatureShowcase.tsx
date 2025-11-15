import { SectionHeading } from "@/components/primitives/section-heading";
import { creationTracks, type CreationTrack } from "@/data/sections";

type CreationGridProps = {
  tracks?: CreationTrack[];
};

const accentBackground: Record<CreationTrack["accent"], string> = {
  copper: "linear-gradient(135deg, rgba(226,90,47,0.12), rgba(247,213,175,0.5))",
  navy: "linear-gradient(135deg, rgba(15,106,215,0.12), rgba(0,48,120,0.35))",
  emerald: "linear-gradient(135deg, rgba(43,122,112,0.12), rgba(113,201,173,0.4))",
  amber: "linear-gradient(135deg, rgba(255,181,99,0.12), rgba(255,240,210,0.6))",
};

export function FeatureShowcase({ tracks = creationTracks }: CreationGridProps) {
  if (!tracks.length) {
    return null;
  }

  return (
    <section
      id="creation"
      className="page-shell"
      style={{ marginTop: "var(--space-9)" }}
    >
      <SectionHeading
        eyebrow="Creation"
        title="SKC technologies enhance the value of life with new changes."
        description="Rechargeable battery, semiconductor, and eco-friendly innovations powered by deliberate engineering."
      />

      <div className="creation-grid" style={{ marginTop: "var(--space-5)" }}>
        {tracks.map((track) => (
          <article key={track.title} className="skc-card">
            <div
              style={{
                padding: "var(--space-4)",
                borderRadius: "var(--radius-lg)",
                background: accentBackground[track.accent],
                marginBottom: "var(--space-3)",
              }}
            >
              <p className="pill" style={{ background: "rgba(255,255,255,0.9)" }}>
                {track.title}
              </p>
              <p style={{ marginTop: "var(--space-3)", color: "var(--color-ink-soft)" }}>
                {track.summary}
              </p>
            </div>
            <ul className="item-list">
              {track.items.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "999px",
                      background: "var(--color-ink)",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
