import React, { Fragment } from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center
        text-white font-bold text-[40px] mb-10"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0.4) -7.14%, rgba(0,0,0,0.4) 87.01%), url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-center gap-x-[30px] w-full max-w-[1066px]">
        <div>
          <CampImage className="h-[266px] flex-1"></CampImage>
        </div>
        <div className="flex-1 max-w-[435px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignView;
