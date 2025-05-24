import HowItWorks from "@/components/features/Rewards/HowItWorks/HowItWorks";
import RewardAbout from "@/components/features/Rewards/RewardAbout/RewardAbout";
import RewardsHero from "@/components/features/Rewards/RewardsHero/RewardsHero";
import React from "react";

export default function RewardsPage() {
  return (
    <div className="fade-in">
      <RewardsHero />
      <RewardAbout />
      <HowItWorks />
    </div>
  );
}
