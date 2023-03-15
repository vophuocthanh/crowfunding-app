import React from "react";

const CampaignGrid = ({ children, type = "default" }) => {
  if (type !== "default") return <div className="grid grid-cols-1"></div>;
  return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};

export default CampaignGrid;
