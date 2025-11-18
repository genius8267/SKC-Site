import Link from 'next/link';
import type { NewsArticle } from '@/data/homepage';

const categoryColors: Record<NewsArticle['category'], string> = {
  battery: 'rgba(0, 153, 255, 0.2)',
  semiconductor: 'rgba(224, 5, 41, 0.2)',
  'eco-friendly': 'rgba(102, 255, 228, 0.2)',
  esg: 'rgba(230, 117, 37, 0.2)',
};

interface SkcNewsListProps {
  title: string;
  eyebrow?: string;
  description?: string;
  articles: NewsArticle[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function SkcNewsList({
  title,
  eyebrow,
  description,
  articles,
  ctaHref,
  ctaLabel = 'View all news →',
}: SkcNewsListProps) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">{eyebrow}</p>
        ) : null}
        <h2 className="text-4xl md:text-5xl font-light">
          {title}
        </h2>
        {description ? (
          <p className="text-text-secondary">{description}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/communication/news/${article.id}`}
            className="glass-card p-6 border border-white/10 hover:border-skc-red/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="pill text-xs px-3 py-1 capitalize"
                style={{ backgroundColor: categoryColors[article.category] }}
              >
                {article.category}
              </span>
              <span className="text-xs text-text-tertiary">{article.date}</span>
            </div>
            <h3 className="text-lg font-medium leading-snug group-hover:text-skc-red transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center text-accent-primary text-sm font-medium gap-2 mt-6">
              Read more
              <span aria-hidden className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {ctaHref ? (
        <div className="text-center">
          <Link
            href={ctaHref}
            className="glass-card inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.3em] text-accent-primary hover:text-foreground transition-colors border border-white/20 hover:border-skc-red/40"
          >
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
