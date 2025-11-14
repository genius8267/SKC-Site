import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="pb-24">
      <div className="section-shell">
        <div className="glass-card flex flex-col items-center gap-6 px-8 py-12 text-center">
          <p className="pill bg-white/10 text-white/80">Get a personalized demo</p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to see the Giga AI agent in action?
          </h3>
          <p className="max-w-2xl text-sm text-white/70">
            Giga’s AI agents handle complex workflows at scale, from live delivery issues
            to compliance decisions, while maintaining over 90% resolution accuracy in production.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-[0.2em]">
            <Link
              href="/demo"
              className="rounded-full bg-white px-6 py-3 text-black hover:scale-105"
            >
              Book a demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-white hover:border-white/70"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
