import React from "react";
import PasswordChangeStepper from "@/components/features/UserDashboard/Settings/PasswordChangeStepper/PasswordChangeStepper";
import TwoFactorAuthCard from "@/components/features/UserDashboard/Settings/TwoFactorAuthCard/TwoFactorAuthCard";
export default function SettingsPage() {
  return (
    <div className="fade-in grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-6">
      <div className="lg:col-span-3 ">
        <TwoFactorAuthCard />
      </div>
      <div className="lg:col-span-5">
        <PasswordChangeStepper />
      </div>
    </div>
  );
}
