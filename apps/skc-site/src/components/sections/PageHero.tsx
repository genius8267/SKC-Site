interface PageHeroStat {
  label: string;
  value: string;
  note?: string;
}

interface PageHeroAction {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost';
}

interface PageHeroHighlight {
  title: string;
  description: string;
  icon?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  stats?: PageHeroStat[];
  actions?: PageHeroAction[];
  highlights?: PageHeroHighlight[];
}

export function PageHero({
  eyebrow,
  title,
  description,
  stats,
  actions,
  highlights,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30 blur-[120px] bg-gradient-radial from-skc-red/40 via-transparent to-transparent pointer-events-none" />
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-text-tertiary mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">{description}</p>

          {actions?.length ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className={
                    action.variant === 'ghost'
                      ? 'px-6 py-3 rounded-full border border-white/20 text-sm text-foreground hover:border-white/50 transition'
                      : 'px-6 py-3 rounded-full bg-gradient-skc text-sm font-medium'
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {stats?.length ? (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-4">
                <div className="text-2xl font-light text-white">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
                {stat.note ? (
                  <div className="text-xs text-text-tertiary mt-2">{stat.note}</div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {highlights?.length ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="glass-card p-5 flex gap-4">
                <div className="text-3xl" aria-hidden>
                  {highlight.icon ?? '✨'}
                </div>
                <div>
                  <div className="text-base font-medium mb-1">{highlight.title}</div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
