import Image from "next/image";
import { SectionHeading } from "@/components/primitives/section-heading";
import {
  mediaClips,
  newsItems,
  socialLinks,
  type MediaClip,
  type NewsItem,
  type SocialLink,
} from "@/data/sections";

type CommunicationHubProps = {
  news?: NewsItem[];
  media?: MediaClip[];
  socials?: SocialLink[];
};

export function CustomerSpotlight({
  news = newsItems,
  media = mediaClips,
  socials = socialLinks,
}: CommunicationHubProps) {
  const hasContent = news.length || media.length || socials.length;
  if (!hasContent) {
    return null;
  }

  return (
    <section
      id="communication"
      className="page-shell"
      style={{ marginTop: "var(--space-9)" }}
    >
      <SectionHeading
        eyebrow="Communication"
        title="Newsroom · Media · Social"
        description="Follow the latest announcements, watch our media features, and connect with SKC across channels."
      />

      <div className="news-grid" style={{ marginTop: "var(--space-5)" }}>
        {news.map((item) => (
          <article key={item.title} className="skc-card">
            <p className="badge">{item.category}</p>
            <h3 style={{ marginTop: "var(--space-3)" }}>{item.title}</h3>
            <p style={{ color: "var(--color-ink-soft)" }}>{item.date}</p>
            <a
              href={item.href}
              style={{
                marginTop: "var(--space-3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              newsroom more →
            </a>
          </article>
        ))}
      </div>

      <div className="media-grid" style={{ marginTop: "var(--space-5)" }}>
        {media.map((clip) => (
          <a
            href={clip.href}
            key={clip.videoId}
            target="_blank"
            rel="noreferrer"
            className="skc-card"
            style={{ padding: 0 }}
          >
            <figure style={{ margin: 0, position: "relative" }}>
              <Image
                src={`https://img.youtube.com/vi/${clip.videoId}/0.jpg`}
                alt={clip.title}
                width={640}
                height={360}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <figcaption style={{ padding: "var(--space-4)" }}>
                <p style={{ margin: 0, fontWeight: 600 }}>{clip.title}</p>
                <span style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem" }}>
                  Watch on YouTube
                </span>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>

      <div
        className="skc-card"
        style={{
          marginTop: "var(--space-5)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-4)",
          alignItems: "center",
        }}
      >
        <strong>SKC Social Media</strong>
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="pill"
            target="_blank"
            rel="noreferrer"
          >
            {social.label} · {social.handle}
          </a>
        ))}
      </div>
    </section>
  );
}
