import React from "react";
import CampImage from "./parts/CampImage";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        animi, possimus velit quod quisquam laboriosam vitae sit pariatur natus
        doloribus iste harum ratione eveniet nulla, quam, nihil eius sint
        voluptatibus!
      </div>
    </div>
  );
};

export default CampaignFeature;
