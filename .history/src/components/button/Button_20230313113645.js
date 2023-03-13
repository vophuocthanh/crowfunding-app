import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children }) => {
  return (
    <button
      className="bg-primary py-4 text-base font-semibold rounded-xl text-white flex justify-center"
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
