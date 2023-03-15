import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import DashBoardFund from "./DashBoardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <Link></Link>
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashBoardFund></DashBoardFund>
        <Button className="bg-secondary px-7" type="button" href="/campaign">
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
