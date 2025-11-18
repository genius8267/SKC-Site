import Link from "next/link";
import { address, familySites, siteLinks } from "@/data/sections";

export function SiteFooter() {
  return (
    <footer
      className="page-shell"
      style={{
        marginTop: "var(--space-9)",
        paddingBottom: "var(--space-6)",
      }}
    >
      <div className="skc-card footer-grid">
        <div>
          <p className="pill">SKC Materials</p>
          <p style={{ marginTop: "var(--space-3)", maxWidth: "360px" }}>
            SK Ethical Management · Sitemap
          </p>
          <p className="footer-meta" style={{ marginTop: "var(--space-3)" }}>
            {address}
          </p>
        </div>
        {siteLinks.map((group) => (
          <div key={group.title}>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.75rem",
                color: "var(--color-ink-muted)",
              }}
            >
              {group.title}
            </p>
            <ul style={{ listStyle: "none", margin: "var(--space-3) 0 0", padding: 0 }}>
              {group.links.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.35rem" }}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="skc-card"
        style={{
          marginTop: "var(--space-5)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-3)",
          alignItems: "center",
        }}
      >
        <strong>Family site</strong>
        {familySites.map((site) => (
          <a
            key={site.label}
            href={site.href}
            className="pill"
            target="_blank"
            rel="noreferrer"
          >
            {site.label}
          </a>
        ))}
      </div>

      <div
        style={{
          marginTop: "var(--space-4)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          fontSize: "0.85rem",
          color: "var(--color-ink-muted)",
        }}
      >
        <span>© {new Date().getFullYear()} SKC. All rights reserved.</span>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
