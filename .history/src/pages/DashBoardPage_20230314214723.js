import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";

const DashBoardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem></CampaignItem>
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashBoardPage;
