import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import Gap from "../components/common/Gap";

const DashBoardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Gap>
        <CampaignFeature></CampaignFeature>
      </Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashBoardPage;
