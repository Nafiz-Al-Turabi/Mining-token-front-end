import { EarningsChart } from "@/components/features/UserDashboard/ReferralRewards/EarningsChart/EarningsChart";
import ReferralRewardsLists from "@/components/features/UserDashboard/ReferralRewards/ReferralRewardsLists/ReferralRewardsLists";
import { ReferralsChart } from "@/components/features/UserDashboard/ReferralRewards/ReferralsChart/ReferralsChart";
import RefferralCode from "@/components/features/UserDashboard/ReferralRewards/RefferralCode/RefferralCode";
import React from "react";

export default function ReferralRewardsPage() {
  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReferralsChart />
        <EarningsChart />
      </div>
      <RefferralCode />
      <ReferralRewardsLists />
    </div>
  );
}
