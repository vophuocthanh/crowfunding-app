import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="mb-10 bg-white rounded-3xl"></div>
      <Heading number={4}>Your Campaign </Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
