import React from "react";

const IconEyeToggle = ({ toggle = false }) => {
  if (toggle)
    return (
      <span>
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8C1 8 4.27273 1 10 1C15.7273 1 19 8 19 8C19 8 15.7273 15 10 15C4.27273 15 1 8 1 8Z"
            stroke="#A2A2A8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z"
            stroke="#A2A2A8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    );
  return (
    <span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          d="M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z"
          stroke="#A2A2A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
          stroke="#A2A2A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default IconEyeToggle;
