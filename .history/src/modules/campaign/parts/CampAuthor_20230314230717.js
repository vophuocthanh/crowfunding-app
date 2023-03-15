import React from "react";

const CampAuthor = ({ author = "Võ Phước Thạnh", image }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        alt=""
        className="w-8 h-8 rounded-full object-cover"
      ></img>
      <p className="text-text3 font-xs">
        By <span className="text-text2 font-semibold">Võ Phước Thạnh</span>
      </p>
    </div>
  );
};

export default CampAuthor;
