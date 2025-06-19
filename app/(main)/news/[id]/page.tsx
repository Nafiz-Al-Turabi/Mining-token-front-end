import NewsDetails from "@/components/features/News/NewsDetails/NewsDetails";
import React from "react";

export default function NewsDetailsPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div className="fade-in">
      <NewsDetails id={params.id} />
    </div>
  );
}
