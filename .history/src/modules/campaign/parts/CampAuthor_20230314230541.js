import React from "react";
import classNames from "../../../utils/classNames";

const CampAuthor = ({ children, className = "" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        alt=""
        className={classNames("w-8 h-8 rounded-full object-cover", className)}
      ></img>
      <p className={classNames("text-text3 font-xs", className)}>
        By <span className="text-text2 font-semibold">Võ Phước Thạnh</span>
      </p>
    </div>
  );
};

export default CampAuthor;
