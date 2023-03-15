import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  type = "",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  const defaultClassName =
    "p-4 text-base font-semibold rounded-xl flex justify-center items-center text-white min-h-[56px]";
  if (rest.href) return <Link to={defaultClassName}>demo</Link>;
  return (
    <button
      className={classNames(
        defaultClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      type={type}
      {...rest}
    >
      {child}
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
