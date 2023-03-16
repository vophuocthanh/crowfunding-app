import React from "react";
import { defaultImage } from "../../constants/global";

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-1 rounded-xl">
      <img
        src={defaultImage}
        alt=""
        className="h-[232px] object-cover rounded-xl"
      />
    </div>
  );
};

export default CampaignPerk;
