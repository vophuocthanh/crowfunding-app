import React from "react";
import { defaultImage } from "../../constants/global";

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-1">
      <img
        src={defaultImage}
        alt=""
        className="h-[232px] object-cover rounded-lg"
      />
    </div>
  );
};

export default CampaignPerk;
