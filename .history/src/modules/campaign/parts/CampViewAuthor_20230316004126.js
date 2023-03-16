import React from "react";
import { defaultImage } from "../../../constants/global";

const CampViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5">
      <img src={defaultImage} alt="" className="w-[60px] h-[60px]" />
    </div>
  );
};

export default CampViewAuthor;
