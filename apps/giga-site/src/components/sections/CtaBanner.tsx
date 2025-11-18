import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function CtaBanner() {
  return (
    <section className="pb-24">
      <div className="section-shell">
        <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
          <CardContent className="flex flex-col items-center gap-6 px-8 py-12 text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Get a personalized demo
            </Badge>
            <h3 className="text-3xl font-semibold md:text-4xl">
              Ready to see the Giga AI agent in action?
            </h3>
            <p className="max-w-2xl text-sm text-primary-foreground/90">
              Giga's AI agents handle complex workflows at scale, from live delivery issues
              to compliance decisions, while maintaining over 90% resolution accuracy in production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="uppercase tracking-wider">
                <Link href="/demo">
                  Book a demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="uppercase tracking-wider border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">
                  Talk to sales
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
