import React, { Fragment } from "react";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center
        text-white font-bold text-[40px]"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, rgba(0,0,0,0.4) 87.01%), url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
    </Fragment>
  );
};

export default CampaignView;
