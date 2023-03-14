import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-10">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <DashboardSearch></DashboardSearch>
      </div>
    </div>
  );
};

export default DashboardTopbar;
