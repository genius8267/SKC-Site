import type { Stat } from '@/data/homepage';

interface SkcStatsGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stats: Stat[];
}

/**
 * Responsive stat grid component that follows the SK Website Test
 * cards (glassmorphism, uppercase eyebrow, subtle notes).
 */
export function SkcStatsGrid({ eyebrow, title, description, stats }: SkcStatsGridProps) {
  return (
    <div className="space-y-10">
      {eyebrow || title || description ? (
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">{eyebrow}</p>
          ) : null}
          {title ? (
            <h2 className="text-4xl md:text-5xl font-light">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-text-secondary">{description}</p>
          ) : null}
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="glass-card p-8 text-center border border-white/10 hover:border-skc-red/30 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-4">
              {stat.label}
            </p>
            <p className="text-4xl md:text-5xl font-light">{stat.value}</p>
            {stat.note ? (
              <p className="text-xs text-text-secondary mt-3">{stat.note}</p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
