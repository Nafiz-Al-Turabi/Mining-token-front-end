import React from "react";
import PlansDetailsHero from "../PlansDetails                Hero/PlansDetailsHero";
import NewsLetter from "../../NewsLetter/NewsLetter";
import PurchaseNotice from "../PurchaseNotice/PurchaseNotice";

const PlansDetails = () => {
  return (
    <div>
      <PlansDetailsHero />
      <PurchaseNotice />
      <NewsLetter />
    </div>
  );
};

export default PlansDetails;
