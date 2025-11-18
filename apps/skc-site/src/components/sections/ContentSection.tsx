interface ContentSectionItem {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
}

interface ContentSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items?: ContentSectionItem[];
  columns?: 2 | 3;
}

export function ContentSection({
  eyebrow,
  title,
  description,
  items,
  columns = 2,
}: ContentSectionProps) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl mb-10">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-light text-white mb-4">{title}</h2>
        {description ? (
          <p className="text-base text-text-secondary leading-relaxed">{description}</p>
        ) : null}
      </div>

      {items?.length ? (
        <div
          className={`grid grid-cols-1 gap-6 ${
            columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
          }`}
        >
          {items.map((item) => (
            <div key={item.title} className="glass-card p-6 space-y-3">
              {item.icon ? <div className="text-3xl" aria-hidden>{item.icon}</div> : null}
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{item.title}</p>
                {item.badge ? (
                  <span className="pill text-xs bg-white/10">{item.badge}</span>
                ) : null}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
