import Link from "next/link";
import { footerNav } from "@/data/sections";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <img src="/intune-labs-logo.png" alt="Intune Labs" className="h-12 w-auto md:h-14" />
          <p className="text-sm text-muted-foreground">
            Intune Labs' AI agents handle complex workflows at scale while keeping humans in the loop.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Compliant</span>
            <span>•</span>
            <span>Insights</span>
            <span>•</span>
            <span>Trust Center</span>
          </div>
        </div>
        <div className="grid gap-8 text-sm text-muted-foreground md:grid-cols-3">
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                {section}
              </p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator className="my-8" />
      <div className="section-shell flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Intune Labs, Inc.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
