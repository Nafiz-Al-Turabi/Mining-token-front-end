import Overview from "@/components/features/UserDashboard/Overview/Overview";
import OverviewTable from "@/components/features/UserDashboard/OverviewTable/OverviewTable";
import RewardChart from "@/components/features/UserDashboard/OverviewsCharts/RewardChart";
import TrialFundChart from "@/components/features/UserDashboard/OverviewsCharts/TrialFundChart";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="fade-in">
      <Overview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TrialFundChart />
        <RewardChart />
      </div>
      <OverviewTable />
    </div>
  );
}
