import React from "react";

const Label = ({ children }) => {
  return (
    <label className="text-sm font-medium text-text2 cursor-pointer inline-block">
      {children}
    </label>
  );
};

export default Label;
