import React, { Fragment } from "react";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random)`,
        }}
      ></div>
    </Fragment>
  );
};

export default CampaignView;
