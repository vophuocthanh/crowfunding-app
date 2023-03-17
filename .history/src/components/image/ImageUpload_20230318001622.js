import React from "react";

const ImageUpload = () => {
  return (
    <label className="w-full rounded-xl border border-dashed border-gray-200 h-[200px] cursor-pointer flex items-center justify-center">
      <input type="file" onChange={() => {}} className="hidden" />
    </label>
  );
};

export default ImageUpload;
