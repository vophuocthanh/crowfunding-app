import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignFeature from "../modules/campaign/CampaignFeature";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your Campaign </Heading>
      <div className="mb-10">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </div>
    </LayoutDashboard>
  );
};

export default CampaignPage;
