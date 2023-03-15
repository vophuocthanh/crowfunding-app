import React from "react";
import classNames from "../../../utils/classNames";

const CampTitle = ({ children, className = "" }) => {
  return (
    <h3 className={classNames("font-semibold text-text1 mb-1")}>{children}</h3>
  );
};

export default CampTitle;
