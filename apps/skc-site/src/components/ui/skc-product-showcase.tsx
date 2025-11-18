import Link from 'next/link';
import type { Product } from '@/data/homepage';

interface SkcProductShowcaseProps {
  title: string;
  eyebrow?: string;
  description?: string;
  products: Product[];
}

/**
 * Product grid built to resemble the SK Website Test "Creation" cards.
 */
export function SkcProductShowcase({ title, eyebrow, description, products }: SkcProductShowcaseProps) {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">{eyebrow}</p>
        ) : null}
        <h2 className="text-4xl md:text-5xl font-light">
          {title}
        </h2>
        {description ? (
          <p className="text-text-secondary max-w-2xl mx-auto">
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.title}
            href={product.href}
            className="glass-card p-8 flex flex-col gap-6 border border-white/10 hover:border-skc-red/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
              {product.icon}
            </div>
            <div>
              <p className="text-2xl font-medium text-foreground">{product.title}</p>
              <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex items-center text-accent-primary text-sm font-medium gap-2">
              Explore
              <span aria-hidden className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
