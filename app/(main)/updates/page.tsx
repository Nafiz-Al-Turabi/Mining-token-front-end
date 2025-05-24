import UpdateMain from "@/components/features/updates/UpdateMain/UpdateMain";
import UpdatesHero from "@/components/features/updates/UpdatesHero/UpdatesHero";
import UpdatesCard from "@/components/ui/Cards/UpdatesCard";
import React from "react";
export default function UpdatesPage() {
  return (
    <div className='fade-in'>
      <UpdatesHero />
      <UpdateMain />
    </div>
  );
}
