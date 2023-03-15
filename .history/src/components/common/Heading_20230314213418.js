import React from "react";
import classNames from "../../utils/classNames";

const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={classNames("text-lg font-semibold text-text1")}>
      {children}
    </h2>
  );
};

export default Heading;
