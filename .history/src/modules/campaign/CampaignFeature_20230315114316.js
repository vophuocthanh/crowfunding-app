import React from "react";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory
          text="Architecture"
          className="text-sm mb-4"
        ></CampCategory>
      </div>
    </div>
  );
};

export default CampaignFeature;
