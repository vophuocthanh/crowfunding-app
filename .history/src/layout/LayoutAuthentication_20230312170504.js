import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link to="./" className="block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding" className="inline-block" />
      </Link>
    </div>
  );
};

export default LayoutAuthentication;
