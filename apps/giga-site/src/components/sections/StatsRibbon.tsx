import { stats } from "@/data/sections";
import { Separator } from "@/components/ui/separator";

export function StatsRibbon() {
  return (
    <section className="py-10 bg-muted/30">
      <div className="section-shell">
        <div className="flex gap-12 overflow-x-auto px-6 py-6 md:gap-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-12">
              <div className="min-w-[180px]">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.detail}</p>
              </div>
              {index < stats.length - 1 && (
                <Separator orientation="vertical" className="h-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
