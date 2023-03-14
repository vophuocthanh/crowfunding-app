import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center">
      <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      <DashboardSearch></DashboardSearch>
    </div>
  );
};

export default DashboardTopbar;
