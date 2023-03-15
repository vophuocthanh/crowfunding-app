import React from "react";

const CampMeta = () => {
  return (
    <div className="flex items-start justify-between gap-x-5 mb-5">
      <div className="flex flex-col gap-y-1">
        <h4 className="text-text2 text-sm font-semibold">$2,000</h4>
        <span className="text-text4 text-xs">Raised of $1,900</span>
      </div>
      <div className="flex flex-col gap-y-1">
        <h4 className="text-text2 text-sm font-semibold">173</h4>
        <span className="text-text4 text-xs">Total backers</span>
      </div>
    </div>
  );
};

export default CampMeta;
