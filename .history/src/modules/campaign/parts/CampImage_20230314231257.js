import React from "react";
import { defaultImage } from "../../../constants/global";

const CampImage = (image = defaultImage) => {
  return (
    <div className="h-[158px] ">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
