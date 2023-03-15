import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";
import classNames from "../../../utils/classNames";

const CampCategory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-baseline gap-x-3 mb-4 font-medium text-text3",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
