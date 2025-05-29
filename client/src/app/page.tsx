import BgGradient from "@/components/common/BGGradient";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <BgGradient />
        <div className="flex flex-col">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
