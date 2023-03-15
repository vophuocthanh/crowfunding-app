import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";

const DashBoardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Heading>Popular campaign</Heading>
    </LayoutDashboard>
  );
};

export default DashBoardPage;
