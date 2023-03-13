import React from "react";

const Checkbox = ({ checked = true }) => {
  return (
    <label
      className={`inline-block w-5 h-5 rounded border border-text4 cursor-pointer ${
        checked ? "bg-primary" : ""
      }`}
    >
      <input type="checkbox" className="hidden" />
    </label>
  );
};

export default Checkbox;
