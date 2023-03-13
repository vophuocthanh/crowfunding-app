import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "", children, className = "", ...rest }) => {
  return (
    <button
      className={`p-4 text-base font-semibold rounded-xl flex justify-center items-center text-white min-h-[56px] ${className}`}
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
