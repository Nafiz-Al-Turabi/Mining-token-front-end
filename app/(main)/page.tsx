import HeroSection from "@/components/features/Home/HeroSection/HeroSection";
import WhatIsMining from "@/components/features/Home/WhatIsMining/WhatIsMining";
import HowToStartMining from "@/components/features/Home/HowToStartMining/HowToStartMining";
import Plan from "@/components/features/Home/Plan/Plan";
import OperatingPrinciple from "@/components/features/Home/OperatingPrinciple/OperatingPrinciple";
import OurBusinessModel from "@/components/features/Home/OurBusinessModel/OurBusinessModel";
import RecentDepositsWithdraws from "@/components/features/Home/RecentDepositsWithdraws/RecentDepositsWithdraws";
export default function MainPage() {
  return (
    <div>
      <HeroSection />
      <WhatIsMining />
      <HowToStartMining />
      <Plan />
      <OperatingPrinciple />
      <OurBusinessModel />
      <RecentDepositsWithdraws />
    </div>
  );
}
