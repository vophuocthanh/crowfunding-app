import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children }) => {
  return <button type={type}>{children}</button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
