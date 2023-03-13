import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link to="./" className="block">
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding"
          className="inline-block mb-5 mb-16"
        />
      </Link>
    </div>
  );
};

export default LayoutAuthentication;
