import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";

const CampCategory = ({ children }) => {
  return (
    <div>
      <Link
        to="/"
        className="flex items-baseline gap-x-3 text-xs font-medium text-text3 mb-4"
      >
        <IconFolder></IconFolder>
        <span>{children}</span>
      </Link>
    </div>
  );
};

export default CampCategory;
