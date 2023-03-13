import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-top-transparent animate-spin"></div>
  ) : (
    child
  );
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
  isLoading: PropTypes.bool,
};

export default Button;
