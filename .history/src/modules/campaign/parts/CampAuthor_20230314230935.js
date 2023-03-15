import React from "react";
import { defaultImage } from "../../../constants/global";

const CampAuthor = ({ author = "Võ Phước Thạnh", image = defaultImage }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
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
