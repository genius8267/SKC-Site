import { CustomerSpotlight } from "@/components/sections/CustomerSpotlight";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Hero } from "@/components/sections/Hero";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { StatsRibbon } from "@/components/sections/StatsRibbon";

export default function Home() {
  return (
    <main style={{ paddingBlock: "var(--space-4)" }}>
      <Hero />
      <StatsRibbon />
      <FeatureShowcase />
      <CustomerSpotlight />
      <SiteFooter />
    </main>
  );
}
