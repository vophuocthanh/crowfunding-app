import React from "react";

const CampMeta = ({ amount = "$2,000", text = "Raised of $1,900" }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4 className="text-text2 text-sm font-semibold">{amount}</h4>
      <span className="text-text4 text-xs">{text}</span>
    </div>
  );
};

export default CampMeta;
