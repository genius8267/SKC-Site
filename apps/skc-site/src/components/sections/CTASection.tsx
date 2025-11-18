interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTASectionProps) {
  return (
    <section className="section-shell">
      <div className="glass-card p-10 md:p-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-2">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="text-3xl font-light text-white mb-3">{title}</h3>
          <p className="text-base text-text-secondary">{description}</p>
        </div>
        <div className="flex gap-3">
          <a
            href={primaryAction.href}
            className="px-6 py-3 rounded-full bg-gradient-skc text-sm font-medium"
          >
            {primaryAction.label}
          </a>
          {secondaryAction ? (
            <a
              href={secondaryAction.href}
              className="px-6 py-3 rounded-full border border-white/20 text-sm text-foreground hover:border-white/50 transition"
            >
              {secondaryAction.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
