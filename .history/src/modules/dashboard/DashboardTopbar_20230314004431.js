import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-14 flex-1">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10"></div>
    </div>
  );
};

export default DashboardTopbar;
