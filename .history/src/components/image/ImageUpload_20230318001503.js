import React from "react";

const ImageUpload = () => {
  return (
    <label className="block w-full rounded-xl border border-dashed border-gray-200 h-20">
      <input type="file" onChange={() => {}} className="hidden" />
    </label>
  );
};

export default ImageUpload;
