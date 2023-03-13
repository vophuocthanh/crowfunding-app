import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "", children, className = "" }) => {
  return (
    <button
      className={`py-4 text-base font-semibold rounded-xl flex justify-center items-center ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
