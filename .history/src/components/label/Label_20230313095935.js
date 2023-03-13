import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { children } = props;
  return (
    <label className="text-sm font-medium text-text2 cursor-pointer inline-block">
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.bool,
};

export default Label;
