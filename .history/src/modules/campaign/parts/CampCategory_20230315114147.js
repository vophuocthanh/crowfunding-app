import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";
import classNames from "../../../utils/classNames";

const CampCategory = ({ text = "Education", className = "" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-baseline gap-x-3 text-xs font-medium text-text3 mb-4",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
