import HeroSection from "@/components/features/Home/HeroSection/HeroSection";
import WhatIsMining from "@/components/features/Home/WhatIsMining/WhatIsMining";
import HowToStartMining from "@/components/features/Home/HowToStartMining/HowToStartMining";
import React from "react";

export default function MainPage() {
  return (
    <div>
      <HeroSection />
      <WhatIsMining />
      <HowToStartMining />
    </div>
  );
}
