import React from "react";
import PasswordChangeStepper from "@/components/features/UserDashboard/Settings/PasswordChangeStepper/PasswordChangeStepper";
export default function SettingsPage() {
  return (
    <div className="fade-in grid grid-cols-1 lg:grid-cols-8">
      <div className="lg:col-span-3">
        Hello
      </div>
      <div className="lg:col-span-5">
        <PasswordChangeStepper />
      </div>
    </div>
  );
}
