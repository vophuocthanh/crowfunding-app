import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../modules/campaign/CampaignGrid";

const DashBoardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Heading>Popular campaign</Heading>
      <CampaignGrid></CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashBoardPage;
