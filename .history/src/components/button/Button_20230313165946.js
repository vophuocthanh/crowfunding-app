import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "", children, className = "" }) => {
  return (
    <button
      className={`p-4 text-base font-semibold rounded-xl flex justify-center items-center text-white ${className}`}
      type={type}
      {...rest}
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
