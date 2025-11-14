import Link from "next/link";
import { footerNav } from "@/data/sections";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-2xl font-semibold">Giga</p>
          <p className="text-sm text-white/60">
            Giga’s AI agents handle complex workflows at scale while keeping humans in the loop.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <span>Compliant</span>
            <span>Insights</span>
            <span>Trust Center</span>
          </div>
        </div>
        <div className="grid gap-8 text-sm text-white/70 md:grid-cols-3">
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {section}
              </p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section-shell mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Giga AI, Inc.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
