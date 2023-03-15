import React from "react";
import classNames from "../../../utils/classNames";

const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4 className={classNames("text-text2 text-sm font-semibold")}>
        {amount}
      </h4>
      <span className="text-text4 text-xs">{text}</span>
    </div>
  );
};

export default CampMeta;
