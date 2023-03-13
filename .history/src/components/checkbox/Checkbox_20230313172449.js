import React from "react";

const Checkbox = ({ checked = true }) => {
  return (
    <label
      className={`inline-block w-5 h-5 rounded border cursor-pointer ${
        checked ? "bg-primary border-primary" : "bg-white border border-text4"
      }`}
    >
      <input type="checkbox" className="hidden" />
    </label>
  );
};

export default Checkbox;
