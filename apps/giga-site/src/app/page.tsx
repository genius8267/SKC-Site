import { Hero } from "@/components/sections/Hero";
import { StatsRibbon } from "@/components/sections/StatsRibbon";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { AgentCanvasSection } from "@/components/sections/AgentCanvasSection";
import { ModalityTabs } from "@/components/sections/ModalityTabs";
import { SmartInsightsSection } from "@/components/sections/SmartInsightsSection";
import { VoiceExperienceSection } from "@/components/sections/VoiceExperienceSection";
import { CustomerSpotlight } from "@/components/sections/CustomerSpotlight";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 pb-20 pt-4">
      <Hero />
      <StatsRibbon />
      <FeatureShowcase />
      <AgentCanvasSection />
      <ModalityTabs />
      <SmartInsightsSection />
      <VoiceExperienceSection />
      <CustomerSpotlight />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
