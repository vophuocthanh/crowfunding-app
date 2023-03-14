import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center">
      <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      <div className="flex items-center gap-x-10">
        <DashboardSearch></DashboardSearch>
      </div>
    </div>
  );
};

export default DashboardTopbar;
