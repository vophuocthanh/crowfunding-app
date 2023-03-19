import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CampaignAddNew from "../modules/campaign/CampaignAddNew";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaignPage;
