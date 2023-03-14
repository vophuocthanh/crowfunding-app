import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-x-14">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className="ml-14 max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
