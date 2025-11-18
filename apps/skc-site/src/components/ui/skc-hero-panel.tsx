import Link from 'next/link';

export interface HeroCategory {
  icon: string;
  title: string;
  description?: string;
  href: string;
}

export interface HeroPartner {
  name: string;
  url: string;
}

interface SkcHeroPanelProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  categories: HeroCategory[];
  partners: HeroPartner[];
}

/**
 * Hero panel inspired by the ElevenLabs registry blueprints.
 * Mirrors the static SK Website Test layout (big headline, business categories, partner rail).
 */
export function SkcHeroPanel({
  eyebrow = 'Global ESG material solutions company',
  title,
  subtitle,
  highlight,
  categories,
  partners,
}: SkcHeroPanelProps) {
  return (
    <div className="space-y-10 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.3em] text-text-secondary">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-skc-red to-skc-orange" aria-hidden />
        {eyebrow}
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-balance">
          {highlight && title.includes(highlight) ? (
            <>
              {title.split(highlight).map((segment, index, arr) => (
                <span key={`${segment}-${index}`}>
                  {segment}
                  {index < arr.length - 1 ? (
                    <span className="text-gradient-skc font-medium">{highlight}</span>
                  ) : null}
                </span>
              ))}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle ? (
          <p className="text-lg md:text-2xl text-text-secondary mx-auto max-w-3xl">{subtitle}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="glass-card px-6 py-6 flex items-start gap-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-skc-red/30"
          >
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
              {category.icon}
            </div>
            <div>
              <div className="text-lg font-medium text-foreground">{category.title}</div>
              {category.description ? (
                <p className="text-sm text-text-secondary mt-1">{category.description}</p>
              ) : null}
              <div className="text-xs text-accent-primary mt-4 flex items-center gap-1">
                Explore
                <span aria-hidden>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-tertiary">
        {partners.map((partner) => (
          <Link
            key={partner.name}
            href={partner.url}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-accent-primary transition-colors"
          >
            {partner.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
