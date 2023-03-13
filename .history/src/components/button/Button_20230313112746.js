import React from "react";
import PropTypes from "prop-types";

const Button = ({ type }) => {
  return <button type={type}></button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
