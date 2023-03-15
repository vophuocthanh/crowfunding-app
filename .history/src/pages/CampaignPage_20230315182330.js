import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your Campaign </Heading>
      <CampaignGrid>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
