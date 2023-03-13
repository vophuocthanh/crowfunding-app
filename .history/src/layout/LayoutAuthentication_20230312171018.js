import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link to="./" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8"></div>
    </div>
  );
};

export default LayoutAuthentication;
