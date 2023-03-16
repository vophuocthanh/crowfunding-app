import React from "react";
import { defaultImage } from "../../constants/global";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-1 rounded-xl">
      <img
        src={defaultImage}
        alt=""
        className="h-[232px] object-cover rounded-xl w-full"
      />
      <div className="p-5">
        <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary">
          Feature
        </span>
        <CampTitle className="mb-1 text-xl font-semibold">
          Special One Camera
        </CampTitle>
      </div>
    </div>
  );
};

export default CampaignPerk;
