import React from "react";
import CampImage from "./parts/CampImage";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1"></div>
    </div>
  );
};

export default CampaignFeature;
