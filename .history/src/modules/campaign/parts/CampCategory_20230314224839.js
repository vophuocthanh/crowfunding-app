import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";

const CampCategory = ({ text = "Education" }) => {
  return (
    <Link
      to="/"
      className="flex items-baseline gap-x-3 text-xs font-medium text-text3 mb-4"
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
