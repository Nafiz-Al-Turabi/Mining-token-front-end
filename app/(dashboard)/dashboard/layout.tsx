import UserDashboardLayout from "@/components/Layouts/UserDashboardLayout";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserDashboardLayout>{children}</UserDashboardLayout>;
}
