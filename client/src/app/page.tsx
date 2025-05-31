import BgGradient from "@/components/common/BGGradient";
import CTASection from "@/components/pages/home/CTASection";
import DemoSection from "@/components/pages/home/DemoSection";
import HeroSection from "@/components/pages/home/HeroSection";
import HowitworksSection from "@/components/pages/home/HowitworksSection";
import PricingSection from "@/components/pages/home/PricingSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <BgGradient />
        <div className="flex flex-col">
          <HeroSection />
          <DemoSection />
          <HowitworksSection />
          <PricingSection />
          <CTASection />
        </div>
      </div>
    </>
  );
}
