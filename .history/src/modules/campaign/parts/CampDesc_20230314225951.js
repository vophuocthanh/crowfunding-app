import React from "react";
import classNames from "../../../utils/classNames";

const CampDesc = ({ children, className = "text-xs mb-4" }) => {
  return <p className={classNames("text-text3 font-normal")}>{children}</p>;
};

export default CampDesc;
