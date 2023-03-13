import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link to="./">
        <img src="/logo.png" alt="" />
      </Link>
    </div>
  );
};

export default LayoutAuthentication;
