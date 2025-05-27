import Overview from "@/components/features/UserDashboard/Overview/Overview";
import OverviewTable from "@/components/features/UserDashboard/OverviewTable/OverviewTable";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <Overview />
      <OverviewTable />
    </div>
  );
}
