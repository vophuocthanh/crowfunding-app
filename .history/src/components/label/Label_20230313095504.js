import React from "react";

const Label = (props) => {
  const { children } = props;
  return (
    <label className="text-sm font-medium text-text2 cursor-pointer inline-block">
      {children}
    </label>
  );
};

export default Label;
