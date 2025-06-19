import HeroSection from "@/components/features/Home/HeroSection/HeroSection";
import WhatIsMining from "@/components/features/Home/WhatIsMining/WhatIsMining";
import HowToStartMining from "@/components/features/Home/HowToStartMining/HowToStartMining";
import Plan from "@/components/features/Home/Plan/Plan";
import OperatingPrinciple from "@/components/features/Home/OperatingPrinciple/OperatingPrinciple";
import OurBusinessModel from "@/components/features/Home/OurBusinessModel/OurBusinessModel";
import RecentDepositsWithdraws from "@/components/features/Home/RecentDepositsWithdraws/RecentDepositsWithdraws";
import News from "@/components/features/Home/NewsSection/NewsSection";
import FAQ from "@/components/features/Home/FAQ/FAQ";
import AboutCompany from "@/components/features/Home/AboutCompany/AboutCompany";
import WhyChooseHEXminer from "@/components/features/Home/WhyChooseHEXminer/WhyChooseHEXminer";
export default function MainPage() {
  return (
    <div className=' fade-in'>
      <HeroSection />
      <WhatIsMining />
      <HowToStartMining />
      <Plan />
      <WhyChooseHEXminer />
      <OperatingPrinciple />
      <OurBusinessModel />
      <RecentDepositsWithdraws />
      <News />
      <FAQ />
      <AboutCompany />
    </div>
  );
}
