import HeroSection from "@/components/HeroSection";
import {
  IntroSection,
  ProductDistributionSection,
  ProductPrefabSection,
  StatsCtaSection,
} from "@/components/LandingSections";

export default function Home() {
  return (
    <main className="bg-white text-[#1D2A3A]">
      <HeroSection />
      <IntroSection />
      <ProductPrefabSection />
      <ProductDistributionSection />
      <StatsCtaSection />
    </main>
  );
}
