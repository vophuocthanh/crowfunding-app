import React from "react";

const Checkbox = ({ checked = true }) => {
  return (
    <label
      className={`inline-block w-5 h-5 rounded border cursor-pointer ${
        checked ? "bg-primary border-primary" : "border-text4"
      }`}
    >
      <input type="checkbox" className="hidden" />
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </label>
  );
};

export default Checkbox;
