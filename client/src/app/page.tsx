import BgGradient from "@/components/common/BGGradient";
import DemoSection from "@/components/home/DemoSection";
import HeroSection from "@/components/home/HeroSection";
import HowitworksSection from "@/components/home/HowitworksSection";
import PricingSection from "@/components/home/PricingSection";

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
        </div>
      </div>
    </>
  );
}
